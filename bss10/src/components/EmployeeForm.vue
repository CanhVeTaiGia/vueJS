<template>
    <div class="overlay">
      <form @submit.prevent="submitForm" class="form">
        <div class="d-flex justify-content-between align-items-center">
          <h4>{{ isEditing ? 'Chỉnh sửa nhân viên' : 'Thêm mới nhân viên' }}</h4>
          <i class="fa-solid fa-xmark" @click="$emit('closeForm')"></i>
        </div>
  
        <div>
          <label class="form-label" for="name">Họ và tên</label>
          <input v-model="form.name" id="name" type="text" class="form-control" />
          <div v-if="errors.name" class="form-text error">{{ errors.name }}</div>
        </div>
  
        <div>
          <label class="form-label" for="dateOfBirth">Ngày sinh</label>
          <input v-model="form.dateOfBirth" id="dateOfBirth" type="date" class="form-control" />
          <div v-if="errors.dateOfBirth" class="form-text error">{{ errors.dateOfBirth }}</div>
        </div>
  
        <div>
          <label class="form-label" for="email">Email</label>
          <input v-model="form.email" id="email" type="email" class="form-control" />
          <div v-if="errors.email" class="form-text error">{{ errors.email }}</div>
        </div>
  
        <div>
          <label class="form-label" for="address">Địa chỉ</label>
          <textarea v-model="form.address" class="form-control" id="address" rows="3"></textarea>
        </div>
  
        <div>
          <button class="w-100 btn btn-primary">{{ isEditing ? 'Cập nhật' : 'Thêm mới' }}</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    employee: Object
  });
  
  const emit = defineEmits(['closeForm', 'submitForm']);
  
  const form = ref({
    name: '',
    dateOfBirth: '',
    email: '',
    address: ''
  });
  
  const errors = ref({
    name: '',
    dateOfBirth: '',
    email: ''
  });
  
  const isEditing = ref(false);
  
  // Thiết lập dữ liệu nếu đang chỉnh sửa
  watch(() => props.employee, (newEmployee) => {
    if (newEmployee) {
      form.value = { ...newEmployee };
      isEditing.value = true;
    } else {
      resetForm();
    }
  });
  
  const submitForm = () => {
    // Validate dữ liệu
    if (!form.value.name) {
      errors.value.name = 'Họ và tên không được để trống.';
      return;
    } else {
      errors.value.name = '';
    }
  
    if (!form.value.email) {
      errors.value.email = 'Email không được để trống.';
      return;
    } else if (!validateEmail(form.value.email)) {
      errors.value.email = 'Email không hợp lệ.';
      return;
    } else {
      errors.value.email = '';
    }
  
    if (!form.value.dateOfBirth) {
      errors.value.dateOfBirth = 'Ngày sinh không được để trống.';
      return;
    } else if (new Date(form.value.dateOfBirth) > new Date()) {
      errors.value.dateOfBirth = 'Ngày sinh không được lớn hơn ngày hiện tại.';
      return;
    } else {
      errors.value.dateOfBirth = '';
    }
  
    // Emit sự kiện khi form hợp lệ
    emit('submitForm', { ...form.value, active: true });
  };
  
  // Hàm kiểm tra định dạng email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  // Reset form
  const resetForm = () => {
    form.value = {
      name: '',
      dateOfBirth: '',
      email: '',
      address: ''
    };
    isEditing.value = false;
  };
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
  
  .form {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
  }
  
  .form-label {
    font-weight: bold;
  }
  
  .error {
    color: red;
    font-size: 0.8rem;
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
  
  .error {
    color: red;
  }
  </style>
  