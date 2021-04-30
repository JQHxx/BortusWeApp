<style lang="less">
.flex-wrp{
  margin-top: 30px;
  display:flex;
}
.flex-item{
  width: 100px;
  height: 150px;
  font-size: 13px;
}
.flex-item-V{
  margin: 0 auto;
  width: 150px;
  height: 100px;
}

</style>
<template>
<div class="container">
  <head title="view"/>
  <div class="page-body">
    <div class="page-section">
      <div class="page-section-title">
        <text>flex-direction: row\n横向布局</text>
      </div>
      <div class="page-section-spacing">
        <div class="flex-wrp" style="flex-direction:row;">
          <div class="flex-item demo-text-1"></div>
          <div class="flex-item demo-text-2"></div>
          <div class="flex-item demo-text-3"></div>
        </div>
      </div>
    </div>
    <div class="page-section">
      <div class="page-section-title">
        <text>flex-direction: column\n纵向布局</text>
      </div>
      <div class="flex-wrp" style="flex-direction:column;">
        <div class="flex-item flex-item-V demo-text-1"></div>
        <div class="flex-item flex-item-V demo-text-2"></div>
        <div class="flex-item flex-item-V demo-text-3"></div>
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
      title: 'view',
      path: 'page/component/view'
    }
  },
});
</script>
<config>
{
    "navigationBarTitleText": "view",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>