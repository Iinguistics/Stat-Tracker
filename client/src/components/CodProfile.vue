<template> 
     <section>
      <div>
        <div v-if="loading">
          <h3>Loading...</h3>
        </div>
        <div v-if="error">
            <h1>{{error}}</h1>
            <router-link to="/" class="btn btn-outline-dark">Go Back</router-link>
        </div>
        <div v-if="info" class="container">
          <h3>{{info.platform}}</h3>
           <h1 class="gamertag">
               {{info.username}}
           </h1>
           <h2>Overview</h2>
        </div>
        </div>
        <div class="profile-grid container">
            <li class="cas child">Current level: {{info.level}} </li>
            <li class="cas child">Overall KD: {{kd}}</li>
            <li class="cas child">Overall Win Loss: {{wl}}</li>
            <li class="cas child">Total Games Played: {{info.lifetime.all.properties.totalGamesPlayed}}</li>
            <li class="cas child">Current Win Streak: {{info.lifetime.all.properties.currentWinStreak}}</li>
            <li class="cas child">Total HQ Score: {{info.lifetime.mode.hq.properties.score}}</li>
            <li class="cas child">Total HQ Captures: {{info.lifetime.mode.hq.properties.captures}}</li>
            <li class="cas child">HQ KD: {{hqKd}}</li>
            <li class="cas child">Advanced UAV's used: {{info.lifetime.scorestreakData.supportScorestreakData.directional_uav.properties.awardedCount}}</li>
            <li class="cas child">White Phosphorus used: {{info.lifetime.scorestreakData.lethalScorestreakData.white_phosphorus.properties.awardedCount}}</li>
            <li class="cas child">Vtol Jet used: {{info.lifetime.scorestreakData.lethalScorestreakData.hover_jet.properties.awardedCount}}</li>
            <li class="cas child">Chopper Gunner used: {{info.lifetime.scorestreakData.lethalScorestreakData.chopper_gunner.properties.awardedCount}}</li>
            <li class="cas child">Support Helo used: {{info.lifetime.scorestreakData.lethalScorestreakData.chopper_support.properties.awardedCount}}</li>
            <li class="cas child">Nukes: {{info.lifetime.scorestreakData.lethalScorestreakData.nuke.properties.uses}}</li>
        </div>
        <div class="container">
          <h3>Overall Tier: {{overall}}</h3>
          <p>{{quote}}</p>
        </div>
        <div v-if="mafiia" class="container sponsors">
         <h3>Sponsor's:</h3><br>
         <a href="https://www.cheetos.com/" target="_blank"><img src="../assets/Sponsors/cheetos.jpg"><br>Cheetos</a><br>
         <a href="https://www.instagram.com/" target="_blank"><img src="../assets/Sponsors/instagram-1.jpg"><br>Instagram</a><br><br>
         <a href="https://www.intel.com/content/www/us/en/homepage.html" target="_blank"><img src="../assets/Sponsors/intel-logo.png"><br>Intel</a><br><br>
        </div>
    </section>
</template>






<script>

import axios from 'axios';


export default {
    name: 'CodProfile',
    data(){

        return{
         loading: false,
         error: null,
         profileData: null,
         overall: null,
         gamertag:this.$route.params.gamertag,
         info: null,
         kd: null,
         wl: null,
         hqKd: null,
         quote: null,
         mafiia: false,
         overallImg: null,
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
            `/api/v1/profile/${this.$route.params.platform}/${this.$route.params.gamertag}/cod`);
            

            this.info = res.data;
         
          
           // console.log(this.info)

      this.kd =  this.info.lifetime.all.properties.kdRatio.toString().substr(0,4);
      this.wl =  this.info.lifetime.all.properties.winLossRatio.toString().substr(0,4);
      this.hqKd = this.info.lifetime.mode.hq.properties.kdRatio.toString().substr(0,4);
      if(this.info.lifetime.all.properties.kdRatio >= 2.00){
        this.overall = "Elite";
        this.quote = "Best of the best. Instead of showing animosity or bitterness combine your talents & become stronger, for knowledge which is acquired under compulsion obtains no hold on the mind.";
        this.overallImg = "../assets/Badges/elite-badges.jpg";
      }else if(this.info.lifetime.all.properties.kdRatio <= 1.99 && this.info.lifetime.all.properties.kdRatio >= 1.80 ){
        this.overall = "Master";
        this.quote = "Master at their craft. Just on the cusp of joining the Elites. Show this tier the upmost respect for they are a very worthy opponent";
        this.overallImg = "../assets/Tier-Badges/master-badges.jpg";
      }else if(this.info.lifetime.all.properties.kdRatio <= 1.79 && this.info.lifetime.all.properties.kdRatio >= 1.50 ){
        this.overall = "Decent";
        this.quote = "They may have some wit but be cautious with this type, for their skills can be deceiving, only when matched against good or elites will the true skill of this tier show.";
      }else if(this.info.lifetime.all.properties.kdRatio <= 1.49 && this.info.lifetime.all.properties.kdRatio >= 1.15 ){
        this.overall = "Amateur Tier";
        this.quote = "Has potential, but is still learning the ropes.";
      }else{
        this.overall = "Beginner";
        this.quote = "New to the game, still needs lots of practice";
      }
          if( this.info.username == "mafiia kobe" || this.info.username == "mafiia stun"){
            this.mafiia = true;
         }else
          if(this.info.username == "mafiia lynch" || this.info.username == "mafiia pancho"){
            this.mafiia = true;
         }else
          if(this.info.username == "mafiia lopez" || this.info.username == "mafiia niko"){
            this.mafiia = true;
         }else{
           this.mafiia = false;
         }
        
           
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
  grid-template-columns: 450px 450px;
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 20px;
  margin: auto;
  width: 80%;
  margin-top: 50px;
  margin-bottom: 10px;
  text-align: center !important;
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
    max-width: 80%;
    color: #fff;
    margin:  auto;
    text-align: center;
}

h3{
  text-transform: uppercase;
  font-size: 34px;
  color: #fff;
}

h1{
    color: #fff;
    font-size: 38px;
    text-transform: uppercase;
}

h2{
  font-size: 34px;
}

li{
    font-size: 30px;
}

 a{
   margin: auto;
}

a:hover{
  color: #00FF00;
}

p{
  font-size: 22px;
}

.sponsors img{
  height: 150px ;
  width: 150px;
}

.sponsors a{
   font-size: 32px;
}

.overallImg{
  height: 150px;
  width: 150px;
}

@media (max-width: 700px){
   .profile-grid{
      display: flex;
      flex-direction: column;
   }
}

@media (min-width: 1300px){
  .profile-grid{
  width: 55%;
}
}

</style>