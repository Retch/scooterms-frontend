<template>
  <div>
    <Header />
    <HereMap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HereMap from "@/components/Map.vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "Home",
  components: {
    HereMap,
    Header
  }
});
</script>
