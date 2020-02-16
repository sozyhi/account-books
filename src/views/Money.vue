<template>
  <div>
    <Layout classPrefix="money">
      <Types :xxx="2222"/>
      <Tags :tags-source.sync="tags"/>
      <Notes/>
      <NumberPad/>
    </Layout>
  </div>
</template>

<script lang="js">
  import Types from '@/components/Types.vue';
  import Tags from '@/components/Tags.vue';
  import Notes from '@/components/Notes.vue';
  import NumberPad from '@/components/NumberPad.vue';

  export default {
    name: 'Money',
    components: {NumberPad, Notes, Tags, Types},
    data() {
      return {tags: ['餐饮', '服饰', '居家', '交通','娱乐','医疗']}
    }
  };
</script>

<style lang="scss">
  .money-content {
    display: flex;
    flex-direction: column;
  }
</style>