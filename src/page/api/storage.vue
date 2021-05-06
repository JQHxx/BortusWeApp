<style lang="wxss">
@import '../../common/lib/weui.wxss';
</style>
<template>
  <div class="container">
    <head title="get/set/clearStorage" />
    <div class="page-body">
      <div class="page-section">
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">key</div>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                placeholder="请输入key"
                name="key"
                v-model="key"
                @input="keyChange($event.$wx)"
              />
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">value</div>
            </div>
            <div class="weui-cell__bd">
              <input
                class="weui-input"
                type="text"
                placeholder="请输入value"
                name="data"
                v-model="data"
                @input="dataChange($event.$wx)"
              />
            </div>
          </div>
        </div>
        <div class="btn-area">
          <button type="primary" @tap="setStorage">存储数据</button>
          <button @tap="getStorage">读取数据</button>
          <button @tap="clearStorage">清理数据</button>
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
      title: '数据存储',
      path: '/page/api/storage',
    };
  },
  data: {
    key: '',
    data: '',
    dialog: {
      title: '',
      content: '',
      hidden: true,
    },
  },

  methods: {
    keyChange(e: WechatMiniprogram.Input) {
      this.key = e.detail.value;
    },
    dataChange(e: WechatMiniprogram.Input) {
      this.data = e.detail.value;
    },
    getStorage() {
      let storageData;

      if (this.key.length === 0) {
        wx.showModal({
          title: '读取数据失败',
          content: 'key 不能为空',
        });
      } else {
        storageData = wx.getStorageSync(this.key);
        console.log(storageData);
        if (storageData === '') {
          this.data = storageData
          wx.showModal({
            title: '读取数据失败',
            content: '找不到 key 对应的数据',
          });
        } else {
          this.data = storageData
          wx.showModal({
            title: '读取数据成功',
            content: storageData,
          });
        }
      }
    },

    setStorage() {
      if (this.key.length === 0) {
        wx.showModal({
          title: '保存数据失败',
          content: 'key 不能为空',
        });
      } else {
        wx.setStorageSync(this.key, this.data);
        wx.showModal({
          title: '存储数据成功',
        });
      }
    },
    clearStorage() {
      wx.clearStorageSync();
      this.key = ''
      this.data = ''
      wx.showModal({
        title: '清除数据成功',
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "数据存储",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>