<template>
  <div>
    <input
      type="text"
      v-model="search"
      @keyup.enter="search"
      placeholder="Search for country"
    />

    <div v-for="(country, index) in filtercountry" :key="index">
      {{ country.name }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      countries: [],
      query: "",
      search: "",
      region: "",
    };
  },

  created() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        console.log(res);
        this.countries = res.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },

  computed: {
    filtercountry() {
      return this.countries.filter((country) => {
        if (this.region === "" || this.region === "All Regions") {
          return country.name.toLowerCase().match(this.search.toLowerCase);
        } else if (this.search !== "") {
          return country.name.toLowerCase().match(this.search.toLowerCase);
        } else {
          return country.region.match(this.region);
        }
      });
    },
  },
};
</script>

