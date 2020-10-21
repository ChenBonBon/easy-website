import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
const { message } = Antd;

app.use(Antd);

app.config.globalProperties.$message = message;

app.mount('#app');
