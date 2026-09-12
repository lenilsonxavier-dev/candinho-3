import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  Send, 
  Trash2, 
  X,
  Palette,
  CheckCheck,
  Copy,
  Check,
  Share2,
  ExternalLink,
  MessageCircle,
  Link as LinkIcon
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
  
  // Redireciona URLs do GitHub contendo imagens para a pasta local correspondente
  if (url.includes("githubusercontent.com/lenilsonxavier-dev/candinho-3")) {
    if (url.includes("/imagens/")) {
      const parts = url.split("/imagens/");
      return `/imagens/${parts[parts.length - 1]}`;
    }
  }

  if (url.startsWith("/") || url.startsWith("data:")) return url;
  
  // Imgur funciona perfeitamente direto no cliente sem necessidade de proxy
  if (
    url.includes("imgur.com")
  ) {
    return url;
  }
  
  // Se rodar no GitHub Pages (puramente estático), bypassa o proxy de imagem para evitar 404
  if (typeof window !== "undefined" && window.location.hostname.includes("github.io")) {
    return url;
  }
  return `/api/proxy-image?url=${encodeURIComponent(url)}`;
};

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [modalImage, setModalImage] = useState<ImagePayload | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [nomeCrianca, setNomeCrianca] = useState<string>(() => {
    return localStorage.getItem("candinho_nome_crianca") || "";
  });
  const [contextoEmocional, setContextoEmocional] = useState<string | null>(null);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedShareLink, setCopiedShareLink] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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
    const lowerQuery = queryText.toLowerCase().trim();
    const palavrasEmocionais = [
      'triste', 'ansios', 'raiva', 'angustia', 'chateado', 'chateada', 'magoado', 'magoada',
      'com medo', 'assustado', 'assustada', 'tristeza', 'ansiedade', 'nervoso', 'nervosa',
      'chorei', 'chorando', 'sozinho', 'sozinha', 'solitario', 'solitaria', 'ruim'
    ];
    const isEmotionalQuery = palavrasEmocionais.some(palavra => lowerQuery.includes(palavra));
    const containsArtKeywords = 
      lowerQuery.includes("desenho") ||
      lowerQuery.includes("pintura") ||
      lowerQuery.includes("esboço") ||
      lowerQuery.includes("esboco") ||
      lowerQuery.includes("arte") ||
      lowerQuery.includes("danca") ||
      lowerQuery.includes("dança") ||
      lowerQuery.includes("música") ||
      lowerQuery.includes("musica") ||
      lowerQuery.includes("poema") ||
      lowerQuery.includes("poesia") ||
      lowerQuery.includes("quem foi") ||
      lowerQuery.includes("mostre") ||
      lowerQuery.includes("mostra");

    let novoContexto = contextoEmocional;
    if (isEmotionalQuery) {
      novoContexto = "true";
    } else if (containsArtKeywords) {
      novoContexto = null;
    }

    const localResult = resolverMensagemLocalmente(queryText, bibliotecaCultural);
    const isArtistMatched = !!localResult?.matchedKey;

    if (localResult?.matchedKey === "tristeza" || localResult?.matchedKey === "angustia" || localResult?.matchedKey === "raiva" || localResult?.matchedKey === "ansiedade") {
      novoContexto = "true";
    }
    setContextoEmocional(novoContexto);

    try {
      const response = await fetch("/api/groq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          mensagem: queryText,
          nomeCrianca: updatedNome,
          historico: [...messages, userMessage].map(m => ({ sender: m.sender, text: m.text })),
          contextoEmocional: novoContexto
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
        queryText.toLowerCase().includes("samba") ||
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

      const lowerQuery = queryText.toLowerCase().trim();
      const isComoOrPorqueQuery = 
        lowerQuery.startsWith("como") || 
        lowerQuery.startsWith("por que") || 
        lowerQuery.startsWith("porque") || 
        lowerQuery.startsWith("porquê");

      // Auto-display image if the message is for a structured artist (local or backend)
      const shouldAutoShowImage = containsImageKeywords || isArtistMatched || !!data.matchedKey || isComoOrPorqueQuery;

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
        queryText.toLowerCase().includes("samba") ||
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

      const isComoOrPorqueQueryCatch = 
        queryText.toLowerCase().trim().startsWith("como") || 
        queryText.toLowerCase().trim().startsWith("por que") || 
        queryText.toLowerCase().trim().startsWith("porque") || 
        queryText.toLowerCase().trim().startsWith("porquê");

      const shouldAutoShowImage = containsImageKeywords || isArtistMatched || !!localResult?.matchedKey || isComoOrPorqueQueryCatch;

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

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  const handleCopyResponse = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessageId(id);
      showToast("Resposta copiada para a área de transferência! 📋");
      setTimeout(() => {
        setCopiedMessageId((prev) => (prev === id ? null : prev));
      }, 2500);
    } catch (err) {
      console.error("Erro ao copiar resposta:", err);
      showToast("Não foi possível copiar automaticamente. 😕");
    }
  };

  const getShareUrl = () => {
    if (typeof window !== "undefined" && window.location.href) {
      return window.location.href;
    }
    return "https://lenilsonxavier-dev.github.io/candinho-3";
  };

  const handleShareLink = async () => {
    const url = getShareUrl();
    const shareData = {
      title: "Candinho - Seu amigo artista",
      text: "Converse com o Candinho e descubra o mundo da arte de forma simples e divertida! 🎨✨",
      url: url
    };

    if (navigator.share && typeof navigator.canShare === "function" && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setShowShareModal(true);
        }
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopiedShareLink(true);
      showToast("Link copiado com sucesso! 🔗");
      setTimeout(() => setCopiedShareLink(false), 3000);
    } catch {
      // ignore
    }
    setShowShareModal(true);
  };

  const handleCopyShareLinkDirect = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopiedShareLink(true);
      showToast("Link copiado para a área de transferência! 🔗");
      setTimeout(() => setCopiedShareLink(false), 2500);
    } catch (err) {
      console.error(err);
    }
  };

  const clearChat = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
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
    setShowResetConfirm(false);
  };

  return (
    <div className="min-h-screen p-3 sm:p-6 flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden font-sans transition-colors duration-500 bg-[linear-gradient(135deg,_#1a1a2e_0%,_#16213e_100%)]">
      
      {/* Main Beautiful Container */}
      <div className="w-full max-w-[800px] rounded-[24px] sm:rounded-[30px] p-3.5 sm:p-[25px] shadow-[0_15px_50px_rgba(0,0,0,0.6)] flex flex-col my-auto transition-all duration-500 border bg-[rgba(22,_33,_62,_0.95)] backdrop-blur-[15px] border-[rgba(255,_215,_0,_0.2)]">
        
        {/* Header matching HTML precisely */}
        <header className="flex items-center gap-3 sm:gap-5 mb-3 sm:mb-4 pb-3 sm:pb-[15px] border-b-2 border-[#e94560] relative transition-colors">
          <img 
            src="https://i.imgur.com/fnMYS0Z.png" 
            alt="Candinho" 
            className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full object-cover border-2 border-[#ffd700] animate-float sm:w-[80px] sm:h-[80px] flex-shrink-0 transition-all"
            referrerPolicy="no-referrer"
          />
          <div className="flex-1 min-w-0 pr-28 sm:pr-48">
            <h1 className="text-base sm:text-xl font-bold text-white leading-tight truncate flex items-center gap-2">
              Candinho
            </h1>
            <p className="italic opacity-90 text-xs mt-0.5 truncate text-[#ffd700]">
              {nomeCrianca ? `Conversando com ${nomeCrianca} 🧑‍🎨` : "Seu amigo artista 🎨"}
            </p>
          </div>

          <div className="absolute top-2 right-2 flex items-center gap-1.5 sm:gap-2">
            <button 
              onClick={handleShareLink}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-800/80 hover:bg-[#ffd700] hover:text-slate-900 transition-all text-slate-300 flex items-center gap-1 text-xs border border-slate-700 cursor-pointer font-medium"
              title="Compartilhar link do Candinho"
            >
              <Share2 size={13} />
              <span className="hidden sm:inline">Compartilhar link</span>
            </button>
            <button 
              onClick={clearChat}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-800/80 hover:bg-rose-500 hover:text-white transition-all text-slate-300 flex items-center gap-1 text-xs border border-slate-700 cursor-pointer font-medium"
              title="Recomeçar conversa"
            >
              <Trash2 size={13} />
              <span className="hidden sm:inline">Recomeçar</span>
            </button>
          </div>
        </header>

        {/* Custom scrollbar Chat area with optimized height */}
        <div 
          id="chat"
          className="h-[300px] sm:h-[380px] md:h-[400px] overflow-y-auto p-3 sm:p-5 rounded-[20px] mb-4 sm:mb-5 flex flex-col gap-3 sm:gap-[15px] scroll-behavior-smooth custom-scrollbar transition-colors bg-[rgba(15,_52,_96,_0.4)]"
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
                          referrerPolicy="no-referrer"
                        />
                        <div className="bot-text flex-1 min-w-0">
                          {isLatestBotMessage ? (
                            <Typewriter text={msg.text} onFinished={scrollToBottom} />
                          ) : (
                            <p className="whitespace-pre-line">{msg.text}</p>
                          )}
                          
                          {/* Bot Message Action Toolbar (não exibe na mensagem de boas-vindas/apresentação inicial) */}
                          {(msg.id !== "welcome" && msg.id !== "welcome-reset" && (msg.image && !msg.isImageRequested || true)) && (
                            <div className="mt-3 pt-2 border-t border-indigo-400/30 flex flex-wrap items-center justify-between gap-2">
                              {msg.id !== "welcome" && msg.id !== "welcome-reset" && (
                                <button
                                  onClick={() => handleCopyResponse(msg.id, msg.text)}
                                  className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
                                    copiedMessageId === msg.id 
                                      ? "bg-emerald-500 text-white font-bold" 
                                      : "bg-indigo-900/60 hover:bg-indigo-800 text-indigo-100 border border-indigo-300/30 hover:text-white"
                                  }`}
                                  title="Copiar resposta do Candinho"
                                >
                                  {copiedMessageId === msg.id ? (
                                    <>
                                      <Check size={12} className="text-white" />
                                      <span>Copiado!</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy size={12} />
                                      <span>Copiar resposta</span>
                                    </>
                                  )}
                                </button>
                              )}

                              {/* Display "Ver Ilustração/Obra 🖼️" button under message if image exists and wasn't loaded */}
                              {msg.image && !msg.isImageRequested && (
                                <button
                                  onClick={() => handleRequestImage(msg.id)}
                                  className="bg-[#ffd700] hover:bg-yellow-300 text-slate-900 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold transition-all shadow hover:scale-105 cursor-pointer flex items-center gap-1.5"
                                >
                                  <Palette size={12} />
                                  <span>Ver Ilustração/Obra 🖼️</span>
                                </button>
                              )}
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
                      <div className="flex flex-col">
                        <span>{msg.text}</span>
                      </div>
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
                      referrerPolicy="no-referrer"
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
      {/* Custom Confirmation Modal for Resetting the Chat (to bypass iframe blocks on window.confirm) */}
      {showResetConfirm && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          onClick={() => setShowResetConfirm(false)}
        >
          <div 
            className="w-full max-w-md bg-[#16213e] rounded-[24px] p-6 shadow-2xl border border-[#ffd700]/30 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto w-16 h-16 rounded-full bg-slate-800/60 flex items-center justify-center text-3xl mb-4">
              🎨
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Recomeçar conversa?</h3>
            <p className="text-gray-300 text-sm mb-6">
              Deseja recomeçar a conversa com o Candinho? Isso limpará o histórico atual de mensagens e esquecerá o seu nome cadastrado. 🧹
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-5 py-2.5 rounded-full text-white bg-slate-800/80 hover:bg-slate-700 transition-all font-semibold text-sm cursor-pointer border border-slate-700 min-w-[100px]"
              >
                Voltar
              </button>
              <button
                onClick={confirmReset}
                className="px-5 py-2.5 rounded-full text-white bg-[#e94560] hover:bg-[#d6344d] transition-all font-semibold text-sm cursor-pointer min-w-[100px] shadow-lg shadow-rose-950/40"
              >
                Recomeçar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in"
          onClick={() => setShowShareModal(false)}
        >
          <div 
            className="w-full max-w-md bg-[#16213e] rounded-[24px] p-5 sm:p-6 shadow-2xl border border-[#ffd700]/30 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 bg-slate-800/80 hover:bg-rose-500 p-1.5 rounded-full text-white transition-all border border-slate-700 cursor-pointer"
              title="Fechar"
            >
              <X size={16} />
            </button>

            <div className="mx-auto w-14 h-14 rounded-full bg-slate-800/80 border border-[#ffd700]/40 flex items-center justify-center text-2xl mb-3 shadow-md">
              🎨
            </div>

            <h3 className="text-white font-bold text-lg sm:text-xl mb-1">Compartilhar o Candinho</h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-4">
              Compartilhe o link com seus amigos, professores ou colegas para descobrirem o mundo da arte juntos! ✨
            </p>

            <div className="bg-slate-900/90 rounded-2xl p-2.5 sm:p-3 border border-slate-700 mb-4 flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={getShareUrl()}
                className="bg-transparent text-gray-200 text-xs flex-1 outline-none truncate select-all px-1 font-mono"
              />
              <button
                onClick={handleCopyShareLinkDirect}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  copiedShareLink
                    ? "bg-emerald-500 text-white"
                    : "bg-[#ffd700] hover:bg-yellow-300 text-slate-900"
                }`}
              >
                {copiedShareLink ? (
                  <>
                    <Check size={13} />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent("Venha conversar e aprender sobre arte com o Candinho! 🎨 " + getShareUrl())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => setShowShareModal(false)}
                className="px-5 py-2.5 rounded-full text-white bg-slate-800/80 hover:bg-slate-700 transition-all font-semibold text-xs sm:text-sm border border-slate-700 cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 z-50 bg-[#16213e]/95 border border-[#ffd700]/50 text-white px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs sm:text-sm font-medium backdrop-blur-md"
          >
            <CheckCheck size={16} className="text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="text-center text-[0.72rem] text-slate-500 mt-4 flex items-center justify-center gap-1 select-none">
        <span>Candinho 2.0 — Criado com carinho para inspirar jovens alunos de artes!</span>
      </footer>

    </div>
  );
}
