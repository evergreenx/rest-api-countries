
<template>
  <div class="container mt-5 py-5">
 <div class="row mt-5 mb-5">
      <div
        class="col-lg-3 mb-5"
        v-for="country in countryInfo "
        :key="country.id"
      >
        <div class="card">
          <img class="card-img-top" :src="country.flag" alt="image" />
          <div class="card-body">

          

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

          <!-- </router-link> -->

          </div>

        </div>
      </div>
    </div>
   
   
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Countries',
 data(){
   return{
     countryInfo: null,
   }

 } ,
   mounted() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${this.$route.params.country}?fullText=true`)
      
      
      .then((res) => {
        this.countryInfo = res.data;
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  created() {

  },
 
  props: {
   
  },
  methods: {
   
  },
}
</script>

<style lang="scss" scoped>

</style>

