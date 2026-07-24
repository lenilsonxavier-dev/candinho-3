import webhookHandler from "./whatsapp/webhook.js";

export default async function handler(req: any, res: any) {
  return webhookHandler(req, res);
}
