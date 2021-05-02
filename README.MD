# 基于wepy开发微信小程序

## 参考文档

[wepy官方文档](https://wepyjs.github.io/wepy-docs/2.x#)  
[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/)  

## 开发教程

### 1. 关于app.vue中的config部分  

所有编写的页面必须采用如下形式进行注册，否则页面无法使用，并且不会进行编译：  

```json
  "pages": [
    "page/index",
    "page/api/index",
    "page/weui/index",
    "page/component/view",
    "page/component/scroll-view",
    "page/component/swiper"
  ],
```  

### 2. 关于间接引用资源  

由于编译采用的依赖引入的方式，导致部分资源并不会导出到最终生成中，如果开发者
需要自行增加其他资源，需要打开`wepy.config.js`文件并通过`static`数组进行
注册：  

```javascript
static: ['src/resources','src/demo.theme.json']
```  

### 3. 关于事件的处理  

由于wepy框架并不会直接将原生的事件传入到事件处理中，如果开发者需要引用原生
的事件需要使用`$event.$wx`进行传入，具体使用如下：   

```html
<slider
    @change="durationChange($event.$wx)"
    v-model="duration"
    min="500"
    max="2000"
/>
```  

### 4. 关于未提示的原生函数  

如果在编写过程中存在未提供提示的原生函数，那么可以使用`this.$wx.[Function]`来进行使用
对应的错误可以忽略。  

### 5. 使用第三方组件  

由于wepy 2.0中采用了原生的方式，但是编译中必须实际存在该UI组件。并且需要使用
其他具体的方式才可以，下面就列举了如何使用`weui`中的组件在页面的`config`配置中:  

```json
"usingComponents": {
  "mp-cells": "module:weui-miniprogram/miniprogram_dist/cells/cells",
  "mp-cell": "module:weui-miniprogram/miniprogram_dist/cell/cell",
  "mp-slideview": "module:weui-miniprogram/miniprogram_dist/slideview/slideview"
}
```  

