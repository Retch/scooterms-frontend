<template>
  <div class="p-d-flex p-jc-between">
    <div class="p-as-center p-ml-1">
      <Button
        icon="pi pi-bars"
        @click="
          visibleLeft = true;
          fetchCredits();
        "
        class="p-button-text"
      />
    </div>
    <div class="p-as-center">
      <h3 style="">Scooter-MS</h3>
    </div>
    <div class="p-as-center p-mr-1">
      <img alt="logo" src="@/assets/Logo.png" height="40" class="" />
    </div>
  </div>

  <Sidebar
    v-model:visible="visibleLeft"
    :baseZIndex="1000"
    class="p-sidebar-sm"
  >
    <h3>Scooter-MS</h3>
    <h4 style="">Guthaben: {{ this.userCredit }}€</h4>
    <div class="">
      <Button
        label="Scootermap"
        icon="pi pi-map"
        class="p-button-text p-d-block"
        @click="$router.push('home')"
      />
      <Button
        label="Account"
        icon="pi pi-user"
        class="p-button-text p-d-block"
        @click="$router.push('account')"
      />
      <Button
        label="Log out"
        @click="logout()"
        icon="pi pi-eject"
        class="p-button-text p-d-block"
      />
    </div>
  </Sidebar>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      visibleLeft: false,
      userCredit: 0
    };
  },
  mounted() {
    if (this.$store.state.jwt == "novalidtoken") {
      this.$router.push("/");
    }
  },
  methods: {
    logout() {
      this.$router.push('logout');
      this.$emit("logout");
    },
    async fetchCredits() {
      const res = await axios({
        method: "get",
        url: "http://localhost:8080/accountmgr/myaccount",
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch((error) => {
        return { error: error };
      });

      this.userCredit = res.data.creditedEuros;
    }
  }
});
</script>
