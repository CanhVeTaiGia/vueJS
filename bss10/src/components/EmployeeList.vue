<template>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Trạng thái</th>
          <th colspan="3">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employees" :key="employee.email">
          <td>{{ index + 1 }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ formatDate(employee.dateOfBirth) }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.address }}</td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <div :class="['status', employee.active ? 'status-active' : 'status-stop']"></div>
              <span>{{ employee.active ? 'Đang hoạt động' : 'Ngừng hoạt động' }}</span>
            </div>
          </td>
          <td>
            <span class="button" @click="$emit('blockEmployee', employee)">
              {{ employee.active ? 'Chặn' : 'Bỏ chặn' }}
            </span>
          </td>
          <td>
            <span class="button" @click="$emit('editEmployee', employee)">Sửa</span>
          </td>
          <td>
            <span class="button" @click="$emit('deleteEmployee', employee)">Xóa</span>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  const props = defineProps({
    employees: Array
  });
  
  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  };
  </script>
  
  <style scoped>
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    border-collapse: collapse;
  }
  
  .table th,
  .table td {
    padding: 0.75rem;
    text-align: left;
    border: 1px solid #dee2e6;
  }
  
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: #f2f2f2;
  }
  
  .status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
  }
  
  .status-active {
    background-color: green;
  }
  
  .status-stop {
    background-color: red;
  }
  
  .button {
    cursor: pointer;
    color: #007bff;
  }
  
  .button:hover {
    text-decoration: underline;
  }
  
  </style>
  