<template>
    <div>
        <div v-if="games.length > 0" class="all" v-for="(item, key) in games" :key="key">
            <div class="gameCard">
                <h1 class="region"> {{ item.region }}</h1>
                <div class="game">
                    <h1 class="team">{{ item.team1 }}</h1>
                    <img :src="item.iconTeam1" alt="">
    
                    <h1>VS</h1>
    
                    <img :src="item.iconTeam2" alt="">
                    <h1 class="team">{{ item.team2 }}</h1>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="gameCard">
                <h1 class="region"> Nenhum jogo acontecendo</h1>
            
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" >

const games = [
{
    "region": "CBLOL",
    "team1": "LLL",
    "team2": "PNG",
    "iconTeam1": "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/ba/LOUDlogo_std.png",
    "iconTeam2": "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a1/Painlogo_std.png"
  },
  {
    "region": "CBLOL",
    "team1": "LLL",
    "team2": "PNG",
    "iconTeam1": "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/ba/LOUDlogo_std.png",
    "iconTeam2": "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a1/Painlogo_std.png"
  },{
    "region": "CBLOL",
    "team1": "LLL",
    "team2": "PNG",
    "iconTeam1": "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/ba/LOUDlogo_std.png",
    "iconTeam2": "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a1/Painlogo_std.png"
  },
  {
    "region": "CBLOL",
    "team1": "LLL",
    "team2": "PNG",
    "iconTeam1": "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/ba/LOUDlogo_std.png",
    "iconTeam2": "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a1/Painlogo_std.png"
  },
  {
    "region": "LEC",
    "team1": "G2",
    "team2": "FNC",
    "iconTeam1": "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/ba/LOUDlogo_std.png",
    "iconTeam2": "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a1/Painlogo_std.png"
  }
    ]

    //

</script>

<style lang="scss" scoped>

 .all:first-child .gameCard{
    border-radius: 3px 3px 0px 0px;
    /* border-bottom: 1rem solid red; */
 }

 .all:last-child .gameCard{
    border-radius: 0px 0px 3px 3px;
    /* border-bottom: 1rem solid red; */
 }
.gameCard{
    display: flex;
    width: 20rem;
    height: 4.625rem;
    padding: 1rem;
    background-color: #302F2F;
    align-items: center;
    gap: 2.2rem;
    /* margin-bottom: 1rem; */
    /* border-radius: 0.5rem; */
    border-bottom: 1.11973px solid #6F6F6F;
     font-weight: 600;

    img {
        width: 52px;
        height: 32px;
    }

    .region{
        font-size: 12px;
        font-weight: 600;
        width:40.5px;
    }

    .game{
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .team{
            font-size: 12px;
             font-weight: 600;
             width:21px
        }

        h1{
            font-size: 12px;
             font-weight: 600;
        }
    }
}

</style>
