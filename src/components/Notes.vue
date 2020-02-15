<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="点击填写备注">
    </label>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Notes'
  };
</script>

<style lang="scss" scoped>
  .notes{
    display: flex;
    align-items: center;
    background:#F3F3F3;
    padding: 0 16px;
    >.name{
      padding-right: 16px;
    }
    input{
      padding: 16px 0;
      flex-grow: 1;
      background: transparent;
      border: none;

    }
  }

</style>