import "./assets/main.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import '@mdi/font/css/materialdesignicons.css';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Components
import App from "./App.vue";
import { createApp } from "vue";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");