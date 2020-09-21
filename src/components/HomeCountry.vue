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

    <div class="row mt-5 mb-5">
      <div class="col-lg-3 mb-5" v-for="(country, index) in filteredList" :key="index">
        <div class="card">
          <img
            class="card-img-top"
            :src="country.flag"
            alt="image"
          />
          <div class="card-body">
            <h5 class="card-title">{{ country.name }}</h5>
            <p class="card-text">
              <strong>Population:</strong>{{ Number(country.population).toLocaleString() }}
              <!-- {{ num.toLocaleString() }} -->
            </p>
            <p class="card-text"><strong>Region:</strong>
            {{ country.region }}
            </p>

            <p class="card-text"><strong>Capital:</strong>
            {{ country.capital }}
            
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// import image from '../assets/logo.png'
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
        this.countries = res.data;
        console.log(res);

      })
      .catch((e) => {
        console.log(e);
      });
  },

   computed: {
    filteredList() {
      return this.countries.filter(country => {
        return country.name.toLowerCase().includes(this.search.toLowerCase());
      });
    } }

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
@import "../assets/bootstrap.min.css";

.card {
  outline: none;
  border: none !important;
  /* background-color:green !important */
}

body{
  background-color:hsl(0, 0%, 98%);
  font-family: 'Nunito', sans-serif;

}

img{
  height:50%;
}
</style>

