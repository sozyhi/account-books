<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag.name)"
          :class="{selected: selectedTag === tag.name}">{{tag.name}}
      </li>
    </ul>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop} from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper';

  @Component
  export default class Tags extends mixins(TagHelper) {
    @Prop(String) readonly value!: string;

    get tagList() {
      return this.$store.state.tagList;
    }

    selectedTag = this.value;

    created() {
      this.$store.commit('fetchTags');
    }

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