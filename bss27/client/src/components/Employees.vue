<template>
  <div>
    <h2 class="text-2xl">Nhân viên</h2>
    <header class="p-4 flex gap-3">
      <v-btn
        class="mt-3"
        color="blue"
        variants="elevated"
        @click="showAddForm = true"
        >Thêm mới nhân viên</v-btn
      >

      <v-text-field
        max-width="400px"
        @input="searchEmployee"
        v-model="searchQuery"
        label="Tìm kiếm theo email"
        variant="outlined"
      ></v-text-field>
    </header>

    <main class="p-4">
      <v-table class="rounded">
        <thead>
          <tr>
            <th class="text-xl text-center">STT</th>
            <th class="text-xl text-center">Họ và tên</th>
            <th class="text-xl text-center">Ngày sinh</th>
            <th class="text-xl text-center">Email</th>
            <th class="text-xl text-center">Địa chỉ</th>
            <th class="text-xl text-center">Trạng thái</th>
            <th class="text-xl text-center">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in filteredEmployees" :key="employee.id">
            <td class="text-center">{{ index + 1 }}</td>
            <td class="text-center">{{ employee.name }}</td>
            <td class="text-center">{{
              employee.dob.split("-").reverse().join("-")
            }}</td>
            <td class="text-center">{{ employee.email }}</td>
            <td class="text-center">{{ employee.address }}</td>
            <td class="text-center">
              <v-chip
                variant="outlined"
                :color="employee.status ? 'green' : 'red'"
              >
                {{ employee.status ? "Đang hoạt động" : "Ngừng hoạt động" }}
              </v-chip>
            </td>
            <td class="text-center">
              <v-icon
                v-model="employee.status"
                :color="employee.status ? 'red' : 'green'"
                :icon="
                  employee.status ? 'fa-solid fa-lock' : 'fa-solid fa-unlock'
                "
                @click="toggleStatus(employee)"
              ></v-icon>

              <v-icon
                color="orange"
                class="mx-3"
                icon="fa-solid fa-pen"
                @click="editEmployee(employee)"
              >
              </v-icon>
              <v-icon
                color="red"
                @click="deleteEmployee(employee.id)"
                icon="fa-solid fa-trash"
              />
            </td>
          </tr>
        </tbody>
      </v-table>
    </main>

    <teleport to="body">
      <div
        class="absolute rounded flex justify-center top-0 left-0 items-center w-full h-screen bg-[#0000002c]"
        v-if="showAddForm || showEditForm"
      >
        <v-form
          class="w-2/5 rounded p-4 bg-white"
          @submit.prevent="saveEmployee"
        >
          <h3 class="text-2xl font-bold py-4">{{
            showAddForm ? "Thêm mới nhân viên" : "Sửa nhân viên"
          }}</h3>
          <v-text-field
            variant="outlined"
            v-model="employeeForm.name"
            label="Họ và tên"
            required
          />
          <v-text-field
            v-model="employeeForm.dob"
            type="date"
            label="Ngày sinh"
            variant="outlined"
            required
          />
          <v-text-field
            v-model="employeeForm.email"
            type="email"
            label="Email"
            variant="outlined"
            required
          />
          <v-text-field
            v-model="employeeForm.address"
            label="Địa chỉ"
            variant="outlined"
            required
          />
          <v-btn variant="elevated" color="green" class="mr-3" type="submit">{{
            showAddForm ? "Thêm" : "Lưu"
          }}</v-btn>
          <v-btn variant="elevated" color="red" @click="cancelForm">Hủy</v-btn>
        </v-form>
      </div></teleport
    >
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const store = useStore();

const searchQuery = ref("");
const showAddForm = ref(false);
const showEditForm = ref(false);
const employeeForm = ref({
  name: "",
  dob: "",
  email: "",
  address: "",
  status: true,
});
const currentEmployeeId = ref(null);

const filteredEmployees = computed(() =>
  store.getters.filteredEmployees(searchQuery.value)
);

const loadEmployees = async () => {
  await store.dispatch("fetchEmployees");
};

const saveEmployee = async () => {
  if (showAddForm.value) {
    await store.dispatch("addEmployee", employeeForm.value);
  } else {
    await store.dispatch("updateEmployee", {
      ...employeeForm.value,
      id: currentEmployeeId.value,
    });
  }
  resetForm();
};

const editEmployee = (employee) => {
  currentEmployeeId.value = employee.id;
  employeeForm.value = { ...employee };
  showEditForm.value = true;
  showAddForm.value = false;
};

const deleteEmployee = async (employeeId) => {
  Swal.fire({
    title: "Bạn có chắc muốn xóa tài khoản này",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Hủy",
    confirmButtonText: "Xác nhận!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await store.dispatch("deleteEmployee", employeeId);
    }
  });
};

const toggleStatus = async (employee) => {
  Swal.fire({
    title: `Bạn có chắc muốn ${
      employee.status ? "khóa" : "mở khóa"
    } tài khoản ${employee.name} này?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Hủy",
    confirmButtonText: "Xác nhận",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await store.dispatch("updateEmployee", {
        ...employee,
        status: !employee.status,
      });
    }
  });
};

const resetForm = () => {
  employeeForm.value = {
    name: "",
    dob: "",
    email: "",
    address: "",
    status: true,
  };
  showAddForm.value = false;
  showEditForm.value = false;
  currentEmployeeId.value = null;
};

const cancelForm = () => {
  resetForm();
};

onMounted(() => {
  loadEmployees();
});
</script>

<style scoped></style>
