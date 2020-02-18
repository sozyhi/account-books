<template>
    <button class="button">
      <slot></slot>
    </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {
  }
</script>

<style lang="scss" scoped>
  .button {
    color: white;
    border-radius: 4px;
    height: 40px;
    padding: 0 16px;
  }
</style>