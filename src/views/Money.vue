<template>
  <div>
    <Layout classPrefix="money">
      <Types/>
      <Tags/>
      <Notes/>
      <NumberPad/>
 </Layout>
  </div>
</template>

<script lang="ts">
  import Types from '@/components/Types.vue';
  import Tags from '@/components/Tags.vue';
  import Notes from '@/components/Notes.vue';
  import NumberPad from '@/components/NumberPad.vue';
  export default {
    name: 'Money',
    components: {NumberPad, Notes, Tags, Types},
  };
</script>

<style lang="scss">
  .money-content{
    display: flex;
    flex-direction: column;
  }
</style>