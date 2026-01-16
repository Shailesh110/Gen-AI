import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:"AIzaSyBLkN2gYBMQL2v-2_FWt2yfmVjn8SnjGqw"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "How does AI work?",

    config: {
      disableThinking: true
    }   
  });
  console.log(response.text);
}

await main();