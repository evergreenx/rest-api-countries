<template>
  <div class="container mt-5 py-5">

    <div class="back-btn">


<button class="btn shadow btnx" @click='$router.go(-1)'>
 <i class="fas fa-long-arrow-alt-left"> Back</i></button>


    </div>
    <div class="loaderFlex d-flex mt-5">
      <div v-if="pending" class="loader"></div>
    </div>

    <div class="row mt-5 mb-5" v-for="country in countryInfo" :key="country.id">
      <div class="col-lg-5 mb-4">
        <img :src="country.flag" alt="image" class="img-fluid" />
      </div>

      <div class="col-lg-3 mb-4">
        <strong>
          <h3 class="mt-2">{{ country.name }}</h3></strong
        >

        <p>
          <strong> Native Name : </strong>

          {{ country.nativeName }}
        </p>

        <p>
          <strong>
            Popuation :
          </strong>
          {{ country.population }}
        </p>

        <p>
          <strong>
            Region :
          </strong>
          {{ country.region }}
        </p>
        <p>
          <strong>
            Sub Region :
          </strong>
          {{ country.subregion }}
        </p>

        <p>
          <strong>
            Capital :
          </strong>
          {{ country.capital }}
        </p>
      </div>

      <div class="col-lg-3 mb-4 mt-5">
        <p>
          <strong>
            Top Level Domain :
          </strong>
          {{ country.topLevelDomain['0'] }}
        </p>

        <p>
          <strong>
            Currencies :
          </strong>
          {{ country.currencies['0'].name }}
        </p>

        <p>
          <strong>
            Language :
          </strong>
          {{ country.languages['0'].name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Countries",
  data() {
    return {
      countryInfo: null,
      pending: false,
    };
  },
  mounted() {
    this.pending = true;
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${this.$route.params.country}?fullText=true`
      )

      .then((res) => {
        this.countryInfo = res.data;
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        this.pending = false;
      });
  },
  created() {},

  props: {},
  methods: {},
};
</script>

<style>
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #2b3845;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  transition: 1s ease;
}
.borders .loader {
  width: 60px;
  height: 60px;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loaderFlex {
  display: flex;
  justify-content: center;
}
</style>
