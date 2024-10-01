<template>
  <div class="container">
    <header class="d-flex justify-content-between mb-3">
      <h3>Nhân viên</h3>
      <button class="btn btn-primary" @click="openForm">Thêm mới nhân viên</button>
    </header>

    <div class="d-flex align-items-center justify-content-end gap-2 mb-3">
      <input
        v-model="searchQuery"
        style="width: 350px"
        type="text"
        class="form-control"
        placeholder="Tìm kiếm theo email"
      />
      <i class="fa-solid fa-arrows-rotate" title="Refresh" @click="refreshList"></i>
    </div>

    <EmployeeList
      :employees="filteredEmployees"
      @editEmployee="editEmployee"
      @deleteEmployee="openDeleteModal"
      @blockEmployee="openBlockModal"
    />

    <EmployeeForm
      v-if="showForm"
      :employee="selectedEmployee"
      @closeForm="closeForm"
      @submitForm="handleFormSubmit"
    />

    <ConfirmModal
      v-if="showDeleteModal"
      title="Xác nhận xóa"
      content="Bạn có chắc chắn muốn xóa nhân viên này?"
      @confirm="deleteEmployee"
      @close="closeDeleteModal"
    />
    <ConfirmModal
      v-if="showBlockModal"
      :title="blockTitle"
      :content="blockContent"
      @confirm="confirmBlock"
      @close="closeBlockModal"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import EmployeeList from './components/EmployeeList.vue';
import EmployeeForm from './components/EmployeeForm.vue';
import ConfirmModal from './components/ConfirmModal.vue';

const employees = ref(JSON.parse(localStorage.getItem('employees') || '[]'));
const searchQuery = ref('');
const showForm = ref(false);
const selectedEmployee = ref(null);
const showDeleteModal = ref(false);
const showBlockModal = ref(false);
const blockTitle = ref('');
const blockContent = ref('');
const employeeToBlock = ref(null);

const openForm = () => {
  selectedEmployee.value = null;
  showForm.value = true;
};

const closeForm = () => {
  showForm.value = false;
};

const filteredEmployees = computed(() => {
  return searchQuery.value
    ? employees.value.filter(employee =>
        employee.email.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    : employees.value;
});

const handleFormSubmit = (employee) => {
  if (selectedEmployee.value) {
    const index = employees.value.findIndex(emp => emp.email === selectedEmployee.value.email);
    employees.value[index] = employee;
  } else {
    employees.value.push(employee);
  }
  localStorage.setItem('employees', JSON.stringify(employees.value));
  closeForm();
};

const openDeleteModal = (employee) => {
  selectedEmployee.value = employee;
  showDeleteModal.value = true;
};

const deleteEmployee = () => {
  employees.value = employees.value.filter(emp => emp.email !== selectedEmployee.value.email);
  localStorage.setItem('employees', JSON.stringify(employees.value));
  closeDeleteModal();
};

const closeDeleteModal = () => {
  showDeleteModal.value = false;
};

const openBlockModal = (employee) => {
  employeeToBlock.value = employee;
  if (employee.active) {
    blockTitle.value = 'Xác nhận chặn';
    blockContent.value = 'Bạn có chắc chắn muốn chặn tài khoản này?';
  } else {
    blockTitle.value = 'Xác nhận bỏ chặn';
    blockContent.value = 'Bạn có chắc chắn muốn bỏ chặn tài khoản này?';
  }
  showBlockModal.value = true;
};

const confirmBlock = () => {
  employeeToBlock.value.active = !employeeToBlock.value.active;
  localStorage.setItem('employees', JSON.stringify(employees.value));
  closeBlockModal();
};

const closeBlockModal = () => {
  showBlockModal.value = false;
};

const refreshList = () => {
  employees.value = JSON.parse(localStorage.getItem('employees') || '[]');
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #333;
}

.d-flex {
  display: flex;
}

.justify-content-between {
  justify-content: space-between;
}

.mb-3 {
  margin-bottom: 1rem;
}

.form-control {
  border-radius: 4px;
}

.button {
  cursor: pointer;
  color: #007bff;
}

.button:hover {
  text-decoration: underline;
}

</style>
