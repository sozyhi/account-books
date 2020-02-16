<template>
  <Layout classPrefix="money">
    {{recordList}}
    <Types :value.sync="record.type"/>
    <Tags :value.sync="record.tag" :tags-source.sync="tags"/>
    <Notes :value.sync="record.notes"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Types from '@/components/Types.vue';
  import Tags from '@/components/Tags.vue';
  import Notes from '@/components/Notes.vue';
  import NumberPad from '@/components/NumberPad.vue';
  import {Component, Watch} from 'vue-property-decorator';

  type Record = {
    tag: string;
    notes: string;
    type: string;
    amount: number;
    createdDay?: Date;
  }
  @Component({
    components: {NumberPad, Notes, Tags, Types}
  })
  export default class Money extends Vue {
    tags = ['餐饮', '服饰', '居家', '交通', '娱乐', '医疗'];
    recordList: object[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    record: Record = {tag: '', notes: '', type: '-', amount: 0};

    saveRecord() {
      const newRecord: Record = JSON.parse(JSON.stringify(this.record));
      newRecord.createdDay = new Date();
      this.recordList.push(newRecord);
      console.log(this.recordList);
    }

    @Watch('recordList')
    onRecordListChange() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    }

  }
</script>

<style lang="scss">
  .money-content {
    display: flex;
    flex-direction: column;
  }
</style>