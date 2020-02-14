<template>
  <nav>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />
      统计
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels" />
      标签
    </router-link>
  </nav>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  nav {
    display:flex;
    box-shadow: 0 0 3px rgba(0,0,0,0.2);

    > .item{
      font-size: 12px;
      color:#999999;
      padding: 2px 0;
      width: 33.33333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon{
        width: 32px;
        height: 32px;
      }
    }

    > .item.selected{
        color:#4A4A4A;
      >.icon{
        fill:#F3543F;
        stroke-width:3px;
      }
    }
  }
</style>