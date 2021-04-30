<style lang="less" src="../../common/lib/common.less"></style>
<style lang="less">
.weui-agree .weui-agree__text {
  display: inline;
}
</style>
<template>
  <div class="page" v-bind:data-weui-theme="theme">
    <mp-toptips v-bind:msg="error" type="error" v-bind:show="error"></mp-toptips>
    <mp-form-page
      title="表单结构"
      subtitle="展示表单页面的信息结构样式, 分别由头部区域/控件区域/提示区域/操作区域和底部信息区域组成。"
    >
      <mp-form id="form" v-bind:rules="rules" v-bind:models="formData">
        <mp-cells title="单选列表项">
          <mp-checkbox-group
            prop="radio"
            v-bind:multi="false"
            @change="radioChange">
            <mp-checkbox
              v-for="item in radioItems"
              v-bind:key="item.value"
              v-bind:label="item.name"
              v-bind:value="item.value"
              v-bind:checked="item.checked"
            ></mp-checkbox>
          </mp-checkbox-group>
        </mp-cells>
        <mp-cells title="复选列表项">
          <mp-checkbox-group
            prop="checkbox"
            v-bind:multi="true"
            @change="checkboxChange"
          >
            <mp-checkbox
              v-for="item in checkboxItems"
              v-bind:key="item.value"
              v-bind:label="item.name"
              v-bind:value="item.value"
              v-bind:checked="item.checked"
            ></mp-checkbox>
          </mp-checkbox-group>
        </mp-cells>
        <mp-cells title="表单" footer="底部说明文字底部说明文字">
          <mp-cell prop="name" title="姓名" ext-class="">
            <input
              @input="formInputChange"
              data-field="name"
              class="weui-input"
              placeholder="请输入姓名"
            />
          </mp-cell>
          <mp-cell prop="qq" title="qq" ext-class="">
            <input
              @input="formInputChange"
              data-field="qq"
              class="weui-input"
              placeholder="请输入qq"
            />
          </mp-cell>
          <mp-cell prop="mobile" title="手机号" ext-class=" weui-cell_vcode">
            <input
              @input="formInputChange"
              data-field="mobile"
              class="weui-input"
              placeholder="请输入手机号"
            />
            <button slot="footer" type="default" class="weui-vcode-btn">
              获取验证码
            </button>
          </mp-cell>
          <mp-cell prop="date" title="日期" ext-class="">
            <picker
              data-field="date"
              mode="date"
              v-model="date"
              start="2015-09-01"
              end="2017-09-01"
              @change="bindDateChange"
            >
              <div class="weui-input">{{ date }}</div>
            </picker>
          </mp-cell>
          <mp-cell prop="vcode" title="验证码" ext-class=" weui-cell_vcode">
            <input
              @input="formInputChange"
              data-field="vcode"
              class="weui-input"
              placeholder="请输入验证码"
            />
            <image
              slot="footer"
              class="weui-vcode-img"
              src="../images/vcode.jpg"
              style="width: 108px"
            ></image>
          </mp-cell>
        </mp-cells>
        <mp-cells title="提交后表单项报错">
          <mp-cell show-error prop="idcard" title="卡号" ext-class="">
            <input
              @input="formInputChange"
              data-field="idcard"
              class="weui-input"
              placeholder="请输入卡号"
            />
          </mp-cell>
        </mp-cells>
        <mp-cells title="开关">
          <mp-cell title="标题文字" ext-class="">
            <switch slot="footer" checked />
          </mp-cell>
        </mp-cells>
        <mp-cells title="文本框">
          <mp-cell title="标题文字" ext-class="">
            <input class="weui-input" placeholder="请输入文本" />
          </mp-cell>
        </mp-cells>
        <mp-cells title="文本域">
          <mp-cell
            v-bind:has-header="false"
            v-bind:has-footer="false"
            title=""
            ext-class=""
          >
            <textarea
              class="weui-textarea"
              placeholder="请输入文本"
              style="height: 3.3em"
            />
            <div class="weui-textarea-counter">0/200</div>
          </mp-cell>
        </mp-cells>
        <mp-cells title="选择">
          <mp-cell ext-class="weui-cell_select weui-cell_select-before">
            <div slot="title" style="width: 105px">
              <picker
                @change="bindCountryCodeChange"
                v-model="countryCodeIndex"
                v-bind:range="countryCodes"
              >
                <div class="weui-select">
                  {{ countryCodes[countryCodeIndex] }}
                </div>
              </picker>
            </div>
            <input class="weui-input" placeholder="请输入号码" />
          </mp-cell>
        </mp-cells>
        <mp-cells title="选择">
          <mp-cell v-bind:has-header="false" ext-class="weui-cell_select">
            <picker
              @change="bindAccountChange"
              v-model="accountIndex"
              v-bind:range="accounts"
            >
              <div class="weui-select">{{ accounts[accountIndex] }}</div>
            </picker>
          </mp-cell>
          <mp-cell ext-class="weui-cell_select weui-cell_select-after">
            <div slot="title" class="weui-label">国家/地区</div>
            <picker
              @change="bindCountryChange"
              v-model="countryIndex"
              v-bind:range="countries"
            >
              <div class="weui-select">{{ countries[countryIndex] }}</div>
            </picker>
          </mp-cell>
        </mp-cells>
      </mp-form>
      <checkbox-group slot="tips" @change="bindAgreeChange">
        <label class="weui-agree">
          <checkbox class="weui-agree__checkbox-check" />
          <text class="weui-agree__checkbox"></text>
          <div class="weui-agree__text">
            阅读并同意<navigator>《相关条款》</navigator>
          </div>
        </label>
      </checkbox-group>
      <div slot="button">
        <button class="weui-btn" type="primary" @tap="submitForm">
          确定
        </button>
      </div>
    </mp-form-page>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/weui/example/form/form',
    };
  },
  data: {
    showTopTips: false,
    error: '',
    radioItems: [
      { name: 'cell standard', value: '0', checked: true },
      { name: 'cell standard', value: '1' },
    ],
    checkboxItems: [
      { name: 'standard is dealt for u.', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1' },
    ],
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],

    date: '2016-09-01',
    time: '12:01',

    countryCodes: ['+86', '+80', '+84', '+87'],
    countryCodeIndex: '0',

    countries: ['中国', '美国', '英国'],
    countryIndex: '0',

    accounts: ['微信号', 'QQ', 'Email'],
    accountIndex: '0',

    isAgree: false,
    formData: {} as any,
    rules: [
      {
        name: 'radio',
        rules: { required: false, message: '单选列表是必选项' },
      },
      {
        name: 'checkbox',
        rules: { required: true, message: '多选列表是必选项' },
      },
      {
        name: 'name',
        rules: { required: true, message: '请输入姓名' },
      },
      {
        name: 'qq',
        rules: { required: true, message: 'qq必填' },
      },
      {
        name: 'mobile',
        rules: [
          { required: true, message: 'mobile必填' },
          { mobile: true, message: 'mobile格式不对' },
        ],
      },
      {
        name: 'vcode',
        rules: { required: true, message: '验证码必填' },
      },
      {
        name: 'idcard',
        rules: {
          validator: (rule: string, value: string, param: any, modeels: any) => {
            if (!value || value.length !== 18) {
              return 'idcard格式不正确';
            }
          },
        },
      },
    ],
  },
  methods: {
    radioChange(e: weui.CheckboxGroupChange<string>) {
      console.log('radio发生change事件，携带value值为：', e.detail.value);

      var radioItems = this.radioItems;
      for (var i = 0, len = radioItems.length; i < len; ++i) {
        radioItems[i].checked = radioItems[i].value == e.detail.value;
      }
      this.radioItems = radioItems;
      this.formData.radio = e.detail.value
    },
    checkboxChange(e: weui.CheckboxGroupChange<string>) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);

      var checkboxItems = this.checkboxItems,
        values = e.detail.value;
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value == values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }
      this.checkboxItems = checkboxItems;
      this.formData.checkbox = e.detail.value;
    },
    bindDateChange(e: WechatMiniprogram.PickerChange) {
      this.date = e.detail.value as string
      this.formData.date = e.detail.value
    },
    formInputChange(e: WechatMiniprogram.Input) {
      const { field } = e.currentTarget.dataset;
      this.formData[field] = e.detail.value
    },
    bindCountryCodeChange(e: WechatMiniprogram.PickerChange) {
      console.log('picker country code 发生选择改变，携带值为', e.detail.value);
      this.countryCodeIndex = e.detail.value as string
    },
    bindCountryChange(e: WechatMiniprogram.PickerChange) {
      console.log('picker country 发生选择改变，携带值为', e.detail.value);
      this.countryIndex = e.detail.value as string
    },
    bindAccountChange(e: WechatMiniprogram.PickerChange) {
      console.log('picker account 发生选择改变，携带值为', e.detail.value);
      this.accountIndex = e.detail.value as string
    },
    bindAgreeChange(e: weui.CheckboxGroupChange<string>) {
      this.isAgree = !!e.detail.value.length
    },
    submitForm() {
      (this as any).selectComponent('#form').validate((valid:boolean, errors:any) => {
        console.log('valid', valid, errors);
        if (!valid) {
          const firstError = Object.keys(errors);
          if (firstError.length) {
            this.error = errors[firstError[0]].message
          }
        } else {
          wx.showToast({
            title: '校验通过',
          });
        }
      });
    },
  },
});
</script>
<config>
{
  "component": true,
  "navigationBarTitleText": "form",

  "usingComponents": {
    "mp-form-page": "weui-miniprogram/form-page/form-page",
    "mp-toptips": "weui-miniprogram/toptips/toptips",
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell",
    "mp-checkbox": "weui-miniprogram/checkbox/checkbox",
    "mp-checkbox-group": "weui-miniprogram/checkbox-group/checkbox-group",
    "mp-form": "weui-miniprogram/form/form"
  }
}
</config>