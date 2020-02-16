<template>
    <Layout classPrefix="money">
      <Types :value.sync="record.type" />
      <Tags :value.sync="record.tag" :tags-source.sync="tags" />
      <Notes :value.sync="record.notes" />
      <NumberPad :value.sync="record.amount" />
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Types from '@/components/Types.vue';
  import Tags from '@/components/Tags.vue';
  import Notes from '@/components/Notes.vue';
  import NumberPad from '@/components/NumberPad.vue';
  import {Component} from 'vue-property-decorator';

  @Component({
    components: {NumberPad, Notes, Tags, Types}
  })
  export default class Money extends Vue {
    tags = ['餐饮', '服饰', '居家', '交通', '娱乐', '医疗'];
    record = {tag: '', notes: '', type: '-', amount: 0};
  }
</script>

<style lang="scss">
  .money-content {
    display: flex;
    flex-direction: column;
  }
</style>