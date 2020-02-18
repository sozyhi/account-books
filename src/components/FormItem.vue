<template>
  <div>
    <label class="formItem">
      <span class="name">{{fieldName}}</span>
      <input type="text" :value="value" @input="notesChange($event.target.value)" :placeholder="placeholder"
             :disabled="disabled">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
    @Prop(String) readonly value!: string;
    @Prop({required: true}) fieldName!: string;
    @Prop() placeholder?: string;
    @Prop() disabled?: string;


    notesChange(value: string) {
      this.$emit('update:value', value);
    }

  }
</script>

<style lang="scss" scoped>
  .formItem {
    display: flex;
    align-items: center;
    padding: 0 16px;

    > .name {
      padding-right: 16px;
    }

    input {
      padding: 16px 0;
      flex-grow: 1;
      background: transparent;
      border: none;

    }
  }

</style>