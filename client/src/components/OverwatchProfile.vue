<template>
    <section>
        <div v-if="loading">
          <h3>Loading...</h3>
        </div>

        <div v-if="error">
            <h1>{{error}}</h1>
        </div>

        <div v-if="profileData" class="container ">
           <h1>Overwatch</h1>
           <h3>{{profileData.platformInfo.platformSlug}}</h3>
           <h1 class="gamertag">
               {{profileData.platformInfo.platformUserId}}
           </h1>
           

          <div class="profile-grid">
                  <li class="item1 cas"> {{profileData.segments[0].stats.timePlayed.displayName}}<br>{{profileData.segments[0].stats.timePlayed.displayValue}} (Casual)</li>
                  <li class="item2 comp"> {{profileData.segments[1].stats.timePlayed.displayName}}<br>{{profileData.segments[1].stats.timePlayed.displayValue}} (Competitive) </li> 
                  <li class="item2 cas"> {{profileData.segments[0].stats.wins.displayName}} <br> {{profileData.segments[0].stats.wins.displayValue}} </li> 
                  <li class="item4 comp"> {{profileData.segments[1].stats.wins.displayName}} <br> {{profileData.segments[1].stats.wins.displayValue}}</li> 
                  <li class="item2 cas"> {{profileData.segments[0].stats.medals.displayName}} <br> {{profileData.segments[0].stats.medals.displayValue}} </li> 
                  <li class="item4 comp"> {{profileData.segments[1].stats.medals.displayName}} <br> {{profileData.segments[1].stats.medals.displayValue}}</li> 
                  <li class="item2 cas"> {{profileData.segments[0].stats.multiKills.displayName}} <br> {{profileData.segments[0].stats.multiKills.displayValue}} </li> 
                  <li class="item2 comp"> {{profileData.segments[1].stats.multiKills.displayName}} <br> {{profileData.segments[1].stats.multiKills.displayValue}}</li> 
                  <li class="item2 cas"> {{profileData.segments[0].stats.finalBlows.displayName}} <br> {{profileData.segments[0].stats.finalBlows.displayValue}} </li>
                  <li class="item2 comp"> {{profileData.segments[1].stats.finalBlows.displayName}} <br> {{profileData.segments[1].stats.finalBlows.displayValue}}</li> 
                  <li class="item2 cas"> {{profileData.segments[0].stats.healingDone.displayName}} <br> {{profileData.segments[0].stats.healingDone.displayValue}} </li> 
                  <li class="item2 comp"> {{profileData.segments[1].stats.healingDone.displayName}} <br> {{profileData.segments[1].stats.healingDone.displayValue}}</li> 
                  <li class="item2 cas"> {{profileData.segments[0].stats.eliminations.displayName}} <br> {{profileData.segments[0].stats.eliminations.displayValue}} </li>
                  <li class="item2 comp">{{profileData.segments[1].stats.eliminations.displayName}} <br> {{profileData.segments[1].stats.eliminations.displayValue}} </li> 
                  <li class="item2 cas"> {{profileData.segments[0].stats.objectiveTime.displayName}} <br> {{profileData.segments[0].stats.objectiveTime.displayValue}} </li>   
                  <li class="item2 comp"> {{profileData.segments[1].stats.objectiveTime.displayName}} <br> {{profileData.segments[1].stats.objectiveTime.displayValue}}</li> 
                  <li class="item2 cas"> {{profileData.segments[0].stats.kd.displayName}} <br> {{profileData.segments[0].stats.kd.displayValue}} </li>
                  <li class="item2 comp"> {{profileData.segments[1].stats.kd.displayName}} <br> {{profileData.segments[1].stats.kd.displayValue}}</li>   
          </div>
          <div class="overall">
          <h1>{{profileData.platformInfo.platformUserId}} <br> Overall Ranking: <br>{{overall}} </h1>
        </div>
        </div>
        <router-link to="/" class="btn btn-outline-dark">Go Back</router-link>
    </section>
</template>






<script>

import axios from 'axios'

export default {
    name: 'OverwatchProfile',
    data(){

        return{
         loading: false,
         error: null,
         profileData: null,
         overall: null
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
            `/api/v1/profile/${this.$route.params.platform}/${this.$route.params.gamertag}/overwatch`);
            

            this.profileData = res.data.data;
            // console.log(this.profileData)
            this.loading = false;

        }catch(err){
           this.loading = false;
           this.error = err.response.data.message;
        }
        if(this.profileData.segments[1].stats.kd.value >= 3.0){
                 this.overall = "Elite"
        }else if(this.profileData.segments[1].stats.kd.value <= 2.99 && this.profileData.segments[1].stats.kd.value >= 2.45){
                 this.overall = "Master"
        }else if(this.profileData.segments[1].stats.kd.value <= 2.44 && this.profileData.segments[1].stats.kd.value >= 2.0){
                 this.overall = "Top Tier"
        }else if(this.profileData.segments[1].stats.kd.value <= 1.99 && this.profileData.segments[1].stats.kd.value >= 1.40){
                 this.overall = "Good"
        }else if(this.profileData.segments[1].stats.kd.value <= 1.39 && this.profileData.segments[1].stats.kd.value >= 0.85){
                 this.overall = "Apprentice"
        }else if(this.profileData.segments[1].stats.kd.value <= 0.84 && this.profileData.segments[1].stats.kd.value >= 0.1 ){
                 this.overall = "Recruit"
        }else if(this.profileData.segments[1].stats.kd.value === null){
             this.overall = "Player has not yet played competitive, analysis unavailable. "
      }
    }
}
</script>



<style scoped>
.profile-grid{
  display: grid;
   grid-template-columns: 300px 300px;
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 20px;
  margin: auto;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
}




.cas  {
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
}

.comp  {
  background: rgba(255, 255, 255, 0.7 );
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
  color:#000000;
  font-weight: 600;
}

.container {
  
  color: #fff;
  max-width: 800px;
   margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 15px;
}

h3{
  text-transform: uppercase;
}

@media (max-width: 700px){
    
   .profile-grid{
    display: flex;
      flex-direction: column;
   }
}

</style>