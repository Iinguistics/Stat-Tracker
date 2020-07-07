<template>
  <div class="">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
   Header,
  
  }
}
</script>

<style>

:root {
  --primary-color: #0E0B16;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--primary-color);
  color: #fff;
  line-height: 1.6;
}
a {
  color: #fff;
  text-decoration: none;
}
ul, li, p {
  list-style: none;
  font-family: 'IBM Plex Sans', sans-serif;
}




.body-bg-no-image {
  background: var(--primary-color);
}
.body-bg-image {
  background-color: var(--primary-color);
}

.container {
  
  color: #fff;
  max-width: 700px;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 20px;
}

.form-group {
  margin: 1rem 0;
}
.search {
  
  border: 4px #fff solid;
  margin-top: 1rem;
  padding: 2rem;
}
input,
select,
textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}
.btn {
  display: inline-block;
  background: #953036;
  color: #fff;
  padding: 0.4rem 1.3rem;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
}

h1,h2,h3,h4,h5,h6{
  font-family: 'IBM Plex Mono', monospace;
}



@media (max-width: 700px) {
  body {
    background: var(--primary-color);
  }
}

</style>
