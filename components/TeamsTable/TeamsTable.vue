<template>
    <div>
        <div>
            <h3>{{ TituloTabela }}</h3>
        </div>

        <v-table v-if="isActiveGame" height="680" class="table">
            <tbody>
            <tr
                    v-for="(item,index) in dataTable.data"
                    :key="index">
                <td class="mx-0 w-0  ">
                    <v-btn variant="text"> Ver Detalhes</v-btn>
                </td>
                <td class="text-center">
                    <p> {{ item.match.teams[0].name }}</p>
                    <img :src="item.match.teams[0].image" alt="team-logo"/>
                    <p :class="item.match.teams[0].result  && item.match.teams[0].result.outcome==='win'? 'text-light-green':'text-red'">
                        {{ item.match.teams[0].result && item.match.teams[0].result.outcome }} </p>
                </td>

                <td class="text-center"> {{}}vs</td>

                <td class="text-center">
                    <p>
                        {{ item.match.teams[1].name }}
                    </p>
                    <img :src="item.match.teams[1].image" alt="team-logo"/>
                    <p :class=" item.match.teams[1].result  && item.match.teams[1].result.outcome==='win'? 'text-light-green':'text-red' ">
                        {{ item.match.teams[1].result && item.match.teams[1].result.outcome }} </p>

                </td>

            </tr>
            </tbody>
        </v-table>

        <v-table v-else height="680" class="table">
            <tbody v-if="dataTable.data.length">
            <tr
                    v-for="(item,index) in dataTable.data"
                    :key="index">
                <td class="mx-0 w-0  ">
                    <v-btn variant="text"> Ver Detalhes</v-btn>
                </td>
                <td class="text-center">
                    <p> {{ item.match.teams[0].name }}</p>
                    <img :src="item.match.teams[0].image" alt="team-logo"/>

                </td>

                <td class="text-center"> {{}}vs</td>

                <td class="text-center">
                    <p>
                        {{ item.match.teams[1].name }}
                    </p>
                    <img :src="item.match.teams[1].image" alt="team-logo"/>
                </td>

            </tr>
            </tbody>
            <div class="d-flex align-center justify-center h-100" v-else>
                <h2> Não há partidas disponíveis</h2>
            </div>
        </v-table>
    </div>
</template>

<script setup lang="ts">


type leagueData = {

    "startTime": String,
    "state": String,
    "type": String
    "blockName": String,
    "league": {
        "name": String
        "slug": "lcs"
    },
    "match": {
        "id": String,
        "flags": [
            "isSpoiler"
        ],
        "teams": [
            {
                "name": String,
                "code": String,
                "image": String,
                "result": {
                    "outcome": null,
                    "gameWins": 0
                },
                "record": {
                    "wins": 1,
                    "losses": 0
                }
            },
            {
                "name": String,
                "code": String,
                "image": String,
                "result": {
                    "outcome": null,
                    "gameWins": 0
                },
                "record": {
                    "wins": 1,
                    "losses": 0
                }
            }
        ],
        "strategy": {
            "type": String,
            "count": 5
        }
    }
}


const props = defineProps<{
    isActiveGame: boolean,
    dataTable: {},
    TituloTabela: string,
}>()
const {TituloTabela} = toRefs(props)
console.log('props', props)
const {data: allDataCompleted} = await useFetch("http://localhost:8000/api/?teamName&league=%5B98767991299243165,98767991332355509,98767991310872058,98767991310872058,98767991302996019,98767991314006698%5D&status")
const {data: allDataUnCompleted} = await useFetch("http://localhost:8000/api/?teamName&league=%5B98767991299243165,98767991332355509,98767991310872058,98767991310872058,98767991302996019,98767991314006698%5D&status=unstarted")


</script>


<style scoped>

td {
    background-color: #302F2F;
    color: white;
}


.table {
    overflow: auto;
    background-color: #302F2F;

}

:deep( .v-table__wrapper::-webkit-scrollbar) {
    width: 5px;
    height: 15px;
    background-color: #aaa;
}


:deep(.v-table__wrapper::-webkit-scrollbar-thumb) {
    background: #3b3b3b;
    height: 15px;
}

img {
    width: 40px;
    height: 40px;
}


</style>