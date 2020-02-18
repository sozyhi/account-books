<template>
  <div>
    <label class="formItem">
      <span class="name">{{fieldName}}</span>
      <input type="text" v-model="notes" @change="notesChange" :placeholder="placeholder">
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

    notes = this.value;

    notesChange() {
      this.$emit('update:value', this.notes);
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