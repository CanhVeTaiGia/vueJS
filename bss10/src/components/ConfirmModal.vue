<template>
    <div class="overlay">
      <div class="modal-custom">
        <div class="modal-title">
          <h4>{{ title }}</h4>
          <i class="fa-solid fa-xmark" @click="$emit('close')"></i>
        </div>
        <div class="modal-body-custom">
          <span>{{ content }}</span>
        </div>
        <div class="modal-footer-custom">
          <button class="btn btn-light" @click="$emit('close')">Hủy</button>
          <button class="btn btn-danger" @click="$emit('confirm')">Xác nhận</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: String,
    content: String,
  });
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-custom {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .modal-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .modal-body-custom {
    margin: 15px 0;
  }
  
  .modal-footer-custom {
    display: flex;
    justify-content: space-between;
  }
  
  .btn {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-light {
    background-color: #f8f9fa;
    color: #212529;
  }
  
  .btn-light:hover {
    background-color: #e2e6ea;
  }
  
  .btn-danger {
    background-color: #dc3545;
    color: white;
  }
  
  .btn-danger:hover {
    background-color: #c82333;
  }
  
  </style>
  