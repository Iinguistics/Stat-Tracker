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
           <h1 class="gamertag">
               {{profileData.platformInfo.platformUserId}}
           </h1>
           <h3>{{profileData.platformInfo.platformSlug}}</h3>
           <h2>Overview</h2>
          <div class="profile-grid">
             
                  
                  <li v-if="profileData.segments[0].stats.level" class="item1 "> {{profileData.segments[0].stats.level.displayName}}<br>{{profileData.segments[0].stats.level.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.kills" class="item1 "> {{profileData.segments[0].stats.kills.displayName}}<br>{{profileData.segments[0].stats.kills.displayValue}}</li>   
                  <li v-if="profileData.segments[0].stats.winningKills" class="item1 "> {{profileData.segments[0].stats.winningKills.displayName}}<br>{{profileData.segments[0].stats.winningKills.displayValue}}</li>
                  <li v-if="profileData.segments[0].stats.damage" class="item1 "> {{profileData.segments[0].stats.damage.displayName}}<br>{{profileData.segments[0].stats.damage.displayValue}}</li>                
                  <li v-if="profileData.segments[0].stats.matchesPlayed" class="item1 "> {{profileData.segments[0].stats.matchesPlayed.displayName}}<br>{{profileData.segments[0].stats.matchesPlayed.displayValue}}</li> 
                  <li v-if="profileData.segments[0].stats.revives" class="item1 "> {{profileData.segments[0].stats.revives.displayName}}<br>{{profileData.segments[0].stats.revives.displayValue}}</li>
                  <li v-else class="item1 "> {{profileData.segments[0].stats.rankScore.displayName}}<br>{{profileData.segments[0].stats.rankScore.displayValue}}</li>
                  <br>
                 

                  <div v-if="profileData.segments[1].stats.kills">
                  <li class="item1 "> {{profileData.segments[1].metadata.name}}<br><img class="legend-img" :src="profileData.segments[1].metadata.imageUrl" /></li> 
                  <li class="item1 "> {{profileData.segments[1].stats.kills.displayName}}<br>{{profileData.segments[1].stats.kills.displayValue}}</li> 
                  </div>
                  <div class="notPlayed" v-else>User has not played all legends <div class="divider"></div><br></div>
                  

                  <div v-if="profileData.segments[2].stats.kills">
                  <li class="item1 "> {{profileData.segments[2].metadata.name}}<br><img class="legend-img" :src="profileData.segments[2].metadata.imageUrl" /></li> 
                  <li class="item1 "> {{profileData.segments[2].stats.kills.displayName}}<br>{{profileData.segments[2].stats.kills.displayValue}}</li> 
                  </div>
                  <div class="notPlayed" v-else>User has not played all legends <div class="divider"></div><br></div>
                    

                  <div v-if="profileData.segments[3].stats.kills">
                  <li class="item1 "> {{profileData.segments[3].metadata.name}}<br><img class="legend-img" :src="profileData.segments[3].metadata.imageUrl" /></li> 
                  <li class="item1 "> {{profileData.segments[3].stats.kills.displayName}}<br>{{profileData.segments[3].stats.kills.displayValue}}</li> 
                  </div>
                  <div class="notPlayed" v-else>User has not played all legends <div class="divider"></div><br></div>

                  <div v-if="profileData.segments[4].stats.kills">
                  <li class="item1 "> {{profileData.segments[4].metadata.name}}<br><img class="legend-img" :src="profileData.segments[4].metadata.imageUrl" /></li> 
                  <li class="item1 "> {{profileData.segments[4].stats.kills.displayName}}<br>{{profileData.segments[4].stats.kills.displayValue}}</li> 
                  </div>
                  <div class="notPlayed" v-else>User has not played all legends <div class="divider"></div><br></div>
                   
                  <div v-if="profileData.segments[5].stats.kills">
                  <li class="item1 "> {{profileData.segments[5].metadata.name}}<br><img class="legend-img" :src="profileData.segments[5].metadata.imageUrl" /></li> 
                  <li class="item1 "> {{profileData.segments[5].stats.kills.displayName}}<br>{{profileData.segments[5].stats.kills.displayValue}}</li> 
                  </div>
                   <div class="notPlayed" v-else>User has not played all legends <div class="divider"></div><br></div>
                    
                   <div v-if="profileData.segments[6].stats.kills">
                  <li class="item1 "> {{profileData.segments[6].metadata.name}}<br><img class="legend-img" :src="profileData.segments[6].metadata.imageUrl" /></li> 
                  <li class="item1 "> {{profileData.segments[6].stats.kills.displayName}}<br>{{profileData.segments[6].stats.kills.displayValue}}</li> 
                  </div>
                   <div class="notPlayed" v-else>User has not played all legends <div class="divider"></div><br></div>
                    
                     <div v-if="profileData.segments[7].stats.kills">
                  <li class="item1 "> {{profileData.segments[7].metadata.name}}<br><img class="legend-img" :src="profileData.segments[7].metadata.imageUrl" /></li> 
                  <li class="item1 "> {{profileData.segments[7].stats.kills.displayName}}<br>{{profileData.segments[7].stats.kills.displayValue}}</li> 
                  </div>
                  <div class="notPlayed" v-else>User has not played all legends <div class="divider"></div><br></div>
                      
                     <div v-if="profileData.segments[8].stats.kills">
                  <li class="item1 "> {{profileData.segments[8].metadata.name}}<br><img class="legend-img" :src="profileData.segments[8].metadata.imageUrl" /></li> 
                  <li class="item1 "> {{profileData.segments[8].stats.kills.displayName}}<br>{{profileData.segments[8].stats.kills.displayValue}}</li> 
                  </div>
                   <div class="notPlayed" v-else>User has not played all legends <div class="divider"></div><br></div>

                    <div v-if="profileData.segments[9].stats.kills">
                  <li class="item1 "> {{profileData.segments[9].metadata.name}}<br><img class="legend-img" :src="profileData.segments[9].metadata.imageUrl" /></li> 
                  <li class="item1 "> {{profileData.segments[9].stats.kills.displayName}}<br>{{profileData.segments[9].stats.kills.displayValue}}</li> 
                  </div>
                   <div class="notPlayed" v-else>User has not played all legends <div class="divider"></div><br></div> 

                     <div v-if="profileData.segments[10].stats.kills">
                  <li class="item1 "> {{profileData.segments[10].metadata.name}}<br><img class="legend-img" :src="profileData.segments[10].metadata.imageUrl" /></li> 
                  <li class="item1 "> {{profileData.segments[10].stats.kills.displayName}}<br>{{profileData.segments[10].stats.kills.displayValue}}</li> 
                  </div>
                   <div class="notPlayed" v-else>User has not played all legends <div class="divider"></div><br></div>

                   <div v-if="profileData.segments[11].stats.kills">
                  <li class="item1 "> {{profileData.segments[11].metadata.name}}<br><img class="legend-img" :src="profileData.segments[11].metadata.imageUrl" /></li> 
                  <li class="item1 "> {{profileData.segments[11].stats.kills.displayName}}<br>{{profileData.segments[11].stats.kills.displayValue}}</li> 
                  </div>
                   <div class="notPlayed" v-else>User has not played all legends <div class="divider"></div><br></div>

                   <div v-if="profileData.segments[12].stats.kills">
                  <li class="item1 "> {{profileData.segments[12].metadata.name}}<br><img class="legend-img" :src="profileData.segments[12].metadata.imageUrl" /></li> 
                  <li class="item1 "> {{profileData.segments[12].stats.kills.displayName}}<br>{{profileData.segments[12].stats.kills.displayValue}}</li> 
                  </div>
                   <div class="notPlayed" v-else>User has not played all legends <div class="divider"></div><br></div> 
          </div>
          <router-link to="/" class="btn btn-outline-dark">Go Back</router-link>
        </div>
    </section>
</template>






<script>

import axios from 'axios'

export default {
    name: 'ApexProfile',
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
            `/api/v1/profile/${this.$route.params.platform}/${this.$route.params.gamertag}/apex`);
            

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
  max-width: 800px;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 20px;
}

.legend-img{
   width: 200px;
 
}

.divider{
  height: 1px;
  background-color: seashell;
  width: 200%;
}

.notPlayed{
  width: 50%;
  text-align: center;

}


@media (max-width: 700px){
    
   .profile-grid{
      display: flex;
      flex-direction: column;
   }
}

</style>