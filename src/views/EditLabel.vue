<template>
  <Layout>
    <div class="navBar">
      <Icon name="left"/>
      <span class="title">编辑标签</span>
      <span class="rightLine"></span>
    </div>
    <FormItem :value="tag.name" field-name="现标签名" disabled="disabled"/>
    <div class="form-wrapper">
      <FormItem :value="name" field-name="新标签名" placeholder="如需修改标签名，请在此输入"/>
    </div>
    <div class="deleteTag-wrapper">
      <Button class="deleteTag">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import FormItem from '@/components/FormItem.vue';
  import {Component} from 'vue-property-decorator';
  import {tagListModel} from '@/models/tagListModel';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FormItem}
  })
  export default class EditLabel extends Vue {
    tag?: { id: string; name: string } = undefined;

    created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
      if (tag) {

        this.tag = tag;
      } else {
        this.$router.replace('/404');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/uniform-color.scss";

  .navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    padding: 10px 16px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      background: $color-selected-icon;
      height: 4px;
      width: 100%;
    }

    > .title {
      font-size: 20px;
      color: $color-selected-word;
    }

    > .icon {
      width: 24px;
      height: 24px;
      fill: $color-selected-word;

    }

    > .rightLine {
      width: 24px;
      height: 24px;
    }
  }

  .form-wrapper {
    @extend %outerShadow;
  }

  .deleteTag-wrapper {
    text-align: center;
    margin-top: 44px;
  }
</style>