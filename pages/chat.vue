<template>
  <div class="w-full">
    <BreadCrumb />
    <div
      class="flex flex-wrap flex-col justify-center max-w-screen-xl m-auto md:px-4 md:py-8 border-b border-gray-400"
    >
      <div class="flex flex-wrap flex-col w-full items-center justify-center">
        <div
          class="flex flex-wrap w-full items-start justify-center md:justify-between"
        >
          <!--image of width 1/5 in tablet and large screen and 10/12 in mobile-->
          <img
            src="/30.webp"
            alt="Contact us"
            class="md:rounded-xl w-full md:w-2/5 aspect-16/9 md:aspect-square object-cover"
          />
          <!--Other content-->
          <div
            class="flex flex-wrap flex-col w-10/12 md:w-3/5 md:pl-8 md:pr-4 pl-0 pr-0 py-4"
          >
            <!--Name with the icon of user-->

            <p class="info-content"></p>
            <div v-if="showChatbot" class="chatbot">
              <div class="chat-header">
                Chatbot
                <button class="header-btn close-btn" @click="toggleChatbot">
                  Close
                </button>
                <button class="header-btn clear-btn" @click="clearChat">
                  Clear
                </button>
              </div>
              <div class="chat-window">
                <div
                  v-for="message in messages"
                  :key="message.id"
                  class="message"
                >
                  <div :class="['bubble', message.user ? 'user' : 'assistant']">
                    {{ message.text }}
                  </div>
                </div>
              </div>
              <div class="input-container">
                <input
                  v-model="userInput"
                  @keydown.enter="sendMessageToBot"
                  placeholder="Ask a question..."
                />
                <button @click="sendMessageToBot">Send</button>
              </div>
            </div>
            <button v-else class="open-chat-btn" @click="toggleChatbot">
              Open Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import predefinedResponses from "~/responses.json"; // Import the predefined JSON

// State for user input and messages
const userInput = ref("");
const messages = ref([]);
const showChatbot = ref(false);

// Access the sendMessage function provided by the openai.js plugin
const { $sendMessage } = useNuxtApp();

const sendMessageToBot = async () => {
  if (userInput.value.trim() === "") return;

  const userMessage = {
    id: Date.now(),
    text: userInput.value,
    user: true,
  };

  messages.value.push(userMessage);

  // Find the corresponding answer in the predefined JSON data
  const predefinedResponseIndex = predefinedResponses.messages.findIndex(
    (msg) => msg.role === "user" && msg.content[0].text === userInput.value
  );

  if (predefinedResponseIndex !== -1) {
    const assistantMessage =
      predefinedResponses.messages[predefinedResponseIndex + 1];
    if (assistantMessage && assistantMessage.role === "assistant") {
      const botMessage = {
        id: Date.now() + 1,
        text: assistantMessage.content[0].text,
        user: false,
      };
      messages.value.push(botMessage);
      userInput.value = "";
      return;
    }
  } else {
    const botMessage = {
      id: Date.now() + 1,
      text: "Sorry, I don't understand that question.",
      user: false,
    };
    messages.value.push(botMessage);
  }

  userInput.value = "";
};

const toggleChatbot = () => {
  showChatbot.value = !showChatbot.value;
};

const clearChat = () => {
  messages.value = [];
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Zilla+Slab:wght@400;700&display=swap");

.chatbot {
  border: 5px solid #c56109;
  padding: 10px;
  width: 800px;
  background: linear-gradient(135deg, #f5f7ff, #e1d8f1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-family: "Zilla Slab", serif;
}

.chat-header {
  background: linear-gradient(135deg, #d29404, #d69107);
  color: #fff;
  padding: 10px;
  border-radius: 20px 20px 0 0;
  text-align: center;
  font-size: 1.2em;
  position: relative;
}

.header-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2em;
  cursor: pointer;
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}

.clear-btn {
  position: absolute;
  right: 90px;
  top: 10px;
}

.chat-window {
  flex: 1;
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
  background: #fff;
  border-radius: 0 0 20px 20px;
  margin-bottom: 10px;
}

.message {
  display: flex;
  margin-bottom: 10px;
}

.bubble {
  padding: 10px;
  border-radius: 20px;
  max-width: 70%;
  word-wrap: break-word;
  position: relative;
  animation: fadeIn 0.5s ease;
}

.bubble.user {
  background: #cf4906;
  color: #fff;
  align-self: flex-end;
  border-bottom-right-radius: 0;
  margin-left: auto;
}

.bubble.assistant {
  background: #daac07;
  color: #fff;
  align-self: flex-start;
  border-bottom-left-radius: 0;
  margin-right: auto;
}

.input-container {
  display: flex;
  border-top: 1px solid #ccc;
  padding: 10px;
  background: #f5f7ff;
  border-radius: 0 0 20px 20px;
}

.input-container input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background: #e1d8f1;
  margin-right: 10px;
  font-family: "Roboto", sans-serif;
}

.input-container button {
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  background: #ffbb00;
  color: #fff;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

.input-container button:hover {
  background: #cf400c;
}

.open-chat-btn {
  background: #ffbb00;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

.open-chat-btn:hover {
  background: #cf400c;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
