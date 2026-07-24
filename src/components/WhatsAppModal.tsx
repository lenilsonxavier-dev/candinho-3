import React, { useState } from "react";
import { 
  MessageCircle, 
  QrCode, 
  ExternalLink, 
  X, 
  Copy, 
  Check, 
  Smartphone, 
  Code, 
  Zap, 
  Sparkles,
  Share2
} from "lucide-react";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  isWhatsAppMode: boolean;
  onToggleWhatsAppMode: () => void;
}

export default function WhatsAppModal({
  isOpen,
  onClose,
  isWhatsAppMode,
  onToggleWhatsAppMode
}: WhatsAppModalProps) {
  const [activeTab, setActiveTab] = useState<"teste" | "simulador" | "integracao">("teste");
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const [copiedWebhook, setCopiedWebhook] = useState(false);

  if (!isOpen) return null;

  const [customDomain, setCustomDomain] = useState<string>(() => {
    if (typeof window !== "undefined" && window.location.origin && !window.location.origin.includes("ais-dev")) {
      return `${window.location.origin}/api/whatsapp/webhook`;
    }
    return "https://candinho-20.vercel.app/api/whatsapp/webhook";
  });

  const webhookUrl = customDomain || "https://candinho-20.vercel.app/api/whatsapp/webhook";

  const handleCopyWebhook = () => {
    navigator.clipboard.writeText(webhookUrl);
    setCopiedWebhook(true);
    setTimeout(() => setCopiedWebhook(false), 2000);
  };

  const testMessage = encodeURIComponent("Olá Candinho! Quero conversar e aprender sobre arte! 🎨");
  const whatsappLink = `https://api.whatsapp.com/send?text=${testMessage}`;

  // Direct QR Code SVG data url or Google Chart / QR API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(whatsappLink)}&color=075e54&bgcolor=ffffff`;

  const webhookCodeSnippet = `// Exemplo de Webhook Express para WhatsApp Cloud API (Candinho)
app.post("/webhook/whatsapp", async (req, res) => {
  const body = req.body;
  
  if (body.object === "whatsapp_business_account") {
    const entry = body.entry?.[0];
    const message = entry?.changes?.[0]?.value?.messages?.[0];
    
    if (message && message.type === "text") {
      const fromNumber = message.from; // Número do usuário
      const text = message.text.body;   // Mensagem recebida
      
      // Resolve a resposta no motor do Candinho
      const resposta = resolverMensagemLocalmente(text);
      const textoBot = resposta ? resposta.reply : "Olá! Sou o Candinho! 🎨";
      
      // Envia de volta para o WhatsApp
      await enviarMensagemWhatsApp(fromNumber, textoBot);
    }
    return res.sendStatus(200);
  }
  res.sendStatus(404);
});`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(webhookCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(whatsappLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#121c2d] border border-emerald-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Modal */}
        <div className="bg-gradient-to-r from-[#075e54] to-[#128c7e] px-5 py-4 flex items-center justify-between border-b border-emerald-400/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white shadow-inner">
              <MessageCircle className="w-6 h-6 fill-white text-[#075e54]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Candinho no WhatsApp
                <span className="bg-emerald-400/30 text-emerald-100 text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full border border-emerald-300/30">
                  Experimental
                </span>
              </h2>
              <p className="text-emerald-100/80 text-xs">
                Como testar e integrar o robô artista no WhatsApp
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-emerald-100 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-700/60 bg-slate-900/60 p-1.5 gap-1.5">
          <button
            onClick={() => setActiveTab("teste")}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "teste"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Smartphone size={15} />
            <span>Link & QR Code</span>
          </button>

          <button
            onClick={() => setActiveTab("simulador")}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "simulador"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Sparkles size={15} />
            <span>Modo Simulador</span>
          </button>

          <button
            onClick={() => setActiveTab("integracao")}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "integracao"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <Code size={15} />
            <span>Guia da API</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 overflow-y-auto space-y-5 text-slate-200 text-sm">
          
          {/* TAB 1: Link & QR Code */}
          {activeTab === "teste" && (
            <div className="space-y-4">
              <div className="bg-emerald-950/40 border border-emerald-500/20 p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="bg-white p-2 rounded-xl shadow-md border border-slate-200 flex-shrink-0">
                  <img 
                    src={qrCodeUrl} 
                    alt="QR Code WhatsApp Candinho" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-bold text-emerald-400 text-base flex items-center justify-center sm:justify-start gap-1.5">
                    <QrCode size={18} />
                    Aponte a câmera do celular
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Escaneie este QR Code com a câmera do seu smartphone ou aplicativo do WhatsApp para testar a experiência de envio de mensagem direta para o Candinho!
                  </p>
                  
                  <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all hover:scale-105"
                    >
                      <Share2 size={14} />
                      Abrir no WhatsApp
                      <ExternalLink size={12} />
                    </a>

                    <button
                      onClick={handleCopyLink}
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
                    >
                      {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      {copiedLink ? "Link copiado!" : "Copiar Link"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                    <Zap size={14} />
                    Resposta Instantânea
                  </div>
                  <p className="text-xs text-slate-400">
                    Responde dúvidas sobre artes plásticas, tintas, técnicas e biografia de artistas em linguagem infantil.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                    <Sparkles size={14} />
                    Interação Lúdica
                  </div>
                  <p className="text-xs text-slate-400">
                    Incentiva crianças a explorar cores e criatividade de forma segura e acolhedora no app de mensagens.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Simulador */}
          {activeTab === "simulador" && (
            <div className="space-y-4 text-center sm:text-left">
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      Aparência estilo WhatsApp Web
                    </h3>
                    <p className="text-xs text-slate-400">
                      Você pode transformar a interface deste aplicativo para simular exatamente a navegação do WhatsApp!
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-2">
                  No <strong>Modo WhatsApp</strong>, a tela do Candinho adota o fundo de conversa característico do WhatsApp, o cabeçalho verde oficial, horário das mensagens, marcas de verificação dupla (✓✓) e barra de envio estilizada.
                </p>

                <div className="pt-3 flex justify-center sm:justify-start">
                  <button
                    onClick={() => {
                      onToggleWhatsAppMode();
                      onClose();
                    }}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg transition-all hover:scale-105 cursor-pointer ${
                      isWhatsAppMode
                        ? "bg-amber-600 hover:bg-amber-500 text-white"
                        : "bg-emerald-600 hover:bg-emerald-500 text-white"
                    }`}
                  >
                    <MessageCircle size={16} />
                    {isWhatsAppMode ? "Voltar ao Visual Clássico do Ateliê" : "Ativar Modo WhatsApp Agora 💬"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Guia de Integração API */}
          {activeTab === "integracao" && (
            <div className="space-y-4">
              {/* Twilio Sandbox Box */}
              <div className="bg-emerald-950/50 p-4 rounded-2xl border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-emerald-300 text-sm flex items-center gap-2">
                    <Zap size={16} className="text-emerald-400" />
                    Opção 1: Twilio WhatsApp Sandbox (Gratuito e sem Conta Meta)
                  </h3>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-md border border-emerald-500/30">
                    Recomendado
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                  <p>
                    <strong>Onde pegar o código de ativação?</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1.5 pl-1 text-slate-300">
                    <li>
                      Acesse o console da Twilio em <a href="https://console.twilio.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline font-semibold">console.twilio.com</a>.
                    </li>
                    <li>
                      No menu lateral esquerdo, vá em <strong>Messaging &gt; Try it out &gt; Send a WhatsApp message</strong>.
                    </li>
                    <li>
                      Na tela que abrir, a Twilio mostrará uma caixa chamada <strong>"Connect to your Sandbox"</strong> com um número de WhatsApp (ex: <code className="bg-slate-800 text-emerald-300 px-1 py-0.5 rounded">+1 415 523 8886</code>) e uma mensagem como <strong className="text-amber-300">join palavra-codigo</strong> (exemplo: <code className="bg-slate-800 text-amber-300 px-1 py-0.5 rounded">join table-coffee</code>). <strong>Este é o seu código de ativação!</strong>
                    </li>
                    <li>
                      Abra o WhatsApp do seu celular e envie essa frase para o número da Twilio. O robô da Twilio responderá confirmando a conexão!
                    </li>
                    <li>
                      No menu <strong>Sandbox Settings</strong> da Twilio, cole a URL do Webhook do Candinho abaixo no campo <strong>"WHEN A MESSAGE COMES IN"</strong>:
                    </li>
                  </ol>
                </div>

                {/* Copyable Webhook URL */}
                <div className="pt-2 space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-300 block">
                    URL do Webhook do Candinho (Cole no campo "WHEN A MESSAGE COMES IN"):
                  </span>
                  
                  <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-xl border border-emerald-500/30">
                    <input
                      type="text"
                      value={webhookUrl}
                      onChange={(e) => setCustomDomain(e.target.value)}
                      className="bg-transparent text-xs font-mono text-emerald-300 w-full outline-none px-1"
                      placeholder="https://seu-dominio.com/api/whatsapp/webhook"
                    />
                    <button
                      onClick={handleCopyWebhook}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1 cursor-pointer flex-shrink-0"
                    >
                      {copiedWebhook ? <Check size={14} /> : <Copy size={14} />}
                      {copiedWebhook ? "Copiado!" : "Copiar URL"}
                    </button>
                  </div>

                  <p className="text-[11px] text-amber-300/90 pt-1">
                    💡 <strong>Atenção:</strong> Se o Candinho estiver publicado no Vercel (<code className="bg-slate-900 px-1 rounded text-emerald-300">candinho-20.vercel.app</code>), a URL correta na Twilio deve ser: <br />
                    <code className="bg-slate-900 text-emerald-300 px-1.5 py-0.5 rounded font-mono text-[10px] select-all">https://candinho-20.vercel.app/api/whatsapp/webhook</code>
                  </p>
                </div>
              </div>

              {/* Code snippet example */}
              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-3">
                <h3 className="font-bold text-emerald-400 text-sm flex items-center gap-2">
                  <Code size={16} />
                  Código do Servidor (Express Webhook Integrado)
                </h3>
                <p className="text-xs text-slate-400">
                  O Candinho já possui o endpoint <code className="text-emerald-300">/api/whatsapp/webhook</code> pronto e configurado neste servidor para responder automaticamente a qualquer requisição do WhatsApp!
                </p>

                <div className="mt-2 relative">
                  <div className="flex items-center justify-between bg-slate-950 px-3 py-2 rounded-t-xl text-xs font-mono text-slate-400 border border-slate-800 border-b-0">
                    <span>server.ts (Já em execução neste app)</span>
                    <button
                      onClick={handleCopyCode}
                      className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-[11px] font-sans font-semibold cursor-pointer"
                    >
                      {copiedCode ? <Check size={13} /> : <Copy size={13} />}
                      {copiedCode ? "Copiado!" : "Copiar código"}
                    </button>
                  </div>
                  <pre className="bg-slate-950 p-3 rounded-b-xl text-[11px] font-mono text-emerald-300/90 overflow-x-auto border border-slate-800 max-h-40 leading-tight">
                    {webhookCodeSnippet}
                  </pre>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-900/90 px-5 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Sparkles size={13} className="text-emerald-400" />
            Candinho • Projeto Educativo
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
}
