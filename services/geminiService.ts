import { GoogleGenAI } from "@google/genai";
import { BehaviorDefinition, PromptVariable } from "../types";

// FIX: Switched to process.env.API_KEY and removed the manual check.
// This aligns with the coding guidelines, which mandate using process.env.API_KEY directly
// and assuming it's always available in the execution environment. This also resolves the
// TypeScript error related to `import.meta.env`.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

function constructPrompt(
  behavior: BehaviorDefinition,
  variables: PromptVariable[]
): string {
  let prompt = `Given the following behavior blueprint, generate a detailed test case in Markdown format.\n\n`;
  prompt += `**Pre-conditions:**\n${behavior.preconditions || 'None'}\n\n`;
  prompt += `**Actions:**\n${behavior.actions || 'None'}\n\n`;
  prompt += `**Post-conditions:**\n${behavior.postconditions || 'None'}\n\n`;

  if (variables.length > 0) {
    prompt += `**Variables:**\n`;
    variables.forEach(v => {
      prompt += `- \`${v.name}\` (default: \`${v.defaultValue}\`)\n`;
    });
  }
  return prompt;
}

export const generateContent = async (
  behavior: BehaviorDefinition,
  variables: PromptVariable[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = constructPrompt(behavior, variables);

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    
    return response.text;

  } catch (error) {
    console.error("Error generating content from Gemini API:", error);
    if (error instanceof Error) {
      return `An error occurred while communicating with the AI: ${error.message}`;
    }
    return "An unknown error occurred while contacting the Gemini API.";
  }
};
