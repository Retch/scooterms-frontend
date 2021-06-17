<template>
  <div style="display: block;
    text-align: center;">
    <div class="">
      <p>Kundennummer: {{ id }}</p>
    </div>
    <div class="">
      <p>Email: {{ email }}</p>
    </div>
    <div class="">
      <p>Guthaben: {{ creditedEuros }}€</p>
    </div>
    <div class="p-field p-grid">
      <label for="topup" class="p-col-fixed" style="width:100px">Betrag</label>
      <div class="p-col">
        <InputText id="topup" v-model="this.topupamount" type="text" />
        <Button
          icon="pi pi-check"
          class="p-button-rounded p-ml-2"
          @click="topUpAccount()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Account",
  data() {
    return {
      creditedEuros: 0,
      email: "",
      id: 0,
      topupamount: "",
    };
  },
  mounted() {
    this.fetchAccountInfo();
  },
  methods: {
    async fetchAccountInfo() {
      const res = await axios({
        method: "get",
        url: "http://localhost:8080/accountmgr/myaccount",
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch(error => {
        return { error: error };
      });

      this.email = res.data.email;
      this.creditedEuros = res.data.creditedEuros;
      this.id = res.data.id;
    },
    async topUpAccount() {
      await axios({
        method: "get",
        url:
          "http://localhost:8080/accountmgr/myaccount/topup/" +
          this.topupamount,
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch(error => {
        return { error: error };
      });

      this.fetchAccountInfo();
    }
  }
});
</script>
