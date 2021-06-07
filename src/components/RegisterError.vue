<template>
  <div class="">
    <Toast position="top-right" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "primevue/usetoast";

export default defineComponent({
  name: "RegisterError",
  setup() {
    const toast = useToast();
    toast.add({
      severity: "info",
      summary: "Info Message",
      detail: "Message Content",
      life: 3000
    });
  },
  mounted() {
    this.$toast.add({
      severity: "success",
      summary: "Success Message",
      detail: "Order submitted",
      life: 3000
    });
  }
});
</script>
