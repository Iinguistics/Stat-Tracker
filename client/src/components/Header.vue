<template>
    <header>
       <div>
        <img src="../assets/Header/apex-legends.jpg">
        <img src="../assets/Header/overwatch-logo.jpg">
        <img src="../assets/Header/the-division.jpg">
        <img src="../assets/Header/cod.jpg">
       </div>
    </header>
</template>






<script>
export default {
    name: 'Header',
    data(){

        return{
         
        }
    }
}
</script>



<style scoped>

img{
    width: 300px;
    margin: auto;
}


@media (max-width: 700px){
    img{
        display: inline-block;
        margin: auto;
         width: 102px;
    }
}


</style>