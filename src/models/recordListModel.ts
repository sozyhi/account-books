import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem) {
    const newRecord: RecordItem = clone(record);
    newRecord.createdTime = new Date();
    this.data.push(newRecord);
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  }
};
export default recordListModel;