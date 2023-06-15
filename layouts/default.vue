<template>
  <v-app>
    <navbar/>
    <v-main>

      <slot/>
    </v-main>
  </v-app>
</template>


<script>
import Navbar from "../components/Navbar/navbar";

export default {
  name: "default.vue",
  components: {Navbar},
};
</script>

<style scoped>
#mainLayout {

}

</style>
