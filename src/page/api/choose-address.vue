<style lang="wxss">
@import '../../common/lib/weui.wxss';
form {
  margin-top: 15px;
}
.weui-cell__bd {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  min-height: 30px;
}
</style>
<template>
  <div class="container">
    <head title="chooseAddress" />
    <form>
      <div class="page-section">
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">收货人姓名</div>
            </div>
            <div class="weui-cell__bd">
              {{ addressInfo.userName }}
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">邮编</div>
            </div>
            <div class="weui-cell__bd">
              {{ addressInfo.postalCode }}
            </div>
          </div>
          <div class="weui-cell weui-cell_input region">
            <div class="weui-cell__hd">
              <div class="weui-label">地区</div>
            </div>
            <div class="weui-cell__bd">
              {{ addressInfo.provinceName }}
              {{ addressInfo.cityName }}
              {{ addressInfo.countyName }}
            </div>
          </div>
          <div class="weui-cell weui-cell_input detail">
            <div class="weui-cell__hd">
              <div class="weui-label">收货地址</div>
            </div>
            <div class="weui-cell__bd">
              {{ addressInfo.detailInfo }}
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">国家码</div>
            </div>
            <div class="weui-cell__bd">
              {{ addressInfo.nationalCode }}
            </div>
          </div>
          <div class="weui-cell weui-cell_input">
            <div class="weui-cell__hd">
              <div class="weui-label">手机号码</div>
            </div>
            <div class="weui-cell__bd">
              {{ addressInfo.telNumber }}
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="page-body">
      <div class="btn-area">
        <button type="primary" @tap="chooseAddress">获取收货地址</button>
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
      title: '收货地址',
      path: 'packageAPI/pages/choose-address/choose-address',
    };
  },

  data: {
    addressInfo: {} as WechatMiniprogram.ChooseAddressSuccessCallbackResult,
  },
  methods: {
    chooseAddress() {
      wx.chooseAddress({
        success: (res) => {
          this.addressInfo = res
        },
        fail(err) {
          console.log(err);
        },
      });
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "收货地址",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>