<template>
  <div>
    <ul class="tab">
      <li v-for="item in dataSource" :key="item.value"
          :class="{selected:item.value === value}"
          @click="select(item)">{{item.text}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
type DatasSourceItem = {text: string; value: string}
  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array}) dataSource!: {text: string; value: string}[];
    @Prop(String)readonly value!: string;
    @Prop(String) classPrefix?: string;//类前缀
    select(item: DatasSourceItem) {
      this.$emit('update:value',item.value)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/uniform-color.scss";

  .tab {
    @extend %outerShadow;
    display: flex;
    font-size: 20px;

    > li {
      position: relative;
      color: $color-ordinary;
      display: flex;
      justify-content: space-around;
      width: 50vw;
      padding: 10px 0;

      &.selected {
        color: $color-selected-word;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          background: $color-selected-icon;
          height: 4px;
          width: 100%;


        }
      }
    }
  }

</style>