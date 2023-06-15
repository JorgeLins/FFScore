<template>
  <div>
    <div class="navbar d-flex flex-row  align-center w-100 " >
      <nuxt-img src="FFScorePNG.PNG" alt="logo" sizes="sm:100vw md:50vw lg:175px"/>
      <div class="ml-5 mt-1 navigation-tabs">
        <ul class="d-flex">
          <li class="item">
            <NuxtLink to="/">Página Principal</NuxtLink>
          </li>
          <!-- <li class="item">
            <NuxtLink to="/dashboard">Tabela</NuxtLink>
          </li> -->
          <li class="item">
            <NuxtLink to="/login">Login</NuxtLink>
          </li>

        </ul>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped lang="scss">
h1 {
  color: white;
  font-size: 64px;
  margin: 20px 0;
}

.navbar {

  background: #19191C;
  height: 90px;
}

.item {
  a:link {
    text-decoration: none;
    color: white
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: #9d9b9b;
  }

  color: #920F0F;
  font-size: 20px

}

ul {
  gap: 10px;
}


</style>