import { bibliotecaCultural } from "../../src/data/bibliotecaCultural.js";
import { resolverMensagemLocalmente } from "../../src/utils/conversationalEngine.js";

export default async function handler(req: any, res: any) {
  try {
    // 1. Suporte para verificação do Meta / Hub (GET)
    const mode = req.query?.["hub.mode"];
    const token = req.query?.["hub.verify_token"];
    const challenge = req.query?.["hub.challenge"];

    if (mode && token === "candinho123") {
      return res.status(200).send(challenge);
    }

    const body = req.body || {};
    const query = req.query || {};

    // 2. Captura o texto enviado pelo usuário
    const incomingText = 
      body.Body || 
      query.Body || 
      body.text || 
      body.message || 
      (body.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.text?.body) || 
      "";

    const sender = body.From || query.From || body.from || "visitante";

    // Se for apenas uma navegação via browser/GET sem mensagem
    if (req.method === "GET" && !query.Body && !incomingText) {
      return res.status(200).json({ 
        status: "Webhook do Candinho ativo no Vercel!", 
        endpoint: "/api/whatsapp/webhook",
        suporta: ["Twilio WhatsApp Sandbox", "Z-API", "Evolution API", "Meta Cloud API"] 
      });
    }

    // 3. Processa a mensagem usando o motor conversacional do Candinho
    const localRes = resolverMensagemLocalmente(incomingText, bibliotecaCultural);
    const replyText = localRes 
      ? localRes.reply 
      : "Olá! Sou o Candinho, seu amigo artista! 🎨 O que você gostaria de criar ou descobrir hoje no Ateliê?";

    // 4. Se a requisição for do Twilio Sandbox
    const isTwilio = Boolean(body.AccountSid || query.AccountSid || body.Body || query.Body || sender.includes("whatsapp:"));

    if (isTwilio) {
      res.setHeader("Content-Type", "text/xml; charset=utf-8");
      return res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Message><![CDATA[${replyText}]]></Message>
</Response>`);
    }

    // 5. Retorno padrão JSON para Z-API / Evolution API / Meta
    return res.status(200).json({
      to: sender,
      message: replyText,
      reply: replyText,
      status: "success"
    });
  } catch (err: any) {
    console.error("Erro no webhook Vercel do WhatsApp:", err);
    if (req.body?.AccountSid || req.query?.AccountSid) {
      res.setHeader("Content-Type", "text/xml; charset=utf-8");
      return res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?><Response><Message>Olá! Sou o Candinho, vamos conversar sobre Arte! 🎨</Message></Response>`);
    }
    return res.status(200).json({ status: "OK", reply: "Olá! Sou o Candinho! 🎨" });
  }
}
