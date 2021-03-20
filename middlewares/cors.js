import nextConnect from "next-connect";
import cors from "cors";

const handler = nextConnect();

handler.use(cors());

export default handler;
