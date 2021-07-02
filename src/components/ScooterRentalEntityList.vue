<template>
  <Card
    v-for="rental in rentals"
    :key="rental.id"
    class="p-mb-4 p-ripple p-shadow-2"
    v-ripple
    >>
    <template #title> Fahrt #{{ rental.id }} </template>
    <template #content>
      Dauer:
      {{ calcTime(rental.end_timestamp - rental.start_timestamp) }} Minuten
    </template>
    <template #footer> Datum: {{ calcDate(rental.start_timestamp) }} </template>
  </Card>
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
        url: process.env.VUE_APP_API_ENDPOINT + "/accountmgr/myhistory",
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch(error => {
        return { error: error };
      });

      this.rentals = res.data.reverse();
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
