<style lang="less">
.label-1,
.label-2 {
  margin: 15px 0;
}
.label-3-text {
  color: #576b95;
  font-size: 14px;
}
.checkbox-3 {
  display: block;
  margin: 15px 0;
}
</style>
<template>
  <div class="container">
    <head title="label" />

    <div class="page-body">
      <div class="page-section page-section-gap">
        <div class="page-section-title">表单组件在label内</div>
        <checkbox-group class="group" @change="checkboxChange">
          <div
            class="label-1"
            v-for="item in checkboxItems"
            v-bind:key="item.key"
          >
            <label>
              <checkbox
                v-bind:value="item.name"
                v-bind:checked="item.checked"
              ></checkbox>
              <text class="label-1-text">{{ item.value }}</text>
            </label>
          </div>
        </checkbox-group>
      </div>

      <div class="page-section page-section-gap">
        <div class="page-section-title">label用for标识表单组件</div>
        <radio-group class="group" @change="radioChange">
          <div
            class="label-2"
            v-for="item in radioItems"
            v-bind:key="item.name"
          >
            <radio
              v-bind:id="item.name"
              v-bind:value="item.name"
              v-bind:checked="item.checked"
            ></radio>
            <label class="label-2-text" v-bind:for="item.name"
              ><text>{{ item.name }}</text></label
            >
          </div>
        </radio-group>
      </div>

      <div class="page-section page-section-gap">
        <div class="page-section-title">label内有多个时选中第一个</div>
        <label class="label-3">
          <checkbox class="checkbox-3">选项一</checkbox>
          <checkbox class="checkbox-3">选项二</checkbox>
          <div class="label-3-text">
            点击该label下的文字默认选中第一个checkbox
          </div>
        </label>
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
      title: 'label',
      path: 'page/component/pages/label/label',
    };
  },

  data: {
    checkboxItems: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
    ],
    radioItems: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
    ],
    hidden: false,
  },

  methods: {
    checkboxChange(e: WechatMiniprogram.CheckboxGroupChange) {
      const checked = e.detail.value;
      for (let i = 0; i < this.checkboxItems.length; i++) {
        if (checked.indexOf(this.checkboxItems[i].name) !== -1) {
           console.log('checkboxItems[' + i + '] is checked')
        } else {
          console.log('checkboxItems[' + i + '] is no checked')
        }
      }
    },

    radioChange(e: WechatMiniprogram.CheckboxGroupChange) {
      const checked = e.detail.value;
      for (let i = 0; i < this.radioItems.length; i++) {
        if (checked.indexOf(this.radioItems[i].name) !== -1) {
          console.log('radioItems[' + i + '] is checked')
        } else {
          console.log('radioItems[' + i + '] is no checked')
        }
      }
    }
  },
});
</script>
<config>
{
    "navigationBarTitleText": "label"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>