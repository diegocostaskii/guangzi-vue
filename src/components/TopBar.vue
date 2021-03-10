<template>
  <div class="bar" >
      
      
      <a-menu v-model:selectedKeys="current"  mode="horizontal" v-bind:style="{ fontWeight:'bold',fontFamily:'Microsoft YaHei', fontSize: 15 + 'px',marginTop:3+'px', }">
       <router-link to="/"> <b  class="logo">八爪鱼动捕</b> </router-link>
      
      <a-menu-item key="1" > <router-link to="/">首页</router-link> </a-menu-item>
      <a-menu-item key="3"><router-link to="/product">动作捕捉产品</router-link> </a-menu-item>
      <a-menu-item key="2"><router-link to="/store">免费动作库</router-link>  </a-menu-item>
      
      <a-menu-item key="4"><router-link to="/contact">联系我们</router-link></a-menu-item>
      <a-menu-item key="5" class="login" disabled >登录</a-menu-item>
  
    </a-menu>
  </div>
  <teleport to='.bar'  class="modal" >
  
  <input  class="modal"/>
  
  </teleport>

 
</template>
<script>
import { ref,defineComponent } from 'vue';
export default defineComponent({
   
  data(){
      return { current: ref(['1']),
               ModalOpen:true,
               
               
                          }
  
},
methods:{
  show(){
    this.ModalOpen=true
  }
},

watch:{
    
    $route(to){
      if(to.path=="/product"){
       this.current = ref(['3']);
      
      
      }
       if(to.path=="/"){
       this.current = ref(['1']);
      
      
      }
      if(to.path=="/store"){
       this.current = ref(['2']);
      
      
      }
      if(to.path=="/store"){
       this.current = ref(['2']);
      
      
      }
      
      console.log(to.path);//到哪去
    }
}

})
</script>
<style>

.logo{
  
  padding: 0px 1200px 0px 20px;
  color:#670cff;
 
}

.bar{
    position:relative;
   
}



</style>
