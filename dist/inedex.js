import { createAgent, gemini } from "@inngest/agent-kit";
import { readFileSync } from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const codingAssistent = createAgent({
    name: "coding_assistent",
    system: "An AI assistant that helps answer questions about code by reading and analyzing files",
    model: gemini({
        model: "gemini-2.0-flash-lite",
        apiKey: process.env.GEMINI_API_KEY
    })
});
const main = async () => {
    const filePath = path.join(process.cwd(), "src/example.ts");
    const code = readFileSync(filePath, "utf-8");
    const { output } = await codingAssistent.run(`what the following code does.? ${code}`);
    console.log(output);
};
main();
//# sourceMappingURL=inedex.js.map