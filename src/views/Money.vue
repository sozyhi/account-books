<template>
  <Layout classPrefix="money">
    <Types :value.sync="record.type"/>
    <Tags :value.sync="record.tag"/>
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
  import {Component} from 'vue-property-decorator';

  @Component({
    components: {NumberPad, FormItem, Tags, Types},
  })
  export default class Money extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }

    record: RecordItem = {type: '-', tag: '', notes: '', amount: 0};

    created() {
      this.$store.commit('fetchRecords');
      this.$store.commit('fetchTags');
    }

    saveRecord() {
      this.$store.commit('createRecord', this.record);
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