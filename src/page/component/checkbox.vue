<style lang="wxss">
@import '../../common/lib/weui.wxss';

.checkbox {
  margin-right: 10px;
}
</style>
<template>
  <div class="container">
    <head title="checkbox" />
    <div class="page-body">
      <div class="page-section page-section-gap">
        <div class="page-section-title">默认样式</div>
        <label class="checkbox">
          <checkbox value="cb" checked="true" />选中
        </label>
        <label class="checkbox"> <checkbox value="cb" />未选中 </label>
      </div>
      <div class="page-section">
        <div class="page-section-title">推荐展示样式</div>
        <div class="weui-cells weui-cells_after-title">
          <checkbox-group @change="checkboxChange($event.$wx)">
            <label
              class="weui-cell weui-check__label"
              v-for="item in items"
              v-bind:key="item.value">
              <div class="weui-cell__hd">
                <checkbox v-bind:value="item.value" v-bind:checked="item.checked" />
              </div>
              <div class="weui-cell__bd">{{ item.name }}</div>
            </label>
          </checkbox-group>
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
      title: 'checkbox',
      path: 'page/component/checkbox',
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
    checkboxChange(e: WechatMiniprogram.CheckboxGroupChange) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);

      const items = this.items;
      const values = e.detail.value;
      for (let i = 0, lenI = items.length; i < lenI; ++i) {
        items[i].checked = false;
        for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].value === values[j]) {
            items[i].checked = true;
            break;
          }
        }
      }
      this.items = items;
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "checkbox",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>