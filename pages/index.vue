<template>
  <div class="mainpage">
    <div class="d-flex align-center flex-column justify-start">
      <nuxt-img src="FFScorePNG.PNG" alt="logo" sizes="sm:100vw md:50vw lg:40vw"/>
  
      <div class="d-flex justify-sm-space-around w-100">
        <NuxtLink to="/login">
          Login
        </NuxtLink>
        <NuxtLink to="/register">
          Registrar
        </NuxtLink>
  
      </div>

    </div>
    <div class="tables">

      <div>
        <h1>Jogos ao vivo</h1>
        <div class="liveTable">
          <LiveGamesCard upcoming="false"></LiveGamesCard>
        </div>
        <div>
          <h1>Jogos futuros</h1>
          <div class="liveTable">
            <LiveGamesCard upcoming="true"></LiveGamesCard>
          </div>

      </div>

      </div>
          <div class="tournaments">
              <div>
                  <h1>Campeonatos ativos</h1>
                  <TournamentsCard :upcoming="false"/>
              </div>
              <div>
                  <h1>Campeonatos futuros</h1>
                  <TournamentsCard :upcoming="true"/>
                  <TournamentsCard :upcoming="true"/>
                  <!-- cards de camp futuros -->
              </div>
  
          </div>
    </div>
  </div>
  <!--    <LoginForm/>-->

</template>


<script setup lang="ts">
    import TournamentsCard from "~~/components/TournamentsCard/TournamentsCard.vue";
    import LiveGamesCard from "~~/components/LiveGamesCard/LiveGamesCard.vue";

</script>

<style scoped lang="scss">
a {
  font-size: 25px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.99);
  &:hover{
    color:#FFFFFF63;
  }

}

h1{
  font-size: 22px;
}
.tables{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 3rem;
}

.liveTable{
  border-radius: 6px 6px 6px 6px;
  border: 3px solid #EDEDED;
  margin-bottom: 1rem;
}

.mainpage{
        padding: 2rem;
        display: flex;
        gap: 8rem;
        justify-content: flex-end;
    }
</style>