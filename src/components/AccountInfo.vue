<template>
  <div>
    <Toast class="Toast" @click="this.$toast.removeAllGroups()" />
    <Card class="p-shadow-2 p-mb-5 p-mt-2">
      <template #title> Kundennummer: {{ id }} </template>
      <template #content>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
          </span>
          <InputText v-model="this.email" placeholder="Email" disabled />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-money-bill"></i>
          </span>
          <InputText
            v-model="this.creditedEuros"
            placeholder="Email"
            disabled
          />
        </div>
      </template>
      <template #footer>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-euro"></i>
          </span>
          <InputText
            id="topup"
            v-model="this.topupamount"
            placeholder="Guthaben aufladen"
          />
          <Button icon="pi pi-check" @click="topUpAccount()" class="" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Card from "primevue/card";
import axios from "axios";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";

export default defineComponent({
  name: "Account",
  setup() {
    const toast = useToast();

    const showTopUpSuccess = () => {
      toast.add({
        severity: "success",
        summary: "Guthaben aufgeladen",
        life: 1500,
        closeable: false
      });
    };

    return {
      showTopUpSuccess
    };
  },
  components: {
    Card,
    Toast
  },
  data() {
    return {
      creditedEuros: 0,
      email: "",
      id: 0,
      topupamount: ""
    };
  },
  mounted() {
    this.fetchAccountInfo();
  },
  methods: {
    async fetchAccountInfo() {
      const res = await axios({
        method: "get",
        url: process.env.VUE_APP_API_ENDPOINT + "/accountmgr/myaccount",
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch(error => {
        return { error: error };
      });

      this.email = res.data.email;
      this.creditedEuros = res.data.creditedEuros.toString();
      this.creditedEuros = this.creditedEuros.replace(".", ",") + " €";
      this.id = res.data.id;
    },
    async topUpAccount() {
      if (this.topupamount != 0) {
        const res = await axios({
          method: "get",
          url:
            process.env.VUE_APP_API_ENDPOINT +
            "/accountmgr/myaccount/topup/" +
            this.topupamount,
          headers: { Authorization: "Bearer " + this.$store.state.jwt }
        }).catch(error => {
          return { error: error };
        });
        this.topupamount = "";
        if (res.status === 200) {
          this.showTopUpSuccess();
        }
      }
      this.fetchAccountInfo();
    }
  }
});
</script>

<style>
.Toast {
  max-width: 90vw;
}
</style>
