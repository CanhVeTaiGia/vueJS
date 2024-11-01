import { createStore } from "vuex";
import employee from "./modules/employeesStore";
const store = createStore({
  modules: {
    employee,
  },
});

export default store;