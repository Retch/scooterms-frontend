<template>
  <div id="map">
    <!--In the following div the HERE Map will render-->
    <div id="mapContainer" style="height: 93vh" ref="hereMap"></div>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HereMap",
  props: {
    center: Object,
    // center object { lat: 40.730610, lng: -73.935242 }
  },
  data() {
    return {
      platform: null,
      apikey: "UCQF_BUyy0csLSNw3Tp6qr08CVT_YnS0xtObBme-_js", // You can get the API KEY from developer.here.com
      scooterlist: [],
    };
  },
  async mounted() {
    // Initialize the platform object:
    const platform = new window.H.service.Platform({
      apikey: this.apikey,
    });
    this.platform = platform;
    this.initializeHereMap();

    console.log("Token: " + this.$jwt);
    const res = await axios({
      method: "post",
      url: "http://localhost:8080/scooters",
      Authorization: "Bearer " + this.$jwt,
    }).catch((error) => {
      return { error: error };
    });
    console.log(res);
  },
  methods: {
    initializeHereMap() {
      // rendering map

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

      addEventListener("resize", () => map.getViewPort().resize());

      // add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // add UI
      H.ui.UI.createDefault(map, maptypes);
      // End rendering the initial map
    },
  },
};
</script>

<style scoped>
#map {
  zwidth: 60vw;
  zmin-width: 360px;
  text-align: center;
  text-indent: -9999px;
  background-color: #ccc;
}
</style>
