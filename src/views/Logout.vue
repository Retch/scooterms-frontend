<template>
  <div>
    <h1>Sie werden nun abgemeldet...</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logout",
  async mounted() {
    this.$store.state.jwt = "novalidtoken";
    await new Promise(r => setTimeout(r, 3000));
    this.$router.push("/");
  }
});
</script>
