import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from 'vuex';


import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import 'primeflex/primeflex.css';

import ToastService from 'primevue/toastservice';

import router from "./router";
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import Sidebar from 'primevue/sidebar';
import Password from 'primevue/password';


const store = createStore({
    state () {
      return {
        count: 0,
        jwt: "novalidtoken"
      }
    },
    mutations: {
      increment (state) {
        //state.count++
      }
    }
  })

const app = createApp(App);


app.use(router);
app.use(PrimeVue, {ripple: true});
app.use(ToastService);
app.use(store);


app.component('InputText', InputText);
app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('Sidebar', Sidebar);
app.component('Password', Password);


app.mount("#app");