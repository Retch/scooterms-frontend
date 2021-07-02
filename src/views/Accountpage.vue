<template>
  <div>
    <Header />
    <div style="width: 35rem; max-width: 90vw" class="p-mx-auto">
      <AccountInfo />
      <RentalEntityList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import AccountInfo from "@/components/AccountInfo.vue";
import RentalEntityList from "@/components/ScooterRentalEntityList.vue";

export default defineComponent({
  name: "Accountpage",
  components: {
    Header,
    AccountInfo,
    RentalEntityList
  }
});
</script>
