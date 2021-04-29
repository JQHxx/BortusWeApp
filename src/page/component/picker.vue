<style lang="less">
@import '../../common/lib/weui.less';

.picker {
  padding: 10px 13px;
  background-color: #ffffff;
}
</style>
<template>
  <div class="container">
    <head title="picker" />

    <div class="page-body">
      <div class="page-section">
        <div class="weui-cells__title">地区选择器</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">当前选择</div>
            </div>
            <div class="weui-cell__bd">
              <picker
                @change="bindPickerChange"
                v-model="index"
                v-bind:range="array"
              >
                <div class="weui-input">{{ array[index] }}</div>
              </picker>
            </div>
          </div>
        </div>

        <div class="weui-cells__title">时间选择器</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">当前选择</div>
            </div>
            <div class="weui-cell__bd">
              <picker
                mode="time"
                v-model="time"
                start="09:01"
                end="21:01"
                @change="bindTimeChange"
              >
                <div class="weui-input">{{ time }}</div>
              </picker>
            </div>
          </div>
        </div>

        <div class="weui-cells__title">日期选择器</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">当前选择</div>
            </div>
            <div class="weui-cell__bd">
              <picker
                mode="date"
                v-model="date"
                start="2015-09-01"
                end="2017-09-01"
                @change="bindDateChange"
              >
                <div class="weui-input">{{ date }}</div>
              </picker>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template is="foot" />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'picker',
      path: 'page/component/pages/picker/picker',
    };
  },

  data: {
    array: ['中国', '美国', '巴西', '日本'],
    index: 0,
    date: '2016-09-01',
    time: '12:01',
  },

  methods: {
    bindPickerChange(e: WechatMiniprogram.PickerChange) {
      console.log('picker发送选择改变，携带值为', e.detail.value);
      this.index = e.detail.value as unknown as number
    },

    bindDateChange(e: WechatMiniprogram.PickerChange) {
      this.date = e.detail.value as unknown as string
    },

    bindTimeChange(e: WechatMiniprogram.PickerChange) {
      this.time = e.detail.value as unknown as string
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "picker"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>