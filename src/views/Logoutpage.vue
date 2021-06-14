<template>
  <div>
    <Logout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logout from "@/components/Logout.vue";

export default defineComponent({
  name: "Logoutpage",
  components: {
    Logout
  }
});
</script>
