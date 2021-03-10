<template>
   <div style="background: white; padding: 5px;margin:10% 5% 0 10%">
     <h1 class="p_h1">八爪鱼动作捕捉产品介绍</h1>
  
     <div class="content">
     <h2 class="p_h2">Part1 产品简介</h2>
     
     <p>八爪鱼动捕是行业内首个把计算机视觉技术用于动画/游戏制作环节的动作捕捉系统。</p>
    
     <p>采用计算机视觉的技术方案，所以不需要穿戴标记，也没有惯性的漂移问题；</p>
     <p>得到的人体姿态也远远比现有的学术界通行的RGB方案稳定准确。</p>
     <img alt="Vue logo" src="../assets/logo-light.png" class="p_tu">
     
   
     <a-divider class="p_divider" />

  
  <div class="p_steps" >
     
  <h2 class="p_h3">Part2 产品使用流程介绍</h2>
  
  <el-steps :active="active" finish-status="success"   align-center >
  <el-step title="联系预约" description="通过公众号后台预约" ></el-step>
  <el-step title="设备安装" description="闪送传感器远程指导安装软件"></el-step>
  <el-step title="动作捕捉" description="随时随地打开客户端连接设备开启录制"></el-step>
   <el-step title="导出结果" description="云端算法支持1分钟即可得到生成的动作文件" ></el-step>
   <el-step title="后续技术支持" description="专注研发算法，不断为您调优" ></el-step>
</el-steps>
   <button  class="p_button" v-on:click="next">下一步</button>
    <a-divider class="p_divider2" />
    
    
     </div>
     </div>
   
   
   
   
   <div class="p_contact">
     <h2 class="p_h4">Part3 产品应用场景</h2>
     <p class="pp1">如果你是————</p>
     <p class="pp1">1、游戏团队</p>
     <p class="pp2">当你找不到专业的动画师来k动作</p>
     <p class="pp2">八爪鱼动捕会为您快速提供比普通动画师更多更好的素材</p>
     <p class="pp1">2、虚拟偶像公司</p>
     <p class="pp2">当你无法高效制作3d虚拟动画</p>
     <p class="pp2">八爪鱼动捕会为您的生产效率提高10倍</p>
     <p class="pp1">3、动画师</p>
     <p class="pp2">当你找不到专业的动画师队友和同事</p>
     <p class="pp2">八爪鱼动捕就是您最好的‘亲密战友’</p>
     <p class="pp1">4、电影特效团队</p>
     <p class="pp2">当你没有足够的资金来创建人物特效</p>
     <p class="pp2">八爪鱼动捕会为您快速生成素材并提供实时预演</p>
     <p class="pp3">微信扫码，进入公众号体验产品</p>
       <img alt="Vue logo" src="../assets/Wxgroup.png" class="p_tu2">
   </div>
   </div>
<a-layout-footer style="text-align: center">
      OctoMotion ©2021 
    </a-layout-footer>
    
     
</template>
<script>
  export default {
    data() {
      return {
        active: 1
      };
    },

    methods: {
      next() {
        if (this.active++ > 4) this.active = 0;
      }
    }
  }
</script>


<style>
.pp1{
  font-size: 25px ;
  text-align: left;
  text-align: left;
  font-Weight:bold;
  font-Family:Microsoft YaHei;
  color: #670cff;
}
.pp2{
  font-size: 20px ;
  text-align: left;
  text-align: left;
  font-Weight:bold;
  font-Family:Microsoft YaHei;
}
.pp3{
  position: absolute;
  font-size: 30px ;
  text-align: left;
  text-align: left;
  font-Weight:bold;
  font-Family:Microsoft YaHei;
   left: 52%;
  top:1700px;
   color: #670cff;
}
.ptime{
  position: relative;
}
.p_tu{
  position: absolute;
  left: 68%;
  top:24%;
  max-width:200px;
  max-height:200px;
}
.p_tu2{
  position: absolute;
  left: 58%;
  top:1800px;
  max-width:200px;
  max-height:200px;
}
.p_button{
  position: relative;
  width:250px;
  height: 50px;
 margin-top: 5%;
 left: 40%;
  border-radius: 10px;
  font-size: 30px;
  color: white;
  background-color: #670cff;
}
.p_divider{
  margin-top: 8%;
}
.p_divider2{
  margin-top: 8%;
}
.el-step__title {
  font-size: 35px;
  line-height: 30px;
  color: #670cff;
}
.el-step__description{
  font-size: 25px;
  line-height: 30px;
  color: #670cff;
  margin-top: 2%;
}
.el-step__description.is-success{
  font-size: 25px;
  line-height: 30px;
  color: #670cff;
  margin-top: 2%;
}
.el-step__title.is-success {
  font-size: 30px;
  line-height: 30px;
  color: #670cff;
}
.el-step__head.is-success{
  color: #670cff;
  border-color: #670cff;
}

.p_h1{
  position: relative;
  margin-top:-10% ;
  text-align: left;
  font-Weight:bold;
  font-Family:Microsoft YaHei;
  font-size: 60px;
}
.p_h2{
  position: relative;
  margin-top:3% ;
  text-align: left;
  font-Weight:bold;
  font-Family:Microsoft YaHei;
  font-size: 30px;
}
.p_h3{
  position: relative;
  margin-top:10% ;
  text-align: left;
  font-Weight:bold;
  font-Family:Microsoft YaHei;
  font-size: 30px;
}
.p_h4{
  position: relative;
  margin-top:7% ;
  text-align: left;
  font-Weight:bold;
  font-Family:Microsoft YaHei;
  font-size: 30px;
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

</style>