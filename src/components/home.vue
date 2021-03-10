<template>
  <div style="background: white; padding: 5px;margin:10% 5% 0 10%">
     <h1 class="h1">国内首个桌面级动作捕捉产品</h1>
     <router-link to="/product"><img alt="Vue logo" src="../assets/product.png" class="h_tu"></router-link>
     <div class="content">
     <p>下载八爪鱼动捕客户端，打开后按说明连接传感器，通过简单的交互</p>
    
     <p>拍摄动作，获得动画。无需专业场地，大幅提升动画制作效率</p>
    
     <router-link to="/product"><p class="etc">了解更多...</p></router-link>
     <br/>
     <button  class="button" v-on:click="download">下载动捕客户端</button>
     
     </div>
     
      
 
   </div>
  <div style="background: white; padding: 5px;margin:20% 5% 0 10%">
     <h1 class="h1">免费动作捕捉素材库</h1>
     <img  src="../assets/store.png" class="h_tu2">
     <div class="content">
     <p>我们已把通过我们产品产出的动作捕捉结果放在了这里，供大家免费</p>
    
     <p>下载。目前的格式包括fbx和bvh。</p>
     <br/>
     <!-- <p class="etc">了解更多...</p> -->
     <router-link to="/store"><button  class="button">进入动作素材库</button></router-link>
     
     </div>
     </div>
     

     <div class="BottomBar">
     <div class="contact">
       <h1 class="h2">业务合作</h1>
       <a-radio-group v-model:value="value1" button-style="solid" class="radio" size="large">
        <a-radio-button value="a" size="large">游戏美术</a-radio-button>
        <a-radio-button value="b" size="large">虚拟主播</a-radio-button>
        <a-radio-button value="c" size="large">动画短片</a-radio-button>
        <a-radio-button value="d" size="large">游戏制作</a-radio-button>
      </a-radio-group>
      <p class="L">公司地址：北京市海淀区文津国际公寓909</p>
      <p class="L">联系邮箱：photondance@126.com</p>
      <p class="L">客户联系二维码</p>
      <img  src="../assets/contact.jpg" class="h_tu3">
     </div>
     <div class="contact2">
       <h1 class="h2">官方社群</h1>
       <b class="b1">官方公众号</b>
       <img  src="../assets/Wxgroup.png" class="h_tu4">
        <b class="b2">应聘联系二维码</b>
        <img  src="../assets/job.jpg" class="h_tu5">
         <b class="b3">体验吐槽群</b>
         <img  src="../assets/group.png" class="h_tu6">
     </div>
  
    </div>
    <a-layout-footer class="bottomLine" >
      OctoMotion ©2021 
    </a-layout-footer>
</template>
<script>
import {  ref } from 'vue';
export default {
   setup() {
    const value1 = ref('a');
    
    return {
      value1,
     
    };
  },
  methods:{
    download(){
      console.log("download_exe")
    }
  }
}
</script>
<style >
.bottomLine{
  text-align: center;
  display: block;
}
.L{
  position: relative;
  font-Family:Microsoft YaHei;
  font-size: 20px;
  top: 40px;
  font-Weight:bold;
}
.radio{
  position: relative;
  width: 100%;
  height: 20%;
  font-size: 30px;
}
.b1{
  position: relative;
  
  font-Family:Microsoft YaHei;
  font-size: 20px;
  left:1.5%;
  display: inline;
}
.b2{
  position: relative;
  
  font-Family:Microsoft YaHei;
  font-size: 20px;
  left:22%;
  display: inline;
}
.b3{
  position: absolute;
  
  font-Family:Microsoft YaHei;
  font-size: 20px;
  left:31%;
  top:220%
  
}
.h1{
 text-align: left;
 font-Weight:bold;
  font-Family:Microsoft YaHei;
  font-size: 60px;
}
.h2{
 
 font-Weight:bold;
  font-Family:Microsoft YaHei;
  font-size: 60px;
}
.contact{
  position: absolute;
  display: inline;
  left:10%;
  width: 30%;
}
.contact2{
  position: absolute;
  display: inline;
  right:15%;
  width: 30%;
}
.content{
  text-align: left;
  font-Weight:bold;
  font-Family:Microsoft YaHei;
  font-size: 20px;
  color: black;
}
.etc{
  color: grey;
}
.button{
  position: relative;
  width:300px;
  height: 100px;
 
  border-radius: 10px;
  font-size: 30px;
  color: white;
  background-color: #670cff;
}
.h_tu{
  position: absolute;
  left: 65%;
  top:200px;
   max-width:500px;
  max-height:500px;
}
.h_tu2{
  position: absolute;
  left: 63%;
  top:950px;
   max-width:500px;
  max-height:500px;
}
.h_tu3{
  position: absolute;
  left: 38%;
  top:110%;
  max-width:150px;
  max-height:150px;
}
.h_tu4{
  position: absolute;
  left: 28%;
  top:110%;
  width:70%;
  max-width:150px;
  max-height:150px;
}
.h_tu5{
  position: absolute;
  left: 68%;
  top:110%;
  width:70%;
  max-width:130px;
  max-height:130px;
}
.h_tu6{
  position: absolute;
  left: 28%;
  top:250%;
  width:100%;
  height: 100%;
  max-width:130px;
  max-height:130px;
}
.BottomBar{
  position: relative;
  height:600px;
  margin-top: 20%;
  margin-bottom:10% ;
 
}
</style>
