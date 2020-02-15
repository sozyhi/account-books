<template>
  <div>
    <ul class="type">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component({
  props:{
    propMessage:String
  }
  })
  export default class Types extends Vue {
    type = '-';
    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.type = type;
    }

  // export default {
  //   name: 'Types',
  //   data(){
  //     return{
  //       type:'-'
  //     }
  //   },
  //   methods:{
  //     selectType(type){
  //       if(type !=='-' && type !=='+'){
  //         throw new Error('type is unknown')
  //       }
  //       this.type = type
  //     }
  //   }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/uniform-color.scss";

  .type {
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