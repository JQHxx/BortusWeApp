<style lang="less">
.text-box{
  margin-bottom: 35px;
  padding: 20px 0;
  display: flex;
  min-height: 150px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: #353535;
  line-height: 2em;
}
</style>
<template>
  <div class="container">
    <head title="无障碍访问" />
    <div class="page-body">
      <div class="page-section">
        <div class="page-section-title">
          <text>无障碍访问说明</text>
        </div>
        <div class="page-section-spacing">
          <div class="text-box">
            <text>为了更好地满足视障人士\n对于小程序的访问需求\n基础库自2.7.1起，支持部分ARIA标签\n无障碍特性在读屏模式下可以访问</text>
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">
          <text>例子</text>
        </div>
        <div class="page-section-spacing">
          <div aria-role="button" aria-label="提交表单" style="text-align: center">提交</div>
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
            title: '无障碍访问',
            path: 'page/component/aria-component'
        }
    }
});
</script>
<config>
{
    "navigationBarTitleText": "aria-component",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>