<template>
    <nav>
      <button @click="goToHome">Home</button>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      goToHome() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  nav {
    margin-bottom: 20px;
  }
  button {
    padding: 10px 20px;
    font-size: 16px;
  }
  </style>