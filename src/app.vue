<style lang="less">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>

<script lang="typescript">
import wepy from '@wepy/core';
import eventHub from './common/eventHub';

wepy.app({
  hooks: {
    'before-setData': function (dirty) {
      console.log('setData dirty: ', dirty);
      return dirty;
    }
  },
  onLaunch() {
    eventHub.$on('app-launch', (...args: any) => {
      console.log('app-launch event emitted, the params are:');
      console.log(args);
    });
  }
});
</script>
<config>
{
    pages: [
      'pages/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
}
</config>
