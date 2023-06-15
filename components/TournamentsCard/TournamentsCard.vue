<template>

<div v-if="upcoming" class="tournamentCard"  v-for="(item, key) in tournaments" :key="key">
        <img :src="item.image" alt="">
        <div class="texts">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <h1 class="region">{{ item.region }}</h1>
                <h1 class="date"> {{ item.date }}</h1>
            </div>
        </div>
    </div>

    <div v-else class="tournamentCard"  v-for="(item, keyUpcoming) in tournamentsLive" :key="keyUpcoming">
        <img :src="item.image" alt="">
        <div class="texts">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <h1 class="region">{{ item.region }}</h1>
                <h1 class="date"> {{ item.date }}</h1>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">




    const props = defineProps<{
        upcoming: boolean,
        // region: string,
        // date: string,
        // image: string,
    }>()

    const {upcoming} = toRefs(props)
    // const {region} = toRefs(props)
    // const {date} = toRefs(props)
    // const {image} = toRefs(props)


    const tournaments = [
        {
            title: "Cblol 2023 2 split",
            region: "BR",
            date: "10/06/2023",
            image: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/CBLOL_2021_Logo.png"
        },
        {
            title: "LEC 2023 Summer Season",
            region: "EMEA",
            date: "17/06/2023",
            image: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/30/LEC_2023.png"
        },
        {
            title: "LCK 2023 Summer Season",
            region: "KR",
            date: "07/06/2023",
            image: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/f8/LCK_2021_logo.png"
        }
    ]
    const tournamentsLive = [
        {
            title: "Aovivo Camp 2023",
            region: "Mundial",
            date: "Ao vivo 🔴",
            image: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/CBLOL_2021_Logo.png/revision/latest/scale-to-width-down/220?cb=20210117230150"
        },
        {
            title: "Cebolao 2023",
            region: "BR",
            date: "Em andamento",
            image: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b4/CBOL%C3%83O_Season_5_Logo.png"
        },
        {
            title: "LPL 2023 Summer Season",
            region: "CN",
            date: "Em andamento",
            image: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a1/LPL_2020.png"
        }
    ]

</script>

<style lang="scss" scoped>


.tournamentCard{
    display: flex;
    width: 20rem;
    height: 4.625rem;
    padding: 1rem;
    background-color: #302F2F;
    /* justify-content: space-between; */
    align-items: center;
    gap: 3rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    font-weight: 600;

    img {
        width: 32px;
        height: 32px;
    }

    .title{
        font-size: 16px;
    }
}

.texts {
    display: flex;
    flex-direction: column;
    width: 100%;

    h1{
        font-size: 11px;
         font-weight: 600;
    }
}

.info{
    display: flex;
    /* gap: 1rem; */
    justify-content: space-between;

    h1{
        padding: 0.25rem;
    background-color: #6F6F6F;
    border-radius: 0.2rem;
     font-weight: 600;
    }
}
</style>
