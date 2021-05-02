<style lang="wxss">
@import '../../common/lib/weui.wxss';

.radio {
  margin-right: 10px;
}
</style>
<template>
  <div class="container">
    <head title="radio" />
    <div class="page-body">
      <div class="page-section page-section-gap">
        <div class="page-section-title">默认样式</div>
        <label class="radio"> <radio value="r1" checked="true" />选中 </label>
        <label class="radio"> <radio value="r2" />未选中 </label>
      </div>
      <div class="page-section">
        <div class="page-section-title">推荐展示样式</div>
        <div class="weui-cells weui-cells_after-title">
          <radio-group @change="radioChange($event.$wx)">
            <label class="weui-cell weui-check__label" v-for="item in items" v-bind:key="item.value">
              <div class="weui-cell__hd">
                <radio v-bind:value="item.value" checked="true" />
              </div>
              <div class="weui-cell__bd">{{ item.name }}</div>
            </label>
          </radio-group>
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
      title: 'radio',
      path: 'page/component/pages/radio/radio',
    };
  },

  data: {
    items: [
      { value: 'USA', name: '美国' },
      { value: 'CHN', name: '中国', checked: true },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
      { value: 'ENG', name: '英国' },
      { value: 'FRA', name: '法国' },
    ],
  },

  methods: {
    radioChange(e: WechatMiniprogram.RadioGroupChange) {
      console.log('radio发生change事件，携带value值为：', e.detail.value);
      const items = this.items;
      for (let i = 0, len = items.length; i < len; ++i) {
        items[i].checked = items[i].value === e.detail.value;
      }
      this.items = items;
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "radio",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>