<template>
  <Layout>
    <div class="navBar">
      <span @click="backToLebal"><Icon class="icon" name="left"/></span>
      <span class="title">编辑标签</span>
      <span class="rightLine"></span>
    </div>
    <FormItem :value="tag.name" field-name="现标签名" disabled="disabled"/>
    <div class="form-wrapper">
      <FormItem :value="''" @update:value="updateTag" field-name="新标签名" placeholder="如需修改标签名，请在此输入"/>
    </div>
    <div class="button-wrapper">
      <Button class="modifyTag" @click.native="modifyTag">修改标签</Button>
      <Button class="deleteTag" @click.native="remove">删除标签</Button>
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
    modifiedTag = '';

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
    backToLebal(){
      this.$router.replace('/labels');
    }
    updateTag(name: string) {
      this.modifiedTag = name;
    }

    modifyTag() {
      if (this.tag) {
        const message = tagListModel.update(this.tag.id, this.modifiedTag);
        if (message === 'duplicated') {
          window.alert('已存在相同名称标签');
        } else if (message === 'Not found') {
          window.alert('该标签不存在');
        } else if (message === 'success') {
          window.alert('修改成功');
        }
        this.$router.replace('/labels');
      }
    }

    remove(id: string) {
      if (this.tag) {
        const message = tagListModel.remove(this.tag.id);
        if (message === 'success') {
          window.alert('删除成功');
          this.$router.replace('/labels');
        }else{
          window.alert('删除失败');
        }
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

    > span {
      > .icon {
      width: 20px;
      height: 20px;
      fill: $color-selected-word;
        margin-top: 5px;
      }
    }
    > .rightLine {
      width: 20px;
      height: 20px;
    }
  }

  .form-wrapper {
    @extend %outerShadow;
  }

  .button-wrapper {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 44px;

    > .deleteTag {
      background: $color-alert;
    }

    > .modifyTag {
      background: $color-selected-icon;
    }
  }
</style>