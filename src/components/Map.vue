<template>
  <div id="map">
    <Toast />
    <!--In the following div the HERE Map will render-->
    <div
      id="mapContainer"
      style="height: 93vh"
      ref="hereMap"
      :key="scooterlist"
    ></div>
    <Card
      v-if="showscooterinfo === true && starttimestamp == 0"
      :key="componentKey"
      style="width: 25rem; margin-bottom: 2em; position:absolute; bottom:0; left:0;"
    >
      <template #title>
        <Button
          @click="closeScooterInformation()"
          icon="pi pi-times"
          class="p-button-rounded p-button-danger p-button-outlined"
        />
        Scooter {{ selectedscooter.licenseplate }}
      </template>

      <template #content>
        Akku: {{ selectedscooter.battery }}%<br />
        <br />
        <Button
          @click="driveScooter()"
          label="Losfahren"
          class="p-button-rounded"
        />
      </template>
    </Card>
    <Card
      v-if="starttimestamp != 0"
      :key="rentaltime"
      style="width: 25rem; margin-bottom: 2em; position:absolute; bottom:0; left:0;"
    >
      <template #title>Scooter: {{ selectedscooter.licenseplate }}</template>

      <template #content>
        Laufzeit: {{ rentaltime }} {{ calcTime() }}<br />
        <br />
        <Button
          @click="parkScooter()"
          label="Parken"
          class="p-button-rounded"
        />
      </template>
    </Card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import Card from "primevue/card";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";

export default defineComponent({
  name: "HereMap",
  setup() {
    const toast = useToast();

    const showParkSuccess = () => {
      toast.add({
        severity: "success",
        summary: "Zugangsdaten akzeptiert",
        life: 1500
      });

      return showParkSuccess;
    };
  },
  components: {
    Card,
    Toast
  },
  props: {
    center: Object
    // center object { lat: 40.730610, lng: -73.935242 }
  },
  data() {
    return {
      componentKey: 0,
      platform: null,
      apikey: "UCQF_BUyy0csLSNw3Tp6qr08CVT_YnS0xtObBme-_js", // You can get the API KEY from developer.here.com
      scooterlist: [],
      selectedscooter: "",
      showscooterinfo: false,
      starttimestamp: 0,
      rentaltime: 0
    };
  },
  async mounted() {
    // Initialize the platform object:
    const platform = new window.H.service.Platform({
      apikey: this.apikey
    });
    this.platform = platform;

    this.initializeHereMap();
  },
  created() {
    this.calcTimeInterval = setInterval(this.calcTime, 500);
    this.reloadScooterMapInterval = setInterval(this.reloadScooterMap, 5000);
    this.timer = this.calcTimeInterval;
    this.timer = this.reloadScooterMapInterval;
  },
  unmounted() {
    this.timer = clearInterval(this.reloadScooterMapInterval);
    this.timer = clearInterval(this.calcTimeInterval);
  },
  beforeUnmount() {
    this.starttimestamp = 0;
    this.rentaltime = 0;
  },
  methods: {
    async fetchScooters() {
      const res = await axios({
        method: "get",
        url: "http://localhost:8080/scooters",
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch((error) => {
        return { error: error };
      });

      this.scooterlist = res.data;
    },
    async returnScooters() {
      const res = await axios({
        method: "get",
        url: "http://localhost:8080/scooters",
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch((error) => {
        return { error: error };
      });

      return res.data;
    },
    async reloadScooterMap() {
      //console.log("reload map");
      const list = await this.returnScooters();
      if (
        this.selectedscooter == "" &&
        JSON.stringify(this.scooterlist) != JSON.stringify(list)
      ) {
        await this.initializeHereMap();
      }
      //console.log(JSON.stringify(list));
      //console.log(JSON.stringify(this.scooterlist));
    },
    async forceReloadScooterMap() {
      await this.initializeHereMap();
    },
    calcTime() {
      if (this.starttimestamp != 0) {
        let seconds = Math.floor(Date.now() / 1000) - this.starttimestamp;
        let minutes = 0;
        while (seconds > 59) {
          minutes += 1;
          seconds -= 60;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        this.rentaltime = minutes + ":" + seconds;
      }
    },
    showScooterInformation(scooter) {
      this.showscooterinfo = true;
      this.selectedscooter = scooter;
      this.forceRerenderInfo();
    },
    closeScooterInformation() {
      this.showscooterinfo = false;
      this.selectedscooter = null;
      this.forceRerenderInfo();
    },
    async driveScooter() {
      const scooterID = this.selectedscooter.id;
      const api = "http://localhost:8080/scooters/rent/" + scooterID;
      const res = await axios({
        method: "get",
        url: api,
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
        //headers: { Authorization: "Bearer " + this.$store.state.jwt }
        //Authorization: "Bearer " + this.$store.state.jwt,
      }).catch((error) => {
        return { error: error };
      });

      //console.log(res.data);
      this.starttimestamp = res.data;
      this.forceRerenderInfo();
    },
    async parkScooter() {
      const lat = (Math.random() * (50.95 - 51.01) + 51.01).toFixed(6);
      const lng = (Math.random() * (11.0 - 11.06) + 11.06).toFixed(6);
      //console.log(lat);
      //console.log(lng);

      await axios({
        method: "post",
        url: "http://localhost:8080/scooters/park",
        headers: {
          Authorization: "Bearer " + this.$store.state.jwt,
          "content-type": "application/json"
        },
        data: {
          latitude: lat,
          longitude: lng
        }
      }).catch((error) => {
        return { error: error };
      });
      this.starttimestamp = 0;
      this.rentaltime = 0;
      this.closeScooterInformation();
      await new Promise(r => setTimeout(r, 2000));
      this.forceReloadScooterMap();
    },
    forceRerenderInfo() {
      this.componentKey += 1;
    },
    async initializeHereMap() {
      // rendering map

      await this.fetchScooters();

      const mapContainer = this.$refs.hereMap;
      const H = window.H;
      // Obtain the default map types from the platform object
      const maptypes = this.platform.createDefaultLayers();

      // Instantiate (and display) a map object:
      const map = new H.Map(mapContainer, maptypes.vector.normal.map, {
        zoom: 13,
        //center: this.center,
        center: { lat: 50.974321, lng: 11.0348092 },
        // center object { lat: 40.730610, lng: -73.935242 }
      });

      const greenScooter = new H.map.Icon(
        "https://i.ibb.co/sQfX4d5/green.png",
        { size: { w: 32, h: 32 } }
      );
      const redScooter = new H.map.Icon("https://i.ibb.co/pQtYWfB/red.png", {
        size: { w: 32, h: 32 }
      });
      const orangeScooter = new H.map.Icon(
        "https://i.ibb.co/crBCp22/Orange.png",
        { size: { w: 32, h: 32 } }
      );
      const scootermarkers = [];

      const scooterparse = (value, index, array) => {
        let image = "";
        switch (value.status) {
          case "damaged":
            image = orangeScooter;
            break;
          case "lowonbattery":
            image = redScooter;
            break;
          default:
            image = greenScooter;
        }

        const marker = new H.map.Marker(
          {
            lat: value.ndegree,
            lng: value.edegree
          },
          { icon: image }
        );

        marker.addEventListener("tap", () => {
          this.showScooterInformation(value);
          this.showParkSuccess();
        });
        scootermarkers.push(marker);
      };
      /*if (this.scooterlist == null) {
        console.log("scooterlist empty");
      } else {
        console.log("scooterlist NOT empty");
      }*/
      this.scooterlist.forEach(scooterparse);

      const placemarkers = (value, index, array) => {
        map.addObject(value);
      };
      scootermarkers.forEach(placemarkers);

      addEventListener("resize", () => map.getViewPort().resize());

      map.addEventListener("tap", () => {
        //console.log("map");
        //this.clickmap = true;
        //this.update(null);
      });

      // add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // add UI
      //H.ui.UI.createDefault(map, maptypes);
      // End rendering the initial map
    }
  }
});
</script>

<style scoped>
#map {
  zwidth: 60vw;
  zmin-width: 360px;
  text-align: center;
  gtext-indent: -9999px;
  background-color: #ccc;
}
</style>
