<template>
  <div>
    <Layout>
      <Tabs :data-source="calculateType" :value.sync="type"/>
      <Tabs :data-source="intervalType" :value.sync="interval"/>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Money/Tabs.vue';
  import intervalType from '@/constants/intervalType';
  import calculateType from '@/constants/calculateType';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    interval = 'day';
    type = '-';
    intervalType = intervalType;
    calculateType = calculateType;
  }
</script>