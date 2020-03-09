<template>
  <Layout>
    <div class="navBar">
      <span @click="backToLabel"><Icon class="icon" name="left"/></span>
      <span class="title">编辑标签</span>
      <span class="rightLine"></span>
    </div>
    <FormItem :value="currentTag.name" field-name="现标签名" disabled="disabled"/>
    <div class="form-wrapper">
      <FormItem :value="''" @update:value="modifyTag" field-name="新标签名" placeholder="如需修改标签名，请在此输入"/>
    </div>
    <div class="button-wrapper">
      <Button class="updateTag" @click.native="updateTag">修改标签</Button>
      <Button class="deleteTag" @click.native="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FormItem},
  })
  export default class EditLabel extends Vue {
    get currentTag() {
      return this.$store.state.currentTag;
    }

    modifiedName = '';

    created() {
      this.$store.commit('fetchTags');
      this.$store.commit('setCurrentTag', this.$route.params.id);
      if (!this.currentTag) {
        this.$router.replace('/404');
      }
    }

    backToLabel() {
      this.$router.replace('/labels');
    }

    modifyTag(name: string) {
      this.modifiedName = name;
    }

    updateTag() {
      const id = this.currentTag.id;
      const name = this.modifiedName;
      if (this.currentTag) {
        this.$store.commit('updateTag', {id: id, name: name});
        this.$router.back();
      }
    }

    remove() {
      if (this.currentTag) {
        this.$store.commit('removeTag', this.currentTag.id);
        this.$router.back();
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

    > .updateTag {
      background: $color-selected-icon;
    }
  }
</style>