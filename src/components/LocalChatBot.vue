<template>
    <div class="chatbot">
      <h2>Emotion-Sensitive Chatbot</h2>
      <div class="chat-window">
        <div v-for="(msg, index) in messages" :key="index" :class="msg.sender">
          <strong>{{ msg.sender }}:</strong> {{ msg.text }}
        </div>
      </div>
      <input v-model="userMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
      <button @click="sendMessage">Send</button>
    </div>
    <div class="button-container">
        <button @click="goToHome" class="quote-button">Exit</button>
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
        
        try {
          // Send the message to the backend
          const response = await axios.post('http://127.0.0.1:5000/get', {
            msg: this.userMessage,
            // message: this.userMessage,
          }, {
            headers: {
              'Content-Type': 'multipart/form-data',  // Ensure the correct content type
            },
          });
          const reply = response.data;
          this.messages.push({ sender: 'Bot', text: reply });
        } catch (error) {
          console.error('Error communicating with the chatbot:', error);
          this.messages.push({ sender: 'Bot', text: 'Sorry, something went wrong.' });
        }
        // Clear the input
        this.userMessage = '';
      },
      goToHome() {
      this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .chatbot {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: rgb(151, 165, 169);
  }
  
  .chat-window {
    height: 450px;
    overflow-y: auto;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    background-color: whitesmoke;
  }
  
  .You {
    text-align: right;
    color: #42b983;
    font-size: 18px;
  }
  
  .Bot {
    text-align: left;
    color: #2c3e50;
    font-size: 18px;

  }
  
  input {
    width: calc(100% - 80px);
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: lightblue;
  }
  
  button {
    padding: 10px 20px;
    background-color: #127c4c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3aa876;
  }
  </style>