<template>
  <div class="chatbot">
    <h2>Emotion-Sensitive Chatbot</h2>
    <div class="chat-window" ref="chatWindow">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="['message', msg.sender]"
      >
        <div class="bubble">
          <strong v-if="msg.sender === 'Bot'">🤖</strong>
          <strong v-else>🧑</strong>
          {{ msg.text }}
        </div>
      </div>
    </div>
    <div class="input-container">
      <input
        v-model="userMessage"
        @keyup.enter="sendMessage"
        placeholder="Type a message..."
      />
      <button @click="sendMessage">Send</button>
    </div>
    <div class="button-container">
      <button @click="goToHome" class="exit-button">Exit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userMessage: "",
      messages: [],
    };
  },
  methods: {
    async sendMessage() {
      if (!this.userMessage.trim()) return;

      this.messages.push({ sender: "You", text: this.userMessage });

      this.$nextTick(() => {
        this.scrollToBottom();
      });

      try {
        const response = await axios.post(
          "http://localhost:5000/get",
          { message: this.userMessage },
          { headers: { "Content-Type": "application/json" } }
        );

        const reply = response.data.response;
        this.messages.push({ sender: "Bot", text: reply });

        this.$nextTick(() => {
          this.scrollToBottom();
        });
      } catch (error) {
        console.error("Error communicating with the chatbot:", error);
        this.messages.push({ sender: "Bot", text: "Sorry, something went wrong." });
      }

      this.userMessage = "";
    },
    scrollToBottom() {
      const chatWindow = this.$refs.chatWindow;
      if (chatWindow) {
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.chatbot {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  background: #1e293b;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.chat-window {
  height: 400px;
  overflow-y: auto;
  border-radius: 8px;
  padding: 15px;
  background: #2c3e50;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message {
  display: flex;
  align-items: center;
  max-width: 80%;
}

.You {
  align-self: flex-end;
}

.Bot {
  align-self: flex-start;
}

.bubble {
  padding: 10px 15px;
  border-radius: 18px;
  font-size: 1rem;
  max-width: 100%;
}

.You .bubble {
  background: #4caf50;
  color: white;
  text-align: right;
}

.Bot .bubble {
  background: #f1f1f1;
  color: black;
}

.input-container {
  display: flex;
  margin-top: 10px;
}

input {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #34495e;
  color: white;
  outline: none;
  font-size: 1rem;
}

input::placeholder {
  color: lightgray;
}

button {
  margin-left: 10px;
  padding: 12px 20px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background: #388e3c;
}

.exit-button {
  margin-top: 15px;
  background: #ff4d4d;
}

.exit-button:hover {
  background: #cc0000;
}
</style>
