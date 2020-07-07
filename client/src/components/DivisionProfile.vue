<template>
    <section>
        <div v-if="loading">
          <h3>Loading...</h3>
        </div>

        <div v-if="error">
            <h1>{{error}}</h1>
            <router-link to="/" class="btn btn-outline-dark">Go Back</router-link>
        </div>

        <div v-if="profileData" class="container ">
            <h1>The Division 2</h1>
           <h3>{{profileData.platformInfo.platformSlug}}</h3>
           <h1 class="gamertag">
               {{profileData.platformInfo.platformUserId}}
           </h1>
          <div class="profile-grid">
               <!-- use gt andrey__litvinov -->
                  <li v-if="profileData.segments[0].stats.timePlayed" class="item1 "> {{profileData.segments[0].stats.timePlayed.displayName}}<br>{{profileData.segments[0].stats.timePlayed.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsPvP" class="item1 "> {{profileData.segments[0].stats.killsPvP.displayName}}<br>{{profileData.segments[0].stats.killsPvP.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsNpc" class="item1 "> {{profileData.segments[0].stats.killsNpc.displayName}}<br>{{profileData.segments[0].stats.killsNpc.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.highestPlayerLevel" class="item1 "> {{profileData.segments[0].stats.highestPlayerLevel.displayName}}<br>{{profileData.segments[0].stats.highestPlayerLevel.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsSkill" class="item1 "> {{profileData.segments[0].stats.killsSkill.displayName}}<br>{{profileData.segments[0].stats.killsSkill.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.headshots" class="item1 "> {{profileData.segments[0].stats.headshots.displayName}}<br>{{profileData.segments[0].stats.headshots.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.itemsLooted" class="item1 "> {{profileData.segments[0].stats.itemsLooted.displayName}}<br>{{profileData.segments[0].stats.itemsLooted.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.xPTotal" class="item1 "> {{profileData.segments[0].stats.xPTotal.displayName}}<br>{{profileData.segments[0].stats.xPTotal.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.xPClan" class="item1 "> {{profileData.segments[0].stats.xPClan.displayName}}<br>{{profileData.segments[0].stats.xPClan.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.specialization" class="item1 "> {{profileData.segments[0].stats.specialization.displayName}}<br>{{profileData.segments[0].stats.specialization.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsSpecializationSharpshooter" class="item1 "> {{profileData.segments[0].stats.killsSpecializationSharpshooter.displayName}}<br>{{profileData.segments[0].stats.killsSpecializationSharpshooter.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsSpecializationSurvivalist" class="item1 "> {{profileData.segments[0].stats.killsSpecializationSurvivalist.displayName}}<br>{{profileData.segments[0].stats.killsSpecializationSurvivalist.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsSpecializationDemolitionist" class="item1 "> {{profileData.segments[0].stats.killsSpecializationDemolitionist.displayName}}<br>{{profileData.segments[0].stats.killsSpecializationDemolitionist.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.eCreditBalance" class="item1 "> {{profileData.segments[0].stats.eCreditBalance.displayName}}<br>{{profileData.segments[0].stats.eCreditBalance.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.commendationCount" class="item1 "> {{profileData.segments[0].stats.commendationCount.displayName}}<br>{{profileData.segments[0].stats.commendationCount.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.commendationScore" class="item1 "> {{profileData.segments[0].stats.commendationScore.displayName}}<br>{{profileData.segments[0].stats.commendationScore.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.timePlayedDarkZone" class="item1 "> Dark Zone {{profileData.segments[0].stats.timePlayedDarkZone.displayName}}<br>{{profileData.segments[0].stats.timePlayedDarkZone.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.timePlayedRouge" class="item1 "> {{profileData.segments[0].stats.timePlayedRouge.displayName}}<br>{{profileData.segments[0].stats.timePlayedRouge.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsFactionDzBlackbloc" class="item1 "> {{profileData.segments[0].stats.killsFactionDzBlackbloc.displayName}}<br>{{profileData.segments[0].stats.killsFactionDzBlackbloc.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsFactionDzCultists" class="item1 "> {{profileData.segments[0].stats.killsFactionDzCultists.displayName}}<br>{{profileData.segments[0].stats.killsFactionDzCultists.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsFactionDzMilitia" class="item1 "> {{profileData.segments[0].stats.killsFactionDzMilitia.displayName}}<br>{{profileData.segments[0].stats.killsFactionDzMilitia.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsFactionDzEndgame" class="item1 "> {{profileData.segments[0].stats.killsFactionDzEndgame.displayName}}<br>{{profileData.segments[0].stats.killsFactionDzEndgame.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsFactionDzElite" class="item1 "> {{profileData.segments[0].stats.killsFactionDzElite.displayName}}<br>{{profileData.segments[0].stats.killsFactionDzElite.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.rougesKilled" class="item1 "> {{profileData.segments[0].stats.rougesKilled.displayName}}<br>{{profileData.segments[0].stats.rougesKilled.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.xPPvp" class="item1 "> {{profileData.segments[0].stats.xPPvp.displayName}}<br>{{profileData.segments[0].stats.xPPvp.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsHeadshot" class="item1 "> {{profileData.segments[0].stats.killsHeadshot.displayName}}<br>{{profileData.segments[0].stats.killsHeadshot.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsWeaponSubMachinegun" class="item1 "> {{profileData.segments[0].stats.killsWeaponSubMachinegun.displayName}}<br>{{profileData.segments[0].stats.killsWeaponSubMachinegun.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsWeaponShotgun" class="item1 "> {{profileData.segments[0].stats.killsWeaponShotgun.displayName}}<br>{{profileData.segments[0].stats.killsWeaponShotgun.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsWeaponMounted" class="item1 "> {{profileData.segments[0].stats.killsWeaponMounted.displayName}}<br>{{profileData.segments[0].stats.killsWeaponMounted.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsWeaponRifle" class="item1 "> {{profileData.segments[0].stats.killsWeaponRifle.displayName}}<br>{{profileData.segments[0].stats.killsWeaponRifle.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.killsWeaponGrenade" class="item1 "> {{profileData.segments[0].stats.killsWeaponGrenade.displayName}}<br>{{profileData.segments[0].stats.killsWeaponGrenade.displayValue}}</li>
          </div>
          <router-link to="/" class="btn btn-outline-dark">Go Back</router-link>
        </div>
    </section>
</template>






<script>

import axios from 'axios'

export default {
    name: 'DivisionProfile',
    data(){

        return{
         loading: false,
         error: null,
         profileData: null
        }
    },
    beforeCreate() {
        document.body.className = 'body-bg-no-image';
    },
    async created(){
        this.loading = true;
        try{
            // route.params getting the data from the headers
            const res = await axios.get(
            `/api/v1/profile/${this.$route.params.platform}/${this.$route.params.gamertag}/division`);
            

            this.profileData = res.data.data;
            // console.log(this.profileData)
            this.loading = false;

        }catch(err){
           this.loading = false;
           this.error = err.response.data.message;
        }
    }
}
</script>



<style scoped>
.profile-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}




li {
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
}

.container {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  max-width: 700px;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 20px;
}

@media (max-width: 700px){
    
   .profile-grid{
      display: flex;
      flex-direction: column;
   }
}


</style>