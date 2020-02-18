<template>
  <Layout>
    <ul class="type">
      <li :class="value === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="value === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
    <div class="tagsManage">
      <div class="tagList">
        <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="tag in tags" :key="tag.id"><span>{{tag.name}}</span>
          <Icon name="right"/>
        </router-link>
      </div>
      <div class="addTags-wrapper">
        <button class="addTags" @click="addTags">新增标签</button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {tagListModel} from '@/models/tagListModel';
  tagListModel.fetch();
  @Component
  export default class Labels extends Vue {
    tags = tagListModel.data;
    addTags(){
      const  name =window.prompt('请输入标签名');
      if (name){
        const message = tagListModel.create(name);
        if(message === 'duplicated'){
          window.alert('请勿重复添加');
        }else if(message === 'success'){
          window.alert('添加成功');
        }
      }
    }
    value= '-';
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

    >.tag {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid gainsboro;
    }
  }

  .addTags {

    background: #767676;
    color: white;
    border-radius: 4px;
    height: 40px;
    padding: 0 16px;

    &-wrapper {
      text-align: center;
      margin-top: 44px;
    }
  }
</style>