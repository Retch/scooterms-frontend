<template>
  <div class="p-d-flex p-jc-between">
    <div class="p-as-center p-ml-1">
      <Button
        icon="pi pi-bars"
        @click="visibleLeft = true"
        class="p-button-text"
      />
    </div>
    <div class="p-as-center">
      <h3 style="">Scooter-MS</h3>
    </div>
    <div class="p-as-center p-mr-1">
      <img
        alt="logo"
        src="https://raw.githubusercontent.com/fh-erfurt/Scooter-MS/main/assets/Logo.png"
        height="40"
        class=""
      />
    </div>
  </div>

  <Sidebar
    v-model:visible="visibleLeft"
    :baseZIndex="1000"
    class="p-sidebar-sm"
  >
    <h3>Menu</h3>
    <div class="">
      <Button
        label="Account"
        icon="pi pi-user"
        class="p-button-text p-d-block"
      />

      <Button
        label="Log out"
        @click="logout()"
        icon="pi pi-eject"
        class="p-button-text p-d-block"
      />
    </div>
  </Sidebar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      visibleLeft: false,
    };
  },
  methods: {
    logout() {
      this.$emit("logout");
    }
  }
});
</script>
