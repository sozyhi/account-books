<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tags'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/uniform-color.scss";
  .tags{
    padding: 16px;
    flex-grow: 1;
    position: relative;
    > .current{
      display:flex;
      flex-wrap: wrap;
      > li{
        overflow:hidden;
        background: $color-background;
        $h:24px;
        height:$h;
        line-height: $h;
        border-radius:$h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 6px;
      }
    }
    > .new{
      position: absolute;
      bottom: 10px;
      button{
        background: transparent;
        border:none;
        color:$color-unselected-word;
        border-bottom: 1px solid;
        padding: 0 4px;

      }
    }
  }

</style>