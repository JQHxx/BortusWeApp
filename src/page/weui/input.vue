<style lang="less">
</style>
<template>
  <div class="container">
    <mp-toptips v-bind:msg="error" v-bind:show="error"></mp-toptips>
    <div class="page" xmlns:wx="http://www.w3.org/1999/xhtml">
      <div class="page__hd">
        <div class="page__title">Input（组件）</div>
        <div class="page__desc">表单输入</div>
      </div>
      <div class="page__bd">
        <mp-form id="form" v-bind:rules="rules" v-bind:models="formData">
          <mp-cells title="单选列表项">
            <mp-checkbox-group
              prop="radio"
              v-bind:multi="false"
              @change="radioChange"
            >
              <mp-checkbox
                v-for="item in radioItems"
                v-bind:key="item"
                v-bind:label="item.name"
                v-model="item.value"
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
                v-model="item.value"
                v-bind:checked="item.checked"
              ></mp-checkbox>
            </mp-checkbox-group>
          </mp-cells>

          <mp-cells title="表单" foot="底部说明文字底部说明文字">
            <mp-cell prop="qq" title="qq" ext-class="">
              <input
                bindinput="formInputChange"
                data-field="qq"
                class="weui-input"
                placeholder="请输入qq"
              />
            </mp-cell>
            <mp-cell prop="mobile" title="手机号" ext-class=" weui-cell_vcode">
              <input
                bindinput="formInputChange"
                data-field="mobile"
                class="weui-input"
                placeholder="请输入手机号"
              />
              <div slot="foot" class="weui-vcode-btn">获取验证码</div>
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
                slot="foot"
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
        </mp-form>

        <div class="weui-cells__title">开关</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_switch">
            <div class="weui-cell__bd">标题文字</div>
            <div class="weui-cell__ft">
              <switch checked />
            </div>
          </div>
        </div>

        <div class="weui-cells__title">文本框</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <input class="weui-input" placeholder="请输入文本" />
            </div>
          </div>
        </div>

        <div class="weui-cells__title">文本域</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <textarea
                class="weui-textarea"
                placeholder="请输入文本"
                style="height: 3.3em"
              />
              <div class="weui-textarea-counter">0/200</div>
            </div>
          </div>
        </div>

        <div class="weui-cells__title">选择</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_select">
            <div class="weui-cell__hd" style="width: 105px">
              <picker
                @change="bindCountryCodeChange"
                v-model="countryCodeIndex"
                v-bind:range="countryCodes"
              >
                <div class="weui-select">{{
                  countryCodes[countryCodeIndex]}}</div>
              </picker>
            </div>
            <div class="weui-cell__bd weui-cell__bd_in-select-before">
              <input class="weui-input" placeholder="请输入号码" />
            </div>
          </div>
        </div>

        <div class="weui-cells__title">选择</div>
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_select">
            <div class="weui-cell__bd">
              <picker
                @change="bindAccountChange"
                v-model="accountIndex"
                v-bind:range="accounts"
              >
                <div class="weui-select">{{ accounts[accountIndex] }}</div>
              </picker>
            </div>
          </div>
          <div class="weui-cell weui-cell_select">
            <div class="weui-cell__hd weui-cell__hd_in-select-after">
              <div class="weui-label">国家/地区</div>
            </div>
            <div class="weui-cell__bd">
              <picker
                @change="bindCountryChange"
                v-model="countryIndex"
                v-bind:range="countries"
              >
                <div class="weui-select weui-select_in-select-after">{{
                  countries[countryIndex]
                }}</div>
              </picker>
            </div>
          </div>
        </div>

        <checkbox-group @change="bindAgreeChange">
          <label class="weui-agree" for="weuiAgree">
            <div class="weui-agree__text">
              <checkbox
                class="weui-agree__checkbox"
                id="weuiAgree"
                v-model="agree"
                v-bind:checked="isAgree"
              />
              <div class="weui-agree__checkbox-icon">
                <icon
                  class="weui-agree__checkbox-icon-check"
                  type="success_no_circle"
                  size="9"
                  v-if="isAgree"
                ></icon>
              </div>
              阅读并同意<navigator url="" class="weui-agree__link"
                >《相关条款》</navigator
              >
            </div>
          </label>
        </checkbox-group>

        <div class="weui-btn-area">
          <button class="weui-btn" type="primary" @tap="submitForm">
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

wepy.component({
      onShareAppMessage() {
        return {
          title: 'input',
          path: 'page/weui/example/input/input'
        }
      },
    data: {
        showTopTips: false,

        radioItems: [
            {name: 'cell standard', value: '0', checked: true},
            {name: 'cell standard', value: '1'}
        ],
        checkboxItems: [
            {name: 'standard is dealt for u.', value: '0', checked: true},
            {name: 'standard is dealicient for u.', value: '1'}
        ],
        items: [
            {name: 'USA', value: '美国'},
            {name: 'CHN', value: '中国', checked: 'true'},
            {name: 'BRA', value: '巴西'},
            {name: 'JPN', value: '日本'},
            {name: 'ENG', value: '英国'},
            {name: 'TUR', value: '法国'},
        ],

        date: "2016-09-01",
        time: "12:01",

        countryCodes: ["+86", "+80", "+84", "+87"],
        countryCodeIndex: '0',

        countries: ["中国", "美国", "英国"],
        countryIndex: '0',

        accounts: ["微信号", "QQ", "Email"],
        accountIndex: '0',

        isAgree: false,
        formData: { } as any,
        rules: [{
            name: 'radio',
            rules: {required: true, message: '单选列表是必选项'},
        }, {
            name: 'checkbox',
            rules: {required: true, message: '多选列表是必选项'},
        }, {
            name: 'qq',
            rules: {required: true, message: 'qq必填'},
        }, {
            name: 'mobile',
            rules: [{required: true, message: 'mobile必填'}, {mobile: true, message: 'mobile格式不对'}],
        }, {
            name: 'vcode',
            rules: {required: true, message: '验证码必填'},
        }, {
            name: 'idcard',
            rules: {required: true, message: 'idcard必填'},
        }],
        error: ''
    },
    methods: {
        radioChange(e: weui.CheckboxGroupChange<string>) {
            console.log('radio发生change事件，携带value值为：', e.detail.value);
    
            var radioItems = this.radioItems;
            for (var i = 0, len = radioItems.length; i < len; ++i) {
                radioItems[i].checked = radioItems[i].value == e.detail.value;
            }
            this.radioItems = radioItems
            this.formData.radio = e.detail.value
        },
        checkboxChange(e: weui.CheckboxGroupChange<string>) {
            console.log('checkbox发生change事件，携带value值为：', e.detail.value);
            var checkboxItems = this.checkboxItems, values = e.detail.value;
            for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
                checkboxItems[i].checked = false;
    
                for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                    if(checkboxItems[i].value == values[j]){
                        checkboxItems[i].checked = true;
                        break;
                    }
                }
            }

            this.checkboxItems = checkboxItems
            this.formData.checkbox = e.detail.value
        },
        bindDateChange(e: WechatMiniprogram.PickerChange) {
          this.date = e.detail.value as string
          this.formData.date = e.detail.value
        },
        formInputChange(e: WechatMiniprogram.Input) {
            const {field} = e.currentTarget.dataset
            this.formData[field] = e.detail.value
        },
        bindCountryCodeChange(e: WechatMiniprogram.PickerChange){
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
        bindAgreeChange(e: WechatMiniprogram.CheckboxGroupChange) {
          this.isAgree = !!e.detail.value.length
        },
        submitForm() {
            (this as any).selectComponent('#form').validate((valid:boolean, errors:any) => {
                console.log('valid', valid, errors)
                if (!valid) {
                    const firstError = Object.keys(errors)
                    if (firstError.length) {
                      this.error = errors[firstError[0]].message    
                    }
                } else {
                    wx.showToast({
                        title: '校验通过'
                    })
                }
            })
        }
    }
});
</script>
<config>
{
  "component": true,
  "usingComponents": {
    "mp-toptips": "weui-miniprogram/toptips/toptips",
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell",
    "mp-checkbox": "weui-miniprogram/checkbox/checkbox",
    "mp-checkbox-group": "weui-miniprogram/checkbox-group/checkbox-group",
    "mp-form": "weui-miniprogram/form/form"
  },
  "navigationBarTitleText": "input"
}
</config>