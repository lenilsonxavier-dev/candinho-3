import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  Send, 
  Trash2, 
  X,
  Palette
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { bibliotecaCultural } from "./data/bibliotecaCultural";
import { resolverMensagemLocalmente, extrairNome } from "./utils/conversationalEngine";
import Typewriter from "./components/Typewriter";

interface ImagePayload {
  imagemUrl: string;
  titulo: string;
  credito: string;
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  image?: ImagePayload | null;
  timestamp: Date;
  isImageRequested?: boolean; // Controls whether image is revealed
}

// Sugestões removidas para reduzir o tamanho vertical da tela

const getProxiedImageUrl = (url: string) => {
  if (!url) return "";
  if (url.startsWith("/") || url.startsWith("data:")) return url;
  return `/api/proxy-image?url=${encodeURIComponent(url)}`;
};

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [modalImage, setModalImage] = useState<ImagePayload | null>(null);
  const [nomeCrianca, setNomeCrianca] = useState<string>(() => {
    return localStorage.getItem("candinho_nome_crianca") || "";
  });

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial welcome message
  useEffect(() => {
    const nomeSalvo = localStorage.getItem("candinho_nome_crianca") || "";
    if (nomeSalvo) {
      setMessages([
        {
          id: "welcome",
          text: `Olá, **${nomeSalvo}**! Que alegria te ver de novo na minha paleta de descobertas! O que vamos descobrir hoje, meu pequeno artista? 🎨`,
          sender: "bot",
          timestamp: new Date()
        }
      ]);
    } else {
      setMessages([
        {
          id: "welcome",
          text: "Olá! Sou o Candinho, seu amigo artista. O que vamos descobrir hoje? 🎨 Como você se chama?",
          sender: "bot",
          timestamp: new Date()
        }
      ]);
    }
  }, []);

  // Smooth scroll to bottom of chat
  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isProcessing]);

  // Focus typing input automatically whenever processing finishes
  useEffect(() => {
    if (!isProcessing) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isProcessing]);

  // Handle Send message
  const handleSend = async (text: string) => {
    const queryText = text.trim();
    if (!queryText || isProcessing) return;

    // Direct name extraction client-side for immediate state updates & persistence
    const nomeEncontrado = extrairNome(queryText);
    let updatedNome = nomeCrianca;
    if (nomeEncontrado) {
      setNomeCrianca(nomeEncontrado);
      localStorage.setItem("candinho_nome_crianca", nomeEncontrado);
      updatedNome = nomeEncontrado;
    }

    // 1. Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: queryText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsProcessing(true);

    // Verify local structured dictionary immediately (client-side matching guarantee)
    const localResult = resolverMensagemLocalmente(queryText, bibliotecaCultural);
    const isArtistMatched = !!localResult?.matchedKey;

    try {
      const response = await fetch("/api/groq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          mensagem: queryText,
          nomeCrianca: updatedNome
        })
      });

      if (!response.ok) {
        throw new Error("Erro na comunicação");
      }

      const data = await response.json();

      // Update name if the server discovered it or corrected it
      if (data.nomeCrianca && data.nomeCrianca !== updatedNome) {
        setNomeCrianca(data.nomeCrianca);
        localStorage.setItem("candinho_nome_crianca", data.nomeCrianca);
      }

      const containsImageKeywords = 
        queryText.toLowerCase().includes("mostra") ||
        queryText.toLowerCase().includes("mostre") ||
        queryText.toLowerCase().includes("ver") ||
        queryText.toLowerCase().includes("veja") ||
        queryText.toLowerCase().includes("imagem") ||
        queryText.toLowerCase().includes("foto") ||
        queryText.toLowerCase().includes("quadro") ||
        queryText.toLowerCase().includes("pintura") ||
        queryText.toLowerCase().includes("desenho") ||
        queryText.toLowerCase().includes("ilustra") ||
        queryText.toLowerCase().includes("esboço") ||
        queryText.toLowerCase().includes("esboco") ||
        queryText.toLowerCase().includes("arte") ||
        queryText.toLowerCase().includes("dança") ||
        queryText.toLowerCase().includes("danca") ||
        queryText.toLowerCase().includes("poema") ||
        queryText.toLowerCase().includes("poesia") ||
        queryText.toLowerCase().includes("verso") ||
        queryText.toLowerCase().includes("literatura") ||
        queryText.toLowerCase().includes("música") ||
        queryText.toLowerCase().includes("musica") ||
        queryText.toLowerCase().includes("teatro") ||
        queryText.toLowerCase().includes("palco") ||
        queryText.toLowerCase().includes("piada") ||
        queryText.toLowerCase().includes("charada") ||
        queryText.toLowerCase().includes("curiosidade") ||
        queryText.toLowerCase().includes("sabia que");

      // Auto-display image if the message is for a structured artist (local or backend)
      const shouldAutoShowImage = containsImageKeywords || isArtistMatched || !!data.matchedKey;

      // Clean local result custom text if child's name was extracted client-side but not server-side
      let replyToShow = data.reply || localResult?.reply || "Ops! Minhas tintas secaram. Pode repetir? 🎨";
      if (nomeEncontrado && !data.nomeCrianca && localResult) {
        replyToShow = `Que espetáculo de nome, **${nomeEncontrado}**! 🎨 Que alegria gigante ter você aqui comigo na minha paleta de descobertas! ✨\n\n${replyToShow}`;
      }

      // 2. Add Candinho response
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        // Use backend reply, with local structured reply as a perfect fallback
        text: replyToShow,
        sender: "bot",
        image: data.image ? {
          imagemUrl: data.image.imagemUrl,
          titulo: data.image.titulo || "Obra de arte",
          credito: data.image.credito || "Wikimedia Commons"
        } : (localResult?.image ? {
          imagemUrl: localResult.image.imagemUrl,
          titulo: localResult.image.titulo || "Obra de arte",
          credito: localResult.image.credito || "Wikimedia Commons"
        } : null),
        timestamp: new Date(),
        isImageRequested: shouldAutoShowImage // Controls lazy-loading under demand
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      let fallbackText = localResult?.reply || "Ops! Minha paleta bagunçou. Pode repetir? 🎨";
      if (nomeEncontrado && localResult) {
        fallbackText = `Que espetáculo de nome, **${nomeEncontrado}**! 🎨 Que alegria gigante ter você aqui comigo na minha paleta de descobertas! ✨\n\n${fallbackText}`;
      }

      const containsImageKeywords = 
        queryText.toLowerCase().includes("mostra") ||
        queryText.toLowerCase().includes("mostre") ||
        queryText.toLowerCase().includes("ver") ||
        queryText.toLowerCase().includes("veja") ||
        queryText.toLowerCase().includes("imagem") ||
        queryText.toLowerCase().includes("foto") ||
        queryText.toLowerCase().includes("quadro") ||
        queryText.toLowerCase().includes("pintura") ||
        queryText.toLowerCase().includes("desenho") ||
        queryText.toLowerCase().includes("ilustra") ||
        queryText.toLowerCase().includes("esboço") ||
        queryText.toLowerCase().includes("esboco") ||
        queryText.toLowerCase().includes("arte") ||
        queryText.toLowerCase().includes("dança") ||
        queryText.toLowerCase().includes("danca") ||
        queryText.toLowerCase().includes("poema") ||
        queryText.toLowerCase().includes("poesia") ||
        queryText.toLowerCase().includes("verso") ||
        queryText.toLowerCase().includes("literatura") ||
        queryText.toLowerCase().includes("música") ||
        queryText.toLowerCase().includes("musica") ||
        queryText.toLowerCase().includes("teatro") ||
        queryText.toLowerCase().includes("palco") ||
        queryText.toLowerCase().includes("piada") ||
        queryText.toLowerCase().includes("charada") ||
        queryText.toLowerCase().includes("curiosidade") ||
        queryText.toLowerCase().includes("sabia que");

      const shouldAutoShowImage = containsImageKeywords || isArtistMatched || !!localResult?.matchedKey;

      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        text: fallbackText,
        sender: "bot",
        image: localResult?.image ? {
          imagemUrl: localResult.image.imagemUrl,
          titulo: localResult.image.titulo || "Obra de arte",
          credito: localResult.image.credito || "Wikimedia Commons"
        } : null,
        timestamp: new Date(),
        isImageRequested: shouldAutoShowImage
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend(inputValue);
    }
  };

  const handleRequestImage = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isImageRequested: true } : msg
      )
    );
  };

  const clearChat = () => {
    if (window.confirm("Deseja recomeçar a conversa? 🎨🧹")) {
      localStorage.removeItem("candinho_nome_crianca");
      setNomeCrianca("");
      setMessages([
        {
          id: "welcome-reset",
          text: "Olá! Sou o Candinho, seu amigo artista. O que vamos descobrir hoje? 🎨 Como você se chama?",
          sender: "bot",
          timestamp: new Date()
        }
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#1a1a2e_0%,_#16213e_100%)] p-2 sm:p-[15px] flex flex-col justify-center items-center overflow-x-hidden font-sans">
      
      {/* Main Beautiful Container */}
      <div className="w-full max-w-[800px] bg-[rgba(22,_33,_62,_0.95)] backdrop-blur-[15px] rounded-[24px] sm:rounded-[30px] p-3.5 sm:p-[25px] shadow-[0_15px_50px_rgba(0,0,0,0.6)] border border-[rgba(255,_215,_0,_0.2)] flex flex-col">
        
        {/* Header matching HTML precisely */}
        <header className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-5 pb-3 sm:pb-[15px] border-b-2 border-[#e94560] relative">
          <img 
            src="https://i.imgur.com/fnMYS0Z.png" 
            alt="Candinho" 
            className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] rounded-full object-cover border-2 sm:border-3 border-[#ffd700] animate-float flex-shrink-0"
          />
          <div className="flex-1 min-w-0 pr-16 sm:pr-0">
            <h1 className="text-lg sm:text-[1.8rem] tracking-wider font-bold text-white leading-tight truncate">Candinho</h1>
            <p className="text-[#ffd700] italic opacity-90 text-xs sm:text-sm mt-0.5 truncate">
              {nomeCrianca ? `Conversando com ${nomeCrianca} 🧑‍🎨` : "Seu amigo artista 🎨"}
            </p>
          </div>

          <button 
            onClick={clearChat}
            className="absolute top-2 right-2 p-2 rounded-xl bg-slate-800/60 hover:bg-rose-500 hover:text-white transition-all text-slate-400 flex items-center gap-1 text-xs border border-slate-700 cursor-pointer"
            title="Recomeçar conversa"
          >
            <Trash2 size={13} />
            <span className="hidden sm:inline">Recomeçar</span>
          </button>
        </header>

        {/* Custom scrollbar Chat area with optimized height */}
        <div 
          id="chat"
          className="h-[340px] sm:h-[420px] overflow-y-auto bg-[rgba(15,_52,_96,_0.4)] p-3 sm:p-5 rounded-[20px] mb-4 sm:mb-5 flex flex-col gap-3 sm:gap-[15px] scroll-behavior-smooth custom-scrollbar"
        >
          <AnimatePresence initial={false}>
            {messages.map((msg, idx) => {
              const isLatestBotMessage = idx === messages.length - 1;
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[92%] sm:max-w-[85%] ${
                    msg.sender === "user" ? "self-end" : "self-start"
                  }`}
                >
                  <div
                    className={`msg p-[10px_14px] sm:p-[12px_18px] rounded-[20px] text-sm sm:text-base leading-[1.5] shadow-md transition-all duration-300 ${
                      msg.sender === "user" 
                        ? "bg-[#4834d4] text-white rounded-br-[4px] self-end" 
                        : "bg-[#686de0] text-white rounded-bl-[4px] self-start"
                    }`}
                  >
                    {msg.sender === "bot" ? (
                      <div className="bot-message-wrapper flex items-start gap-2.5 sm:gap-[15px]">
                        <img 
                          src="https://i.imgur.com/UDl1c5j.png" 
                          alt="Bot icon" 
                          className="bot-icon w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] rounded-full object-cover mt-1 flex-shrink-0"
                        />
                        <div className="bot-text flex-1 min-w-0">
                          {isLatestBotMessage ? (
                            <Typewriter text={msg.text} onFinished={scrollToBottom} />
                          ) : (
                            <p className="whitespace-pre-line">{msg.text}</p>
                          )}
                          
                          {/* Display "Ver Ilustração/Obra 🖼️" button under message if image exists and wasn't loaded */}
                          {msg.image && !msg.isImageRequested && (
                            <div className="mt-3 pt-2.5 border-t border-indigo-400/30">
                              <button
                                onClick={() => handleRequestImage(msg.id)}
                                className="bg-[#ffd700] hover:bg-yellow-300 text-slate-900 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all shadow hover:scale-105 cursor-pointer flex items-center gap-1.5"
                              >
                                <Palette size={13} />
                                Ver Ilustração/Obra 🖼️
                              </button>
                            </div>
                          )}

                          {/* Renders image inline under request */}
                          {msg.image && msg.isImageRequested && (
                            <div className="mt-3 pt-2.5 border-t border-indigo-400/30">
                              <img 
                                src={getProxiedImageUrl(msg.image.imagemUrl)} 
                                alt={msg.image.titulo}
                                className="bot-image mt-[10px] sm:mt-[15px] max-w-full rounded-[15px] cursor-pointer transition-transform duration-300 hover:scale-[1.02] max-h-[220px] sm:max-h-[300px] object-contain block mx-auto shadow-md"
                                onClick={() => setModalImage(msg.image || null)}
                                referrerPolicy="no-referrer"
                              />
                              <div className="image-credit text-[0.6rem] sm:text-[0.65rem] text-[#ffd700] mt-[5px] text-center opacity-80 font-medium whitespace-normal break-all">
                                📷 Fonte: {msg.image.credito || 'Wikimedia Commons'}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              );
            })}

            {/* Loading animator matching */}
            {isProcessing && (
              <div className="self-start max-w-[92%] sm:max-w-[85%]">
                <div className="msg bot p-[10px_14px] sm:p-[12px_18px] rounded-[20px] rounded-bl-[4px] text-sm sm:text-base leading-[1.5] shadow-md bg-[#686de0] text-white">
                  <div className="bot-message-wrapper flex items-start gap-2.5 sm:gap-[15px]">
                    <img 
                      src="https://i.imgur.com/UDl1c5j.png" 
                      alt="Bot icon" 
                      className="bot-icon w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] rounded-full object-cover mt-1 flex-shrink-0"
                    />
                    <div className="bot-text flex-1 py-2 sm:py-3 min-w-0">
                      <span className="italic opacity-80 font-medium text-xs sm:text-sm">Candinho está escolhendo as cores da tela... 🎨</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="input-area flex gap-2 sm:gap-2.5 w-full">
          <input 
            ref={inputRef}
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Pergunte sobre um artista..." 
            disabled={isProcessing}
            autoComplete="off"
            className="flex-1 min-w-0 p-[12px_18px] sm:p-[15px_25px] border-2 border-[#e94560] rounded-[30px] bg-[rgba(255,255,255,0.05)] text-white text-sm sm:text-base outline-none focus:border-[#ffd700] focus:bg-[rgba(255,255,255,0.1)] transition-all placeholder-slate-500 disabled:opacity-50"
          />
          <button 
            onClick={() => handleSend(inputValue)}
            disabled={!inputValue.trim() || isProcessing}
            className="bg-[#e94560] text-white border-none px-4 sm:px-[30px] rounded-[30px] font-bold cursor-pointer hover:bg-[#d6344d] transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5 select-none shrink-0 text-sm sm:text-base h-auto"
          >
            <span>Enviar</span>
            <Send size={15} />
          </button>
        </div>

      </div>

      {/* Amplified Lightbox Modal to replace default alerts/tabs */}
      {modalImage && (
        <div 
          id="imgModal" 
          className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center cursor-pointer p-4" 
          onClick={() => setModalImage(null)}
        >
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-4 right-4 bg-slate-800/80 hover:bg-[#e94560] p-2.5 rounded-full text-white transition-all border border-slate-700"
          >
            <X size={20} />
          </button>
          
          <div className="max-w-4xl w-full flex flex-col items-center">
            <img 
              src={getProxiedImageUrl(modalImage.imagemUrl)} 
              alt={modalImage.titulo}
              className="max-h-[80vh] max-w-full rounded-[10px] object-contain shadow-2xl border-2 border-[#ffd700]/30"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center bg-slate-900/90 py-3 px-6 rounded-2xl border border-yellow-500/20 max-w-xl">
              <h3 className="text-[#ffd700] font-bold text-lg leading-snug">
                {modalImage.titulo}
              </h3>
              {modalImage.credito && (
                <p className="text-gray-400 text-xs mt-1">
                  📷 Fonte: {modalImage.credito}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      <footer className="text-center text-[0.72rem] text-slate-500 mt-4 flex items-center justify-center gap-1 select-none">
        <span>Candinho 2.0 — Criado com carinho para inspirar jovens alunos de artes!</span>
      </footer>

    </div>
  );
}
