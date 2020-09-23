<template>
  <div class="container mt-5 py-5">
    <div class="row">
      <div class="col-lg-8">
        <input
          type="text"
          v-model="search"
          class="form-control col-lg-6 mb-4"
          placeholder="Search for country"
        />
      </div>

      <div class="col-lg-4">
        <div class="btn-group dropdown">
          <button class="btn btn-whitex">Filter by Region</button>
          <button
            id="my-dropdown"
            class="btn btn-whitex dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle dropdown</span>
          </button>
          <div class="dropdown-menu btn-whitex" aria-labelledby="my-dropdown">
            <form>
              <ul>
                <li>
                  <label for="africa"
                    ><input
                      type="radio"
                      name="africa"
                      value="Africa"
                      v-model="region"
                    />Africa
                  </label>
                </li>

                <li>
                  <label for="america"
                    ><input
                      type="radio"
                      name="america"
                      value="America"
                      v-model="region"
                    />America
                  </label>
                </li>
                <li>
                  <label for="asia"
                    ><input
                      type="radio"
                      name="asia"
                      value="Asia"
                      v-model="region"
                    />Asia
                  </label>
                </li>

                <li>
                  <label for="europe"
                    ><input
                      type="radio"
                      name="europe"
                      value="Europe"
                      v-model="region"
                    />Europe
                  </label>
                </li>

                <li>
                  <label for="oceania"
                    ><input
                      type="radio"
                      name="oceania"
                      value="Oceania"
                      v-model="region"
                    />Oceania
                  </label>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5 mb-5">
      <div
        class="col-lg-3 mb-5"
        v-for="(country, index) in filteredList"
        :key="index"
      >
        <div class="card">
          <img class="card-img-top" :src="country.flag" alt="image" />
          <div class="card-body">

            <router-link 
            :to="{name:'country-detail' , params:{country:country.name}}">

            <strong>
              <h5 class="card-title">{{ country.name }}</h5></strong
            >
            <p class="card-text">
              <strong>Population:</strong>
              {{ Number(country.population).toLocaleString() }}
              <!-- {{ num.toLocaleString() }} -->
            </p>
            <p class="card-text">
              <strong>Region:</strong>
              {{ country.region }}
            </p>

            <p class="card-text">
              <strong>Capital:</strong>
              {{ country.capital }}
            </p>

          </router-link>

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
      selectcat: "all",
    };
  },

  mounted() {
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
      return this.countries.filter((country) => {
        if (this.region === "") {
          return country.name.toLowerCase().match(this.search.toLowerCase());
        } else if (this.search !== "") {
          return country.name.toLowerCase().match(this.search.toLowerCase());
        } else {
          return country.region.match(this.region);
        }
      });
    },
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
@import "../assets/bootstrap.min.css";

a{
  color:#000;
}

a:hover{
  color:#000;
  text-decoration: none;
}
.card {
  outline: none;
  border: none !important;
  /* background-color:green !important */
}

body {
  background-color: hsl(0, 0%, 98%);
  font-family: "Nunito", sans-serif;
}

.card-img-topx {
  width: 100%;
}

form {
  border: 1px solid rgb(235, 235, 235);
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  float: left;
  width: 200px;
  padding: 0;
  margin: 0;
}

ul {
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  height: 32px;
  border-bottom: 1px solid hsl(0, 0%, 98%);
  transition: background-color 0.2s ease;
  cursor: pointer;
}
li:hover {
  background-color: hsl(0, 0%, 98%);
}
li:active {
  background-color: hsl(0, 0%, 52%);
}

label {
  cursor: pointer;
  float: left;
  width: 176px;
  padding: 0 0 0 24px;
}

input {
  float: left;
  margin: 8px 8px 0 0;
}

.btn-whitex {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
</style>

<div class="form-group">
  <label for="my-select">Text</label>
  <select id="my-select" class="form-control" name="">
    <option>Text</option>
  </select>
</div>

<div class="dropdown-menu">
  <a class="dropdown-item active" href="#">Text</a>
</div>

<div class="btn-group dropdown">
  <button class="btn btn-primary">Text</button>
  <button id="my-dropdown" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle dropdown</span>
  </button>
  <div class="dropdown-menu" aria-labelledby="my-dropdown">
    <a class="dropdown-item active" href="#">Text</a>
  </div>
</div>
