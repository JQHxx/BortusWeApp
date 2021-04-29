<style lang="less">
button {
  margin: 20px 0;
}
.text-box {
  margin-bottom: 35px;
  padding: 20px 0;
  display: flex;
  min-height: 150px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: #353535;
  line-height: 2em;
}
</style>
<template>
  <div class="container">
    <head title="text" />

    <div class="page-body">
      <div class="page-section page-section-spacing">
        <div class="text-box" scroll-y="true" v-bind:scroll-top="scrollTop">
          <text>{{ text }}</text>
        </div>
        <button v-bind:disabled="!canAdd" @tap="add">add line</button>
        <button v-bind:disabled="!canRemove" @tap="remove">remove line</button>
      </div>
    </div>

    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const texts = [
  '2011年1月，微信1.0发布',
  '同年5月，微信2.0语音对讲发布',
  '10月，微信3.0新增摇一摇功能',
  '2012年3月，微信用户突破1亿',
  '4月份，微信4.0朋友圈发布',
  '同年7月，微信4.2发布公众平台',
  '2013年8月，微信5.0发布微信支付',
  '2014年9月，企业号发布',
  '同月，发布微信卡包',
  '2015年1月，微信第一条朋友圈广告',
  '2016年1月，企业微信发布',
  '2017年1月，小程序发布',
  '......',
];

wepy.page({
  onShareAppMessage() {
    return {
      title: 'text',
      path: 'page/component/pages/text/text',
    };
  },

  data: {
    text: '',
    canAdd: true,
    canRemove: false,
    extraLine: [''],
    scrollTop: 0
  },

  methods: {
    add() {
      this.extraLine.push(texts[this.extraLine.length % 12]);
      this.text = this.extraLine.join('\n')
      this.canAdd =  this.extraLine.length < 12
      this.canRemove = this.extraLine.length > 0

      setTimeout(() => {
        this.scrollTop = 99999
      }, 0);
    },
    remove() {
      if (this.extraLine.length > 0) {
        this.extraLine.pop();
        this.text = this.extraLine.join('\n')
        this.canAdd = this.extraLine.length < 12
        this.canRemove = this.extraLine.length > 0
      }
      setTimeout(() => {
        this.scrollTop = 99999
      }, 0);
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "text"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>