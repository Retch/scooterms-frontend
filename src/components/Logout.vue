<template>
  <div class="p-d-block p-mx-auto p-mt-6">
    <h1>Sie werden nun abgemeldet...</h1>
  </div>
</template>

<script>
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
