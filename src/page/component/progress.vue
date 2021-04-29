<style lang="less">
progress{
  width: 100%;
}
.progress-box{
  display: flex;
  height: 25px;
  margin-bottom: 30px;
}
.progress-cancel{
  margin-left: 20px;
}
</style>
<template>
<div class="container">
  <head title="progress"/>

  <div class="page-body">
    <div class="page-section page-section-gap">
      <div class="progress-box">
        <progress percent="20" show-info stroke-width="3"/>
      </div>
      <div class="progress-box">
        <progress percent="40" active stroke-width="3" />
        <icon class="progress-cancel" type="cancel"></icon>
      </div>
      <div class="progress-box">
        <progress percent="60" active stroke-width="3" />
      </div>
      <div class="progress-box">
        <progress percent="80" color="#10AEFF" active stroke-width="3" />
      </div>
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
      title: 'progress',
      path: 'page/component/progress'
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "progress"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>