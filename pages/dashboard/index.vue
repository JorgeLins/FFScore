!
<template>
  <div class="px-4 d-flex flex-column py-4">
    <div class="filters d-flex justify-center align-center">
      <v-responsive max-width="400">
        <v-select
            hide-details
            chips
            item-title="name"
            item-value="league"
            label="Ligas"
            :items="leagueItems"
            v-model="league"
            variant="solo"
            multiple
        ></v-select>
      </v-responsive>
      <v-responsive max-width="400">

        <v-text-field
            hide-details
            variant="solo"
            v-model="teamName"
            label="Time"
        ></v-text-field>
      </v-responsive>

      <v-btn color="red" @click="filtrar()" rounded="3">Filtrar</v-btn>
    </div>


    <div class="mx-3" :class="mobile?'flex-column':'flex-row'">
      <v-progress-circular
          class="mt-2"
          v-if="loading"
          indeterminate
          color="red"
      ></v-progress-circular>
      <div v-else class="dashboards d-flex justify-space-around " :class="mobile?'flex-column':'flex-row'">
        <TeamsTable v-if="completedTable.value" TituloTabela="Partidas Completas" :is-active-game="true"
                    :dataTable="completedTable.value"/>
        <TeamsTable v-if="unCompletedTable.value" TituloTabela="Partidas Futuras" :is-active-game="false"
                    :dataTable="unCompletedTable.value"/>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import TeamsTable from "~/components/TeamsTable/TeamsTable.vue";
import {useDisplay} from "vuetify";
import {Ref} from "vue";

const route = useRoute()
const router = useRouter()
const allTableCompleted = ref({})
const allTableUnCompletede = ref({})
let completedTable = ref({})
let unCompletedTable = ref({})
const {mobile} = useDisplay()

interface QueryParams {
  teamName: string
  league: string[]
  status: string
}

const queryParams = route.query as unknown as QueryParams

const teamName: Ref<string> = ref(queryParams.teamName || '')
const league: Ref<string[]> = ref(queryParams.league || [])
const status: Ref<string> = ref(queryParams.status || '')
const loading = ref(true)
const allParams = computed(() => {
  return {
    league: league.value,
    status: status.value,
    teamName: teamName.value
  }
})

async function filtrar() {
  const leagueString = league.value.join(',');
  const url = "http://localhost:8000/api/"
  const {data: completedeQuery} = await useFetch(url, {
    query: {teamName: teamName.value, league: leagueString, status: "completed"}

  });
  console.log(completedeQuery.value)
  if (completedeQuery.value) {
    completedTable.value = completedeQuery

  } else {
    completedTable.value = allTableCompleted
  }
  const {data: unCompletedeQuery} = await useFetch(url, {
    query: {teamName: teamName.value, league: leagueString, status: "unstarted"}

  });
  console.log(unCompletedeQuery.value)

  if (unCompletedTable.value) {
    completedTable.value = completedeQuery

  } else {
    completedTable.value = allTableCompleted
  }
  unCompletedTable.value = unCompletedeQuery
  await router.push({
    path: '/dashboard',
    query: allParams.value
  })

}

watch(allParams, async () => {

  // const leagueString = league.value.join(',');
  // const url = "http://localhost:8000/api/"
  // console.log(url)
  //
  // const {data: teste} = await useFetch(url, {
  //     query: {teamName: teamName.value, league: leagueString, status: "completed"}
  //
  // });
  // console.log(teste);

})


const leagueItems = [
  {
    league: '98767991299243165',
    name: "LCS"
  }, {
    league: '98767991332355509',
    name: "CBLOL"
  }, {
    league: '98767991310872058',
    name: "LCK"
  }, {
    league: '98767991302996019',
    name: "LEC"
  }, {
    league: '98767991314006698',
    name: "LPL"
  },
]
onMounted(async () => {
  const {data: allDataCompleted} = await useFetch("http://localhost:8000/api/?teamName&league=%5B98767991299243165,98767991332355509,98767991310872058,98767991310872058,98767991302996019,98767991314006698%5D&status")
  const {data: allDataUnCompleted} = await useFetch("http://localhost:8000/api/?teamName&league=%5B98767991299243165,98767991332355509,98767991310872058,98767991310872058,98767991302996019,98767991314006698%5D&status=unstarted")
  completedTable.value = allDataCompleted
  allTableCompleted.value = allDataCompleted
  console.log("table", completedTable.value)
  console.log("table", allTableCompleted.value)

  allTableUnCompletede.value = allDataUnCompleted
  unCompletedTable.value = allDataUnCompleted
  console.log("table 1", allTableUnCompletede.value)
  console.log("table 2", unCompletedTable.value)
  if (!!allTableUnCompletede.value && !!unCompletedTable.value) {
    loading.value = false
  }
})


</script>

<style scoped>
.filters {
  gap: 10px
}
</style>

