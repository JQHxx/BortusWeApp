<style lang="less">
.navigator-hover button{
  background-color: #DEDEDE;
}
.other-navigator-hover button{
  background-color: #DEDEDE;
}
</style>
<template>
<div class="container">
  <head title="navigator"/>
  <div class="page-body">
    <div class="btn-area">
      <navigator url="navigate?title=navigate" hover-class="ohter-navigator">
       <button type="default">跳转到新页面</button>
      </navigator>
      <navigator url="redirect?title=redirect" redirect hover-class="other-navigator-hover">
        <button type="default">在当前页打开</button>
      </navigator>
      <navigator target="miniProgram" hover-class="other-navigator-hover" open-type="navigate" app-id="wx4f1b24bdc99fa23b" version="release">
        <button type="default">打开小程序</button>
      </navigator>
    </div>
  </div>
  <foot />
</div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'navigator',
      path: 'page/component/navigator'
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "navigator",
    "usingComponents": {
        "head": "../../../common/head",
        "foot": "../../../common/foot"
    }
}
</config>