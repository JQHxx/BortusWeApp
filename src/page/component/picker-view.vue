<style lang="less">
.selected-date {
  text-align: center;
  margin: 15px;
}

.icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.picker-icon {
  width: 25px;
  height: 25px;
}
</style>
<template>
  <div class="container">
    <head title="picker-div" />
    <div class="page-body">
      <div class="selected-date">
        {{ year }}年{{ month }}月{{ day }}日{{ isDaytime ? '白天' : '夜晚' }}
      </div>
      <picker-div
        indicator-style="height: 50px;"
        style="width: 100%; height: 300px"
        v-model="value"
        @change="bindChange"
      >
        <picker-div-column>
          <div
            v-for="item in years"
            v-bind:key="item"
            style="line-height: 50px; text-align: center"
          >
            {{ item }}年
          </div>
        </picker-div-column>
        <picker-div-column>
          <div
            v-for="item in months"
            v-bind:key="item"
            style="line-height: 50px; text-align: center"
          >
            {{ item }}月
          </div>
        </picker-div-column>
        <picker-div-column>
          <div
            v-for="item in days"
            v-bind:key="item"
            style="line-height: 50px; text-align: center"
          >
            {{ item }}日
          </div>
        </picker-div-column>
        <picker-div-column>
          <div class="icon-container">
            <image class="picker-icon" src="../../resources/kind/daytime.png" />
          </div>
          <div class="icon-container">
            <image class="picker-icon" src="../../resources/kind/night.png" />
          </div>
        </picker-div-column>
      </picker-div>
    </div>

    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const date = new Date();
const years = [];
const months = [];
const days = [];

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i);
}

for (let i = 1; i <= 12; i++) {
  months.push(i);
}

for (let i = 1; i <= 31; i++) {
  days.push(i);
}

wepy.page({
  onShareAppMessage() {
    return {
      title: 'picker-view',
      path: 'page/component/pages/picker-view/picker-view',
    };
  },

  data: {
    years,
    year: date.getFullYear(),
    months,
    month: 2,
    days,
    day: 2,
    value: [9999, 1, 1],
    isDaytime: true,
  },

  methods: {
    bindChange(e: WechatMiniprogram.PickerViewChange) {
      const val = e.detail.value;
      this.year = this.years[val[0]];
      this.month = this.months[val[1]];
      this.day = this.days[val[2]];
      this.isDaytime = !val[3];
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "picker-view"
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>