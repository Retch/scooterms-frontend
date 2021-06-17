<template>
  <div class="p-d-block p-mx-auto p-m-0 p-mt-6">
    <div v-for="rental in rentals" :key="rental.id">
      <Card class="p-mb-2 p-mx-auto" style="width: 25rem">>
        <template #title> Fahrt #{{ rental.id }} </template>
        <template #content>
          Datum: {{ calcDate(rental.start_timestamp) }}<br />
          Dauer:
          {{ calcTime(rental.end_timestamp - rental.start_timestamp) }} Minuten
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import Card from "primevue/card";

export default defineComponent({
  name: "ScooterRentalEntity",
  components: {
    Card
  },
  data() {
    return {
      rentals: []
    };
  },
  mounted() {
    this.fetchAccountRentals();
  },
  methods: {
    async fetchAccountRentals() {
      const res = await axios({
        method: "get",
        url: "http://localhost:8080/accountmgr/myhistory",
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch(error => {
        return { error: error };
      });

      this.rentals = res.data;
    },
    calcTime(seconds) {
      let minutes = 0;
      while (seconds > 59) {
        minutes += 1;
        seconds -= 60;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    },
    calcDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return (
        date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
      );
    }
  }
});
</script>
