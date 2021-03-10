<template>
  <div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> --> 
  
  <TopBar/>
  <div id="target"/>
  <div class="background">

  <router-view></router-view> 
  </div>
  
  </div>
  <div id="components-back-top-demo-custom">
    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
 
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TopBar from './components/TopBar.vue'
export default {
  name: 'App',
  components: {
    TopBar
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /* margin-top: 60px; */
}
#target{
  position: absolute;
  width: 800px;
  height:600px;
}
.background{
  margin-top: 4%;
  height:30%;
  width:100%;
  position:absolute;
  background-color:white;
}
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #670cff;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>


