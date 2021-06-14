<template>
  <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->
  <router-view />
  <!--<div v-if="isloggedin === true">
    <Header @logout="logout" :key="componentKey" />
    <Home />
  </div>
  <div v-if="isloggedin === false">
    <Login @jwt-token="login" />
  </div>-->
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isloggedin: false,
      componentKey: 0
    };
  },
  methods: {
    updateloginstatus() {
      if (this.$store.state.jwt != "novalidtoken") {
        this.isloggedin = true;
      } else {
        this.isloggedin = false;
      }
    },
    login(token) {
      //console.log("Login..." + token);
      this.$store.state.jwt = token;
      this.updateloginstatus();
      //console.log(this.$jwt);
    },
    logout() {
      //console.log("Logout...");
      this.$store.state.jwt = "novalidtoken";
      this.updateloginstatus();
      this.forceRerender();
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
