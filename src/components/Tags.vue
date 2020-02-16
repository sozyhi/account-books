<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagsSource" :key="tag" @click="toggle(tag)"
          :class="{selected: selectedTags.indexOf(tag)>=0}">{{tag}}</li>
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
  export default class Tags extends Vue{
    @Prop(Array) readonly tagsSource: string[] | undefined;
    selectedTags: string[]=[];
    toggle(tag: string){
      const index = this.selectedTags.indexOf(tag);
      if(this.selectedTags.length === 0){
        this.selectedTags.push(tag)
      }else if(this.selectedTags.length === 1){
        if(index>=0){
          this.selectedTags.splice(index,1);
        }else {
          this.selectedTags = [];
          this.selectedTags.push(tag)
        }
      }

    }
    create(){
      const name = window.prompt('请输入标签名');
      if(name === ''){
          window.alert('标签名不能为空');
      }else if(this.tagsSource){
        if(this.tagsSource.indexOf(name)<0){
          this.$emit('update:tagsSource',[...this.tagsSource,name])
        }else {
          window.alert('请勿重复添加');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/uniform-color.scss";
  .tags{
    padding: 16px;
    flex-grow: 1;
    position: relative;
    > .current{
      display:flex;
      flex-wrap: wrap;
      > li{
        overflow:hidden;
        background: $color-background;
        $h:24px;
        height:$h;
        line-height: $h;
        border-radius:$h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 6px;
        &.selected{
          background: $color-selected-icon;
          color: #ffffff;
        }
      }
    }
    > .new{
      position: absolute;
      bottom: 10px;
      button{
        background: transparent;
        border:none;
        color:$color-unselected-word;
        border-bottom: 1px solid;
        padding: 0 4px;

      }
    }
  }

</style>