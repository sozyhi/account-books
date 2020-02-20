import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.tagList = tagListModel.fetch();
window.recordList = recordListModel.fetch();

window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === 'duplicated') {
    window.alert('请勿重复添加');
  } else if (message === 'success') {
    window.alert('添加成功');
  }
};

window.createRecord = (record: RecordItem) => {
  recordListModel.create(record);
};

window.removeTag = (id: string) => {
  const message = tagListModel.remove(id);
  if (message === 'success') {
    window.alert('删除成功');
  } else {
    window.alert('删除失败');
  }
};

window.updateTag = (id: string, name: string) => {
  const message = tagListModel.update(id, name);
  if (message === 'duplicated') {
    window.alert('已存在相同名称标签');
  } else if (message === 'Not found') {
    window.alert('该标签不存在');
  } else if (message === 'success') {
    window.alert('修改成功');
  }
};
window.findTag = (id: string) => {
  return window.tagList.filter(t => t.id === id)[0];
};

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');
