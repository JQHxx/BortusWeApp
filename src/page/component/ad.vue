<template>
  <div class="container">
    <head title="ad"></head>
    <div class="page-body">
      <div class="page-section page-section-gap">
        <div class="page-section-title">关注卡片</div>
        <ad unit-id="adunit-demo4"></ad>
      </div>
      <div v-if="platform === 'ios'" class="page-section page-section-gap">
        <div class="page-section-title">下载卡片</div>
        <ad unit-id="adunit-demo8"></ad>
      </div>
      <div v-else class="page-section page-section-gap">
        <div class="page-section-title">下载卡片</div>
        <ad unit-id="adunit-demo9"></ad>
      </div>
      <div v-if="platform === 'ios'" class="page-section page-section-gap">
        <div class="page-section-title">应用推广</div>
        <ad unit-id="adunit-demo2"></ad>
      </div>
      <div v-else class="page-section page-section-gap">
        <div class="page-section-title">应用推广</div>
        <ad unit-id="adunit-demo7"></ad>
      </div>
      <div class="page-section page-section-gap">
        <div class="page-section-title">公众号推广</div>
        <ad unit-id="adunit-demo3"></ad>
      </div>
      <div class="page-section page-section-gap">
        <div class="page-section-title">活动推广</div>
        <ad unit-id="adunit-demo5"></ad>
      </div>
      <div class="page-section page-section-gap">
        <div class="page-section-title">商品推广</div>
        <ad unit-id="adunit-demo6"></ad>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
    onShareAppMessage() {
        return {
            title: 'ad',
            path: 'page/component/ad'
        }
    },
    data: {
        platform: wx.getSystemInfoSync().platform
    }
});
</script>
<config>
{
    "navigationBarTitleText": "ad",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>