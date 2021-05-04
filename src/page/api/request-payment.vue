<style lang="wxss">
.page-section {
  width: auto;
  margin: 15px;
  padding: 62px 15px;
  background-color: var(--weui-BG-2);
  text-align: center;
  font-size: 14px;
}
.desc {
  color: var(--weui-FG-1);
}
.price {
  margin-top: 15px;
  margin-bottom: 13px;
  position: relative;
  display: inline-block;
  font-size: 39px;
  line-height: 1;
}
.price:before {
  content: '¥';
  position: absolute;
  font-size: 20px;
  top: 4px;
  left: -20px;
}
</style>
<template>
  <div class="container">
    <head title="requestPayment" />
    <div class="page-body">
      <div class="page-section">
        <div>支付金额</div>
        <div class="price">0.01</div>
        <div class="desc">实际接口应用中可自定义金额</div>
        <div class="btn-area">
          <button type="primary" @tap="requestPayment" v-bind:loading="loading">
            支付
          </button>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const app = getApp()

wepy.page({
  onShareAppMessage() {
    return {
      title: '发起支付',
      path: '/page/api/request-payment',
    };
  },
  data: {
    loading: false
  },
  onLoad() {},
  methods: {
    requestPayment() {
      const self = this;
      this.loading = true

      // 此处需要先调用wx.login方法获取code，然后在服务端调用微信接口使用code换取下单用户的openId
      // 具体文档参考https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html?t=20161230#wxloginobject
      app.getUserOpenId((err:any, openid: string) => {
        if (!err) {
          wx.cloud.callFunction({
            name: 'pay',
            data: {
              action: 'unifiedorder',
              userInfo: {
                openId: openid,
              },
              price: 0.01,
            },
            success: (res) => {
              console.warn(
                '[云函数] [openapi] templateMessage.send 调用成功：',
                res
              );
              const data = (res.result! as any).data;
              wx.requestPayment({
                timeStamp: data.time_stamp,
                nonceStr: data.nonce_str,
                package: `prepay_id=${data.prepay_id}`,
                signType: 'MD5',
                paySign: data.sign,
                success: () => {
                  wx.showToast({ title: '支付成功' });
                },
              });
            },
            fail: (err) => {
              wx.showToast({
                icon: 'none',
                title: '支付失败',
              });
              console.error(
                '[云函数] [openapi] templateMessage.send 调用失败：',
                err
              );
            },
          });
        } else {
          console.log('err:', err);
          this.loading = false
        }
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "发起支付",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>