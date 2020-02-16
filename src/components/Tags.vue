<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagsSource" :key="tag" @click="toggle(tag)"
          :class="{selected: selectedTag === tag}">{{tag}}
      </li>
    </ul>
    <div class="new">
      <button @click="create()">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop(Array) readonly tagsSource: string[] | undefined;
    @Prop(String) readonly value!: string;
    selectedTag = this.value;
    toggle(tag: string) {
      if (this.selectedTag === '') {
        this.selectedTag = tag;
      } else if (this.selectedTag !== '') {
        if (this.selectedTag === tag) {
          this.selectedTag = '';
        } else {
          this.selectedTag = tag;
        }
      }
      this.$emit('update:value', this.selectedTag);
    }

    create() {
      const name = window.prompt('请输入标签名');
      if (name === '') {
        window.alert('标签名不能为空');
      } else if (this.tagsSource) {
        if (this.tagsSource.indexOf(name) < 0) {
          this.$emit('update:tagsSource', [...this.tagsSource, name]);
        } else {
          window.alert('请勿重复添加');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/uniform-color.scss";

  .tags {
    padding: 16px;
    flex-grow: 1;
    position: relative;

    > .current {
      display: flex;
      flex-wrap: wrap;

      > li {
        overflow: hidden;
        background: $color-background;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 6px;

        &.selected {
          background: $color-selected-icon;
          color: #ffffff;
        }
      }
    }

    > .new {
      position: absolute;
      bottom: 10px;

      button {
        background: transparent;
        border: none;
        color: $color-unselected-word;
        border-bottom: 1px solid;
        padding: 0 4px;

      }
    }
  }

</style>