<template>
    <div class="mainpage">
        <nuxt-img src="FFScorePNG.PNG" alt="logo" sizes="sm:100vw md:50vw lg:400px"/>

        <h1>Jogos ao vivo</h1>
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
        <!-- <TeamsTable v-if="completedTable.value" TituloTabela="Partidas Completas" :is-active-game="true" /> -->
    </div>
</template>

<script setup lang="ts">
    import TournamentsCard from "~~/components/TournamentsCard/TournamentsCard.vue";
    import TeamsTable from "~/components/TeamsTable/TeamsTable.vue";
    
    

</script>

<style scoped>

    .mainpage{
        padding: 2rem;
        display: flex;
        gap: 8rem;
        justify-content: flex-end;
    }
</style>