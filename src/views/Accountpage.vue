<template>
  <div>
    <Header />
    <AccountInfo
      style="display: inline-block;
    margin-left: 40vw;
    margin-right: auto;
    text-align: left"
    />
    <RentalEntityList />
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
