<template>
  <div class="p-d-flex">
    <Toast class="Toast" @click="this.$toast.removeAllGroups()" />
    <div class="p-d-block p-mx-auto p-mt-6  ">
      <img
        class=""
        src="https://i.ibb.co/5MZBcW1/Logo.png"
        alt="Scooter-MS Logo"
        style="height: 30vh"
      />
      <div class="p-inputgroup p-mt-3">
        <span class="p-inputgroup-addon">
          <i class="pi pi-user"></i>
        </span>
        <InputText v-model="this.email" placeholder="Email" />
      </div>
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-key"></i>
        </span>
        <Password
          v-model="this.password"
          placeholder="Passwort"
          :feedback="false"
        />
      </div>
      <div class="">
        <Button
          label="Einloggen"
          @click="login()"
          class="p-button-secondary p-mr-2 p-mt-1 p-shadow-1"
        />
        <Button
          @click="register()"
          label="Registrieren"
          class="p-button-secondary p-shadow-1"
        />
      </div>
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
        closeable: false
      });
    };

    const showRegistrationError = () => {
      toast.add({
        severity: "error",
        summary: "Email bereits registriert",
        detail: "Bitte andere Email wählen oder einloggen",
        life: 5000,
        closeable: false
      });
    };

    const showLoginSuccess = () => {
      toast.add({
        severity: "success",
        summary: "Zugangsdaten akzeptiert",
        life: 1500,
        closeable: false
      });
    };

    const showRegistrationSuccess = () => {
      toast.add({
        severity: "success",
        summary: "Registrierung erfolgreich",
        detail: "Bitte mit den gewählten Zugangsdaten einloggen",
        life: 2000,
        closeable: false
      });
    };

    return {
      showLoginError,
      showRegistrationError,
      showLoginSuccess,
      showRegistrationSuccess
    };
  },
  components: {
    Toast
  },
  data() {
    return {
      email: "",
      password: "",
      jwt: "",
      componentKey: 0
    };
  },
  methods: {
    async login() {
      const res = await axios({
        method: "post",
        url: process.env.VUE_APP_API_ENDPOINT + "/authenticate",
        data: {
          email: this.email,
          password: this.password
        }
      }).catch(error => {
        return { error: error };
      });

      if (res.status == 200) {
        this.$toast.removeAllGroups();
        this.showLoginSuccess();
        const data = res.data;
        this.jwt = data.token;
        await new Promise(r => setTimeout(r, 2000));
        //console.log(this.$jwt);
        //this.$jwt = data.token;
        //console.log(this.$jwt);
        this.$emit("jwt-token", data.token);
        this.$router.push("home");
        this.$store.state.jwt = data.token;
      } else {
        this.$toast.removeAllGroups();
        this.showLoginError();
      }
    },
    async register() {
      const res = await axios({
        method: "post",
        url: process.env.VUE_APP_API_ENDPOINT + "/register",
        data: {
          email: this.email,
          password: this.password
        }
      }).catch(error => {
        return { error: error };
      });

      if (res.status == 200) {
        this.$toast.removeAllGroups();
        this.showRegistrationSuccess();
        const data = res.data;
        console.log(data.email);
      } else {
        this.$toast.removeAllGroups();
        this.showRegistrationError();
      }
    }
  }
});
</script>

<style>
.Toast {
  max-width: 90vw;
}
</style>
