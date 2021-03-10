
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import'@ant-design/icons-vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import routers from './router'
import { createApp } from 'vue'
import "amfe-flexible";
import App from './App.vue'

routers.afterEach(() => {

    document.body.scrollTop =0;
    
    document.documentElement.scrollTop = 0;
    
    });
const app = createApp(App)


app.use(Antd).use(routers).use(ElementPlus).mount('#app')

