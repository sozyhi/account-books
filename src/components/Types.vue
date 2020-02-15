<template>
  <div>
    <ul class="type">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div></template>

<script lang="ts">
  export default {
    name: 'Types'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/uniform-color.scss";
  .type{
    @extend %outerShadow;
    display: flex;
    font-size: 20px;
    >li{
      position: relative;
      color: $color-ordinary;
      display: flex;
      justify-content:space-around;
      width: 50vw;
      padding:10px 0;
      &.selected{
        color:$color-selected-word;
        &::after{
          content:'';
          position: absolute;
          bottom:0;
          left: 0;
          background: $color-selected-icon;
          height: 4px;
          width: 100%;


        }
      }
    }
  }

</style>