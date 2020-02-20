import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex);
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined,
  } as RootState,
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      const newRecord: RecordItem = clone(record);
      newRecord.createdTime = new Date();
      state.recordList.push(newRecord);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagsList') || '[]');
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('请勿重复添加');
      }
      const id = createId().toString();
      state.tagList.push({id, name});
      store.commit('saveTag');
      window.alert('添加成功');
    },
    saveTag(state) {
      window.localStorage.setItem('tagsList', JSON.stringify(state.tagList));
    },
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit('saveTag');
        window.alert('删除成功');
      } else {
        window.alert('删除失败');
      }

    },
    updateTag(state, payload: { id: string; name: string }) {
      const {id, name} = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const nameList = state.tagList.map(item => item.name);
        if (nameList.indexOf(name) >= 0) {
          window.alert('已存在相同名称标签');
        } else {
          const tag = state.tagList.filter(item => (item.id === id))[0];
          tag.name = name;
          store.commit('saveTag');
          window.alert('修改成功');
        }
      } else {
        window.alert('该标签不存在');
      }
    },
  },
  actions: {},
  modules: {}
});


export default store;