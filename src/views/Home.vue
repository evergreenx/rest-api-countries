<template>
  <div class="home">

    <HomeCountry />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCountry from "@/components/HomeCountry.vue";

export default {
  name: "Home",
  components: {
  HomeCountry
  }
};
</script>
