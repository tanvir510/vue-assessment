import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

export default {
  install(Vue) {
    Vue.use(BootstrapVue);
    Vue.use(IconsPlugin);
  },
};

/* <style>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';

body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 14px;
}
</style> */
