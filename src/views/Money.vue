<template>
  <Layout classPrefix="money">
    <Types :value.sync="record.type"/>
    <Tags :value.sync="record.tag" :tags-source.sync="tags"/>
    <FormItem field-name="备注" placeholder="请在这里输入备注" @update:value="onUpdateNotes"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Types from '@/components/Types.vue';
  import Tags from '@/components/Tags.vue';
  import FormItem from '@/components/FormItem.vue';
  import NumberPad from '@/components/NumberPad.vue';
  import {Component, Watch} from 'vue-property-decorator';
  import {recordListModel} from '@/models/recordListModel';
  import {tagListModel} from '@/models/tagListModel';

  const recordList = recordListModel.fetch();
  const tagList =tagListModel.fetch();

  @Component({
    components: {NumberPad, FormItem, Tags, Types}
  })
  export default class Money extends Vue {

    tags = tagList;
    record: RecordItem = {type: '-', tag: '', notes: '', amount: 0};
    recordList: RecordItem[] = recordList;
    saveRecord() {
      const newRecord: RecordItem = recordListModel.clone(this.record);
      newRecord.createdTime = new Date();
      this.recordList.push(newRecord);
      console.log(this.recordList);
    }

    @Watch('recordList')
    onRecordListChange() {
      recordListModel.save(this.recordList);
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }
  }
</script>

<style lang="scss">
  .money-content {
    display: flex;
    flex-direction: column;
  }
</style>