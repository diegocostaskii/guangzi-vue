<template>
  <div>
  <a>contactpage</a>
  <div class="ptime">
      <h1 class="c_h1">公司时间表</h1>
     <a-timeline mode="alternate"  > 
    <a-timeline-item >创始人史海天发现动画制作速度慢的问题 2020-01</a-timeline-item>
    <a-timeline-item>初步验证可行性，开始组建团队，发起“八爪鱼动捕”项目 2020-04</a-timeline-item>
    <a-timeline-item>公司注册成立，研究动捕算法落地场景 2020-08</a-timeline-item>
    <a-timeline-item>获得天使融资，获得清华-昆山杯创业大赛银奖 20-10</a-timeline-item>
    <a-timeline-item>算法研究取得重大突破，产品链得到丰富 21-1</a-timeline-item>
    </a-timeline>
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
  </div>
  <a-layout-footer style="text-align: center">
      OctoMotion ©2021 
    </a-layout-footer>
</template>
<style>
.c_h1{
  font-size: 25px ;
  font-Weight:bold;
  font-Family:Microsoft YaHei;
  color: #670cff;
  margin-bottom: 5%;
  margin-top: 5%;
}
.ant-timeline-item{
  font-size: 20px;
   font-Weight:bold;
  font-Family:Microsoft YaHei;
  
}
</style>