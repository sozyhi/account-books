type RecordItem = {
  type: string;
  tag: string;
  notes: string;
  amount: number;
  createdTime?: Date;
}
type Tag = {
  id: string;
  name: string;
}

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => string;
  update: (id: string, name: string) => 'Not found' | 'success' | 'duplicated';
  save: () => void;
  remove: (id: string) => 'success';
}

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  findTag: (id: string) => Tag | undefined;
  removeTag: (id: string) => void;
  updateTag: (id: string, name: string) => void;
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}