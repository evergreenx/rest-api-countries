<template>
  <div class="container">
    <input
      type="text"
      v-model="search"
    class="form-control col-lg-4"
      placeholder="Search for country"
    />
<select>


  <option> region</option>
</select>


<div class="row">


  <div class="col-lg-3">
<div class="card">
  <img class="card-img-top" src="" alt="">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
</div>

  </div>
</div>
    <div v-for="(country, index) in countries" :key="index">
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

  // computed: {
  //   filtercountry() {
  //     return this.countries.filter((country) => {
  //       if (this.region === "" || this.region === "All Regions") {
  //         return country.name.toLowerCase().match(this.search.toLowerCase);
  //       } else if (this.search !== "") {
  //         return country.name.toLowerCase().match(this.search.toLowerCase);
  //       } else {
  //         return country.region.match(this.region);
  //       }
  //     });
  //   },
  // },
};


</script>

<style>
@import '../assets/bootstrap.min.css';



</style>
<div class="form-group">
  <label for="my-select">Text</label>
  <select id="my-select" class="form-control" name="" multiple>
    <option>Text</option>
  </select>
</div>

<div class="card">
  <img class="card-img-top" src="" alt="">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
</div>