<template>
  <Layout>
    <ul class="type">
      <li :class="value === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="value === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
    <div class="tagsManage">
      <div class="tagList">
        <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="tag in tags" :key="tag.id">
          <span>{{tag.name}}</span>
          <Icon name="right"/>
        </router-link>
      </div>
      <div class="addTags-wrapper">
        <Button class="addTags" @click.native="addTags">新增标签</Button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button}
  })
  export default class Labels extends Vue {
    tags = window.tagList;

    addTags() {
      const name = window.prompt('请输入标签名');
      if (name) {
        window.createTag(name);
      }
    }

    value = '-';

    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.value = type;
    }
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

  .tagList {
    padding: 0 16px 0 16px;
    font-size: 14px;

    > .tag {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid gainsboro;
    }
  }

  .addTags {
    background: $color-selected-icon;
    &-wrapper {
      text-align: center;
      margin-top: 44px;
    }
  }
</style>