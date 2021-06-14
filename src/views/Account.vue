<template>
  <div>
    <Header />
    <AccountInfo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import AccountInfo from "@/components/AccountInfo.vue";

export default defineComponent({
  name: "Account",
  components: {
    Header,
    AccountInfo
  }
});
</script>
