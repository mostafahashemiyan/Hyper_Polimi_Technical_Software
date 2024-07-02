// plugins/openai.js
import axios from "axios";
import predefinedResponses from "~/responses.json";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const openai = axios.create({
    baseURL: "https://api.openai.com/v1",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.public.openaiApiKey}`,
    },
  });

  const sendMessage = async (message) => {
    // Check predefined JSON responses first
    const predefinedResponse = predefinedResponses.messages.find(
      (msg) =>
        msg.role === "user" &&
        msg.content[0].text.toLowerCase() === message.toLowerCase()
    );

    if (predefinedResponse) {
      const assistantMessage = predefinedResponses.messages.find(
        (msg) =>
          msg.role === "assistant" &&
          msg.content[0].text.toLowerCase() ===
            predefinedResponse.content[0].text.toLowerCase()
      );

      if (assistantMessage) {
        return assistantMessage.content[0].text;
      }
    }

    // Fallback to OpenAI API
    try {
      const response = await openai.post("/chat/completions", {
        model: "gpt-3.5-turbo-16k", // Replace with the correct model name, 'gpt-4' if you have access
        messages: [{ role: "user", content: message }],
      });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error sending message to OpenAI:", error);
      throw error;
    }
  };

  nuxtApp.provide("sendMessage", sendMessage);
});
