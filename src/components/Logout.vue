<template>
  <div class="p-d-block p-mx-auto p-mt-6" style="text-align: center">
    <h1>Sie werden nun abgemeldet...</h1>
    <img
      class="p-mt-2"
      src="https://media.giphy.com/media/iYHgXVsV2NPWM/giphy.gif"
      alt="http://gph.is/2dj99m0"
      style="width: 20vw"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logout",
  async mounted() {
    if (this.$store.state.jwt == "novalidtoken") {
      this.$router.push("/");
    } else {
      this.$store.state.jwt = "novalidtoken";
      await new Promise(r => setTimeout(r, 2525));
      this.$router.push("/");
    }
  }
});
</script>
