<template>
  <div>
    <HereMap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HereMap from "@/components/Map.vue";

export default defineComponent({
  name: "Home",
  components: {
    HereMap
  },
});
</script>
