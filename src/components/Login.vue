<template>
  <div class="">
    <Toast />
    <Toast position="top-left" group="tl" />
    <Toast position="bottom-left" group="bl" />
    <Toast position="bottom-right" group="br" />
    <div class="p-col-12 p-md-3">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-user"></i>
        </span>
        <InputText v-model="this.email" placeholder="Email" />
      </div>
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-key"></i>
        </span>
        <Password v-model="this.password" placeholder="Passwort" :feedback="false" />
      </div>

      <Button label="Einloggen" @click="login()" class="p-button-secondary" />
      <Button @click="register()" label="Registrieren" class="p-button-secondary" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";

export default defineComponent({
  name: "Login",
  setup() {
    const toast = useToast();

    const showLoginError = () => {
      toast.add({
        severity: "error",
        summary: "Falsche Zugangsdaten",
        detail: "Vor dem Login bitte Registrieren",
        life: 5000,
      });
    };

    const showRegistrationError = () => {
      toast.add({
        severity: "error",
        summary: "Email bereits registriert",
        detail: "Bitte andere Email wählen oder einloggen",
        life: 5000,
      });
    };

    const showLoginSuccess = () => {
      toast.add({
        severity: "success",
        summary: "Zugangsdaten akzeptiert",
        life: 1500,
      });
    };

    const showRegistrationSuccess = () => {
      toast.add({
        severity: "success",
        summary: "Registrierung erfolgreich",
        detail: "Bitte mit den gewählten Zugangsdaten einloggen",
        life: 2000,
      });
    };

    return {
      showLoginError,
      showRegistrationError,
      showLoginSuccess,
      showRegistrationSuccess,
    };
  },
  components: {
    Toast,
  },
  data() {
    return {
      email: "",
      password: "",
      jwt: "",
      componentKey: 0,
    };
  },
  methods: {
    async login() {
      const res = await axios({
        method: "post",
        url: "http://localhost:8080/authenticate",
        data: {
          email: this.email,
          password: this.password,
        },
      }).catch((error) => {
        return { error: error };
      });

      if (res.status == 200) {
        this.showLoginSuccess();
        const data = res.data;
        this.jwt = data.token;
        console.log(this.jwt);
        await new Promise(r => setTimeout(r, 2000));
        //console.log(this.$jwt);
        //this.$jwt = data.token;
        //console.log(this.$jwt);
        this.$emit("jwt-token", data.token);
      } else {
        this.showLoginError();
      }
    },
    async register() {
      const res = await axios({
        method: "post",
        url: "http://localhost:8080/register",
        data: {
          email: this.email,
          password: this.password,
        },
      }).catch((error) => {
        return { error: error };
      });

      if (res.status == 200) {
        this.showRegistrationSuccess();
        const data = res.data;
        console.log(data.email);
      } else {
        this.showRegistrationError();
      }
    },
  },
});
</script>
