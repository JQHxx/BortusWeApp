<style lang="less">
.page-section-ctn {
  text-align: center;
}

.image {
  margin-top: 15px;
  width: 245px;
  height: 284px;
}
</style>
<template>
<div class="container">
  <head title="map"/>
  <div class="page-body">
    <div class="page-section page-section-gap">
      <div class="page-section-title">经典</div>
      <div class="page-section-ctn">
        <image class="image" src="../../resources/images/custom_map_template_1.png"/>
      </div>
    </div>
    <div class="page-section page-section-gap">
      <div class="page-section-title">墨渊</div>
      <div class="page-section-ctn">
        <image class="image" src="../../resources/images/custom_map_template_2.png"/>
      </div>
    </div>
    <div class="page-section page-section-gap">
      <div class="page-section-title">白浅</div>
      <div class="page-section-ctn">
        <image class="image" src="../../resources/images/custom_map_template_3.png"/>
      </div>
    </div>
    <div class="page-section page-section-gap">
      <div class="page-section-title">玉露</div>
      <div class="page-section-ctn">
        <image class="image" src="../../resources/images/custom_map_template_4.png"/>
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
      title: 'map底图样式',
      path: 'page/component/map-styles'
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "map底图样式",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>