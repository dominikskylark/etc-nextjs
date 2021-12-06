import { pusher } from "../../../lib";

export default async function handler(req, res) {
  const { message } = req.body;

  await pusher.trigger("presence-example", "chat-update", {
    message,
  });

  res.json({ status: 200 });
}
