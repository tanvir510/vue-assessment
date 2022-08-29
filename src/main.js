import wrap from '@vue/web-component-wrapper';
import Vue from 'vue';
import App from './App.vue';
import Bootstrap from './plugins/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Bootstrap);
Vue.config.devtools = true;

const CustomElement = wrap(Vue, App);

window.customElements.define('test-webcomponent', CustomElement);
