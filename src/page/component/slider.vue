<style lang="less">
slider {
  margin: 0;
}
</style>
<template>
<div class="container">
  <head title="slider"/>

  <div class="page-body">
    <div class="page-section page-section-gap">
      <div class="page-section-title">设置step</div>
      <div class="body-div">
        <slider value="60" @change="slider2change" step="5"/>
      </div>
    </div>

    <div class="page-section page-section-gap">
      <div class="page-section-title">显示当前value</div>
      <div class="body-div">
        <slider value="50" @change="slider3change" show-value/>
      </div>
    </div>

    <div class="page-section page-section-gap">
      <div class="page-section-title">设置最小/最大值</div>
      <div class="body-div">
        <slider value="100" @change="slider4change" min="50" max="200" show-value/>
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
      title: 'slider',
      path: 'page/component/slider'
    }
  },
  methods: {
    slider2change(e: WechatMiniprogram.SliderChange) {
      console.log('slider2发生change事件，携带值为', e.detail.value)
    },
    slider3change(e: WechatMiniprogram.SliderChange) {
      console.log('slider3发生change事件，携带值为', e.detail.value)
    },
    slider4change(e: WechatMiniprogram.SliderChange) {
      console.log('slider4发生change事件，携带值为', e.detail.value)
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "slider"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>