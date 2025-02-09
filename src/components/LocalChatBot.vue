<template>
    <div class="chatbot">
      <h2>Local Chatbot</h2>
      <div class="chat-window">
        <div v-for="(msg, index) in messages" :key="index" :class="msg.sender">
          <strong>{{ msg.sender }}:</strong> {{ msg.text }}
        </div>
      </div>
      <input v-model="userMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
      <button @click="sendMessage">Send</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        userMessage: '',
        messages: [],
      };
    },
    methods: {
      async sendMessage() {
        if (!this.userMessage.trim()) return;
  
        // Add user's message to the chat
        this.messages.push({ sender: 'You', text: this.userMessage });
  
        // Send the message to the local chatbot backend
        try {
          const response = await axios.post('http://localhost:5000/chat', {
            message: this.userMessage,
          });
          const reply = response.data.reply;
  
          // Add chatbot's reply to the chat
          this.messages.push({ sender: 'Bot', text: reply });
        } catch (error) {
          console.error('Error communicating with the chatbot:', error);
          this.messages.push({ sender: 'Bot', text: 'Sorry, something went wrong.' });
        }
  
        // Clear the input
        this.userMessage = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .chatbot {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  .chat-window {
    height: 300px;
    overflow-y: auto;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  
  .You {
    text-align: right;
    color: #42b983;
  }
  
  .Bot {
    text-align: left;
    color: #2c3e50;
  }
  
  input {
    width: calc(100% - 80px);
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3aa876;
  }
  </style>