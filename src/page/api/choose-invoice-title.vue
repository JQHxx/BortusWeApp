<style lang="wxss">
@import '../../common/lib/weui.wxss';
form {
  margin-top: 15px;
}

.weui-cell__bd {
  display: flex;
  justify-content: flex-start;
  padding: 10px 0;
  min-height: 30px;
  align-items: center;
}
</style>
<template>
  <div class="container">
    <head title="chooseInvoiceTitle" />
    <div class="page-body">
      <form>
        <div class="page-section">
          <div class="weui-cells weui-cells_after-title">
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">抬头类型</div>
              </div>
              <div class="weui-cell__bd">
                {{ type !== '' ? (type === '0' ? '单位' : '个人') : '' }}
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">抬头名称</div>
              </div>
              <div class="weui-cell__bd">
                {{ title }}
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">抬头税号</div>
              </div>
              <div class="weui-cell__bd">
                {{ taxNumber }}
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">单位地址</div>
              </div>
              <div class="weui-cell__bd">
                {{ companyAddress }}
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">手机号码</div>
              </div>
              <div class="weui-cell__bd">
                {{ telephone }}
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">银行名称</div>
              </div>
              <div class="weui-cell__bd">
                {{ bankName }}
              </div>
            </div>
            <div class="weui-cell weui-cell_input">
              <div class="weui-cell__hd">
                <div class="weui-label">银行账号</div>
              </div>
              <div class="weui-cell__bd">
                {{ bankAccount }}
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="btn-area">
        <button type="primary" @tap="chooseInvoiceTitle">获取发票抬头</button>
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
      title: '获取发票抬头',
      path: '/page/api/choose-invoice-title',
    };
  },
  data: {
    type: 0,
    title: '',
    taxNumber: '',
    companyAddress: '',
    telephone: '',
    bankName: '',
    bankAccount: '',
  },
  methods: {
    chooseInvoiceTitle() {
      wx.chooseInvoiceTitle({
        success: (res) => {
          this.type = res.type
          this.title = res.title
          this.taxNumber = res.taxNumber
          this.companyAddress = res.companyAddress
          this.telephone = res.telephone
          this.bankName = res.bankName
          this.bankAccount = res.bankAccount
        },
        fail: (err) => {
          console.error(err);
        },
      });
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "获取发票抬头",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>