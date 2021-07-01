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
      v-if="
        showscooterinfo === true &&
          starttimestamp == 0 &&
          selectedscooter.status == 'ready'
      "
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
    <Card
      v-if="
        showscooterinfo === true &&
          starttimestamp == 0 &&
          selectedscooter.status == 'lowonbattery'
      "
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
          @click="chargeScooter()"
          label="Aufladen"
          class="p-button-rounded"
        />
      </template>
    </Card>
    <Card
      v-if="
        showscooterinfo === true &&
          starttimestamp == 0 &&
          selectedscooter.status == 'damaged'
      "
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
          @click="repairScooter()"
          label="Reparieren"
          class="p-button-rounded"
        />
      </template>
    </Card>
    <Card
      v-if="showscooterhotspotinfo === true && starttimestamp == 0"
      :key="componentKey"
      style="width: 25rem; margin-bottom: 2em; position:absolute; bottom:0; left:0;"
    >
      <template #title>
        <Button
          @click="closeScooterHotspotInformation()"
          icon="pi pi-times"
          class="p-button-rounded p-button-danger p-button-outlined"
        />
        Scooterhotspot {{ selectedscooterhotspot.name }}
      </template>
    </Card>
    <Card
      v-if="showmaintenancedepartmentinfo === true && starttimestamp == 0"
      :key="componentKey"
      style="width: 25rem; margin-bottom: 2em; position:absolute; bottom:0; left:0;"
    >
      <template #title>
        <Button
          @click="closeMaintenanceDepartmentInformation()"
          icon="pi pi-times"
          class="p-button-rounded p-button-danger p-button-outlined"
        />
        Maintenancedepartment {{ selectedmaintenancedepartment.name }}
      </template>
      <template #content>
        Reparaturkapazität:
        {{ selectedmaintenancedepartment.scootercapacity }}/{{
          selectedmaintenancedepartment.maxscootercapacity
        }}<br />
        <Button
          @click="releaseScooter()"
          label="Release"
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
        summary: "Scooter abgestellt",
        life: 1500,
        closeable: false
      });
    };
    const showChargeSuccess = eurocredits => {
      toast.add({
        severity: "success",
        summary: eurocredits + "€ Gutschrift für das Aufladen",
        life: 2500,
        closeable: false
      });
    };
    const showBringToRepairSuccess = () => {
      toast.add({
        severity: "success",
        summary: "Scooter wird nun repariert",
        life: 2000,
        closeable: false
      });
    };
    const showReleaseFromRepairSuccess = () => {
      toast.add({
        severity: "success",
        summary: "Reparatur abgeschlossen",
        life: 2000,
        closeable: false
      });
    };

    return {
      showParkSuccess,
      showChargeSuccess,
      showBringToRepairSuccess,
      showReleaseFromRepairSuccess
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
      scooterlist: null,
      scooterhotspotlist: null,
      maintenancedepartmentlist: null,
      selectedscooter: null,
      selectedscooterhotspot: null,
      selectedmaintenancedepartment: null,
      showscooterinfo: false,
      showscooterhotspotinfo: false,
      showmaintenancedepartmentinfo: false,
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
      }).catch(error => {
        return { error: error };
      });
      if (res.status === 200) {
        this.scooterlist = res.data;
      }
    },
    async returnScooters() {
      const res = await axios({
        method: "get",
        url: "http://localhost:8080/scooters",
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch(error => {
        return { error: error };
      });

      return res.data;
    },
    async fetchScooterHotspots() {
      const res = await axios({
        method: "get",
        url: "http://localhost:8080/scooterhotspots",
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch(error => {
        return { error: error };
      });
      if (res.status === 200) {
        this.scooterhotspotlist = res.data;
      }
    },
    async fetchMaintenanceDepartments() {
      const res = await axios({
        method: "get",
        url: "http://localhost:8080/maintenancedepartments",
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch(error => {
        return { error: error };
      });
      if (res.status === 200) {
        this.maintenancedepartmentlist = res.data;
      }
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
    showScooterInformation(s) {
      this.showscooterinfo = true;
      this.selectedscooter = s;
      this.closeScooterHotspotInformation();
      this.closeMaintenanceDepartmentInformation();
      this.forceRerenderInfo();
    },
    closeScooterInformation() {
      this.showscooterinfo = false;
      this.selectedscooter = null;
      this.forceRerenderInfo();
    },
    showScooterHotspotInformation(h) {
      this.showscooterhotspotinfo = true;
      this.selectedscooterhotspot = h;
      this.closeScooterInformation();
      this.closeMaintenanceDepartmentInformation();
      this.forceRerenderInfo();
    },
    closeScooterHotspotInformation() {
      this.showscooterhotspotinfo = false;
      this.selectedscooterhotspot = null;
      this.forceRerenderInfo();
    },
    showMaintenanceDepartmentInformation(md) {
      this.showmaintenancedepartmentinfo = true;
      this.selectedmaintenancedepartment = md;
      this.closeScooterInformation();
      this.closeScooterHotspotInformation();
      this.forceRerenderInfo();
    },
    closeMaintenanceDepartmentInformation() {
      this.showmaintenancedepartmentinfo = false;
      this.selectedmaintenancedepartment = null;
      this.forceRerenderInfo();
    },
    async driveScooter() {
      const scooterID = this.selectedscooter.id;
      const api = "http://localhost:8080/scooters/rent/" + scooterID;
      const res = await axios({
        method: "get",
        url: api,
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch(error => {
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
      }).catch(error => {
        return { error: error };
      });
      this.starttimestamp = 0;
      this.rentaltime = 0;
      this.closeScooterInformation();
      this.showParkSuccess();
      await new Promise(r => setTimeout(r, 2000));
      this.forceReloadScooterMap();
    },
    async chargeScooter() {
      const scooterID = this.selectedscooter.id;
      const api = "http://localhost:8080/scooters/charge/" + scooterID;
      const res = await axios({
        method: "get",
        url: api,
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch(error => {
        return { error: error };
      });
      if (res.status === 200) {
        this.showChargeSuccess(res.data);
        this.closeScooterInformation();
      }
      await new Promise(r => setTimeout(r, 1000));
      this.forceReloadScooterMap();
    },
    async repairScooter() {
      const scooterID = this.selectedscooter.id;
      const api = "http://localhost:8080/scooters/repair/" + scooterID;
      const res = await axios({
        method: "get",
        url: api,
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch(error => {
        return { error: error };
      });
      if (res.status === 200) {
        this.showBringToRepairSuccess();
        this.closeScooterInformation();
      }
      await new Promise(r => setTimeout(r, 500));
      this.forceReloadScooterMap();
    },
    async releaseScooter() {
      const api =
        "http://localhost:8080/maintenancedepartments/releasescooter/" +
        this.selectedmaintenancedepartment.id;
      const res = await axios({
        method: "get",
        url: api,
        headers: { Authorization: "Bearer " + this.$store.state.jwt }
      }).catch(error => {
        return { error: error };
      });
      if (res.status === 200) {
        this.showReleaseFromRepairSuccess();
        this.closeMaintenanceDepartmentInformation();
      }
      await new Promise(r => setTimeout(r, 500));
      this.forceReloadScooterMap();
    },
    forceRerenderInfo() {
      this.componentKey += 1;
    },
    async initializeHereMap() {
      // rendering map

      await this.fetchScooters();
      await this.fetchScooterHotspots();
      await this.fetchMaintenanceDepartments();

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
      const ScooterHotspotIcon = new H.map.Icon(
        "https://i.ibb.co/dG1KBVR/parking.png",
        { size: { w: 28, h: 28 } }
      );
      const MaintenanceDepartmentIcon = new H.map.Icon(
        "https://i.ibb.co/KGTNY1D/repair.png",
        { size: { w: 28, h: 28 } }
      );

      const scootermarkers = [];
      const scooterhotspotmarkers = [];
      const maintenancedepartmentmarkers = [];

      const scooterParse = (value, index, array) => {
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
        });
        scootermarkers.push(marker);
      };

      const scooterHotspotParse = (value, index, array) => {
        const marker = new H.map.Marker(
          {
            lat: value.ndegree,
            lng: value.edegree
          },
          { icon: ScooterHotspotIcon }
        );

        marker.addEventListener("tap", () => {
          this.showScooterHotspotInformation(value);
        });
        scooterhotspotmarkers.push(marker);
      };

      const MaintenanceDepartmentParse = (value, index, array) => {
        const marker = new H.map.Marker(
          {
            lat: value.ndegree,
            lng: value.edegree
          },
          { icon: MaintenanceDepartmentIcon }
        );

        marker.addEventListener("tap", () => {
          this.showMaintenanceDepartmentInformation(value);
        });
        maintenancedepartmentmarkers.push(marker);
      };

      if (this.scooterlist) {
        this.scooterlist.forEach(scooterParse);
      }
      if (this.scooterhotspotlist) {
        this.scooterhotspotlist.forEach(scooterHotspotParse);
      }
      if (this.maintenancedepartmentlist) {
        this.maintenancedepartmentlist.forEach(MaintenanceDepartmentParse);
      }

      const placemarkers = (value, index, array) => {
        map.addObject(value);
      };
      scootermarkers.forEach(placemarkers);
      scooterhotspotmarkers.forEach(placemarkers);
      maintenancedepartmentmarkers.forEach(placemarkers);

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
