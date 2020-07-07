<template>
  <div class="container">
          <!--cod MW -->
        <section class="search cod">
     <h1>Track Player Stats</h1>
     <h2>Modern Warfare</h2>
     <form v-on:submit.prevent="onSubmitCod">
         <div class="form-group">
             <label for="platform">Platform</label>
             <select name="platform" id="platform" v-model="platform">
              
                 <option value="xbl">Xbox</option>
              
             </select>
         </div>
         <div class="form-group">
             <label for="gamertag">Gamertag</label>
             <input type="text" name="text" v-model="codGamertag" id="gamertag" placeholder=" Xbox gamertag"/>
         </div>
         <div class="form-group">
             <input type="submit" value="Submit" class="btn" />
         </div>
     </form>
    </section>
   <!-- overwatch -->
    <section class="search overwatch">
     <h1>Track Player Stats</h1>
     <h2>Overwatch</h2>
     <form v-on:submit.prevent="onSubmitOW">
         <div class="form-group">
             <label for="platform">Platform</label>
             <select name="platform" id="platform" v-model="platform">
                 <option value="psn">Playstation</option>
                 <option value="xbl">Xbox</option>
                 <option value="battlenet">Battlenet</option>
             </select>
         </div>
         <div class="form-group">
             <label for="gamertag">Gamertag</label>
             <input type="text" name="text" v-model="overwatchGamertag" id="gamertag" placeholder="Battlenet ID, Xbox gamertag, PSN ID" />
         </div>
         <div class="form-group">
             <input type="submit" value="Submit" class="btn" />
         </div>
     </form>
    </section>
        <!-- apex -->
        <section class="search apex">
     <h1>Track Player Stats</h1>
     <h2>Apex Legends</h2>
     <form v-on:submit.prevent="onSubmitAP">
         <div class="form-group">
             <label for="platform">Platform</label>
             <select name="platform" id="platform" v-model="platform">
                 <option value="psn">Playstation</option>
                 <option value="xbl">Xbox</option>
                 <option value="origin">Origin</option>
             </select>
         </div>
         <div class="form-group">
             <label for="gamertag">Gamertag</label>
             <input type="text" name="text" v-model="apexGamertag" id="gamertag" placeholder="Origin ID, Xbox gamertag, PSN ID" />
         </div>
         <div class="form-group">
             <input type="submit" value="Submit" class="btn" />
         </div>
     </form>
    </section>
     <!-- division -->
        <section class="search division">
     <h1>Track Player Stats</h1>
     <h2>Division 2</h2>
     <form v-on:submit.prevent="onSubmitD">
         <div class="form-group">
             <label for="platform">Platform</label>
             <select name="platform" id="platform" v-model="platform">
                 <option value="psn">Playstation</option>
                 <option value="xbl">Xbox</option>
                 <option value="unplay">Unplay</option>
             </select>
         </div>
         <div class="form-group">
             <label for="gamertag">Gamertag</label>
             <input type="text" name="text" v-model="divisionGamertag" id="gamertag" placeholder="Unplay ID, Xbox gamertag, PSN ID "/>
         </div>
         <div class="form-group">
             <input type="submit" value="Submit" class="btn" />
         </div>
     </form>
    </section>
  </div>
</template>






<script>
 import axios from 'axios';


export default {
    name: 'Search',
    data(){
        return{
          platform: "xbl",
          codGamertag: "",
          overwatchGamertag: "",
          apexGamertag: "",
          divisionGamertag: "",
          info: null
        }
    },
    // hook to show background img
    beforeCreate() {
        document.body.className = "body-bg-image";
    },
    // overwatch
    methods: {
        onSubmitOW: function(){
            if(!this.overwatchGamertag){
               this.$toasted.show("Please enter a gamertag", {
                   duration: 3000,
                   icon: "exclamation-circle",
                   theme: "bubble", 
               });

               
            }else{
                this.$router.push(`/profile/${this.platform}/${this.overwatchGamertag}/overwatch`);
            }
        },
    
    //apex
     onSubmitAP: function(){
            if(!this.apexGamertag){
               this.$toasted.show("Please enter a gamertag", {
                   duration: 3000,
                   icon: "exclamation-circle",
                   theme: "bubble", 
               });

               
            }else{
                this.$router.push(`/profile/${this.platform}/${this.apexGamertag}/apex`);
            }
        },

        //Division
            onSubmitD: function(){
            if(!this.divisionGamertag){
               this.$toasted.show("Please enter a gamertag", {
                   duration: 3000,
                   icon: "exclamation-circle",
                   theme: "bubble", 
               });

               
            }else{
                this.$router.push(`/profile/${this.platform}/${this.divisionGamertag}/division`);
            }
        },

           //Cod
            onSubmitCod: function(){
            if(!this.codGamertag){
               this.$toasted.show("Please enter a gamertag", {
                   duration: 3000,
                   icon: "exclamation-circle",
                   theme: "bubble", 
               });

               
            }else{
                this.$router.push(`/profile/${this.platform}/${this.codGamertag.toLowerCase()}/cod`);
            }
        },

        async test(){
              try{
            // route.params getting the data from the headers
            const res = await axios.get(
            '/api/v1/test');
            

            this.profileData = res.data;
            // console.log(this.profileData)
            this.loading = false;

        }catch(err){
           this.loading = false;
           this.error = err.response.data.message;
        }
            
        }

    

        
    }
  
}
</script>



<style scoped>
.overwatch{
    background: url("../assets/Header/overwatch-logo.jpg");
    background-size: cover;
}

.apex{
    background: url("../assets/Header/apex-legends-3.webp");
    background-size: cover;
    opacity: 0.9;
    font-weight: 800; 
}

.division{
    background: url("../assets/Header/the-division-2.jpg");
    background-size: cover;
}

.cod{
    background: url("../assets/Header/cod.png");
    background-size: cover;
}




</style>