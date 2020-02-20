import createId from '@/lib/createId';

const localStorageKeyName = 'tagsList';

const tagStore = {
  tagList: [] as Tag[],
  fetchTags() {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.tagList;
  },
  createTag(name: string) {
    const names = this.tagList.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      window.alert('请勿重复添加');
      return 'duplicated';
    }
    const id = createId().toString();
    this.tagList.push({id, name});
    this.saveTag();
    window.alert('添加成功');
    return 'success';
  },

  removeTag(id: string) {
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        break;
      }
    }
    this.tagList.splice(index, 1);
    this.saveTag();
    window.alert('删除成功');
    return 'success';
  },

  updateTag(id: string, name: string) {
    const idList = this.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const nameList = this.tagList.map(item => item.name);
      if (nameList.indexOf(name) >= 0) {
        window.alert('已存在相同名称标签');
        return 'duplicated';
      } else {
        const tag = this.tagList.filter(item => (item.id === id))[0];
        tag.name = name;
        this.saveTag();
        window.alert('修改成功');
        return 'success';
      }
    } else {
      window.alert('该标签不存在');
      return 'Not found';
    }
  },
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  saveTag() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  },
};

tagStore.fetchTags();
export default tagStore;