<style lang="wxss">
@import '../../common/lib/weui.wxss';

.canvas {
  width: 305px;
  height: 305px;
  background-color: var(--weui-BG-1);
  margin-top: 30px;
}
</style>
<template>
  <div class="container">
    <head title="webgl" />
    <div class="page-body">
      <block v-if="canIUse">
        <div class="page-section">
          <div class="page-body-wrapper">
            <canvas class="canvas" type="webgl" id="canvasWebGL"></canvas>
          </div>
        </div>
      </block>
      <div v-else style="margin: 15px; text-align: center">
        微信版本过低，暂不支持本功能
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';
import { compareVersion } from '../../util/util';

//WebGL
const vs = `
  precision mediump float;

  attribute vec2 vertPosition;
  attribute vec3 vertColor;
  varying vec3 fragColor;

  void main() {
    gl_Position = vec4(vertPosition, 0.0, 1.0);
    fragColor = vertColor;
  }
`;

const fs = `
  precision mediump float;

  varying vec3 fragColor;
  void main() {
    gl_FragColor = vec4(fragColor, 1.0);
  }
`;

const triangleVertices = [
  0.0,
  0.5,
  1.0,
  1.0,
  0.0,
  -0.5,
  -0.5,
  0.7,
  0.0,
  1.0,
  0.5,
  -0.5,
  0.1,
  1.0,
  0.6,
];
wepy.page({
  onShareAppMessage() {
    return {
      title: 'canvas',
      path: 'page/component/webgl',
    };
  },
  data: {
    canIUse: true,
  },
  onReady() {
    // 解决基础库小于 2.7.0 的兼容问题
    const { SDKVersion } = wx.getSystemInfoSync();
    if (compareVersion(SDKVersion, '2.7.0') < 0) {
      console.log('123');
      this.canIUse = false;
    } else {
      // WebGL
      wx.createSelectorQuery()
        .select('#canvasWebGL')
        .node()
        .exec((res) => {
          const canvas = res[0].node;
          this.renderWebGL(canvas);
        });
    }
  },

  methods: {
    renderWebGL(canvas: any) {
      // 不支持webgl
      if (!canvas) {
        this.canIUse = false;
        return;
      }
      const gl = canvas.getContext('webgl');
      if (!gl) {
        console.error('gl init failed', gl);
        return;
      }
      gl.viewport(0, 0, 305, 305);
      const vertShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertShader, vs);
      gl.compileShader(vertShader);

      const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragShader, fs);
      gl.compileShader(fragShader);

      const prog = gl.createProgram();
      gl.attachShader(prog, vertShader);
      gl.attachShader(prog, fragShader);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.linkProgram(prog);
      gl.useProgram(prog);

      const draw = () => {
        const triangleVertexBufferObject = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
        gl.bufferData(
          gl.ARRAY_BUFFER,
          new Float32Array(triangleVertices),
          gl.STATIC_DRAW
        );

        const positionAttribLocation = gl.getAttribLocation(
          prog,
          'vertPosition'
        );
        const colorAttribLocation = gl.getAttribLocation(prog, 'vertColor');
        gl.vertexAttribPointer(
          positionAttribLocation,
          2,
          gl.FLOAT,
          gl.FALSE,
          5 * Float32Array.BYTES_PER_ELEMENT,
          0
        );
        gl.vertexAttribPointer(
          colorAttribLocation,
          3,
          gl.FLOAT,
          gl.FALSE,
          5 * Float32Array.BYTES_PER_ELEMENT,
          2 * Float32Array.BYTES_PER_ELEMENT
        );

        gl.enableVertexAttribArray(positionAttribLocation);
        gl.enableVertexAttribArray(colorAttribLocation);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        canvas.requestAnimationFrame(draw);
      };

      canvas.requestAnimationFrame(draw);
    },
  },
});
</script>
<config>
{
    "navigationBarTitleText": "webgl",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>