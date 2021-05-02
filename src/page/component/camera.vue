<style lang="wxss">
@import '../../common/lib/weui.wxss';

camera {
  height: 250px;
}

.preview-tips {
  margin: 10px 0;
}

.photo,
.video {
  margin-top: 25px;
  width: 100%;
}

.btn-area {
  margin-top: 0;
}

.first-btn {
  margin-top: 15px;
}

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

.info-container {
  margin: 12px;
  text-align: center;
}
</style>
<template>
  <div class="container">
    <head title="camera" />
    <div class="page-body">
      <div class="page-body-wrapper">
        <div style="margin-bottom: 10px">camera 组件</div>
        <camera flash="off" v-bind:device-position="position" @error="error($event.$wx)"></camera>
        <div v-if="showCanvas" class="info-container">
          <div style="margin: 10px 0">使用实时数据帧在 canvas 组件的展示</div>
          <div>帧高度：{{ frameHeight }} 帧宽度：{{ frameWidth }}</div>
          <canvas id="webgl" type="webgl" canvas-id="canvas" style="width: {{width}}px; height: {{height}}px;"></canvas>
        </div>
        <div class="btn-area first-btn">
          <button @tap="handleShowCanvas($event.$wx)" type="primary">
            {{ showCanvas ? '关闭实时帧数据模式' : '开启实时帧数据模式' }}
          </button>
        </div>
        <div class="btn-area">
          <button type="primary" @tap="togglePosition($event.$wx)">切换摄像头</button>
        </div>
        <div class="btn-area">
          <button type="primary" @tap="takePhoto($event.$wx)">拍照</button>
        </div>
        <div class="btn-area">
          <button type="primary" @tap="startRecord($event.$wx)">开始录像</button>
        </div>
        <div class="btn-area">
          <button type="primary" @tap="stopRecord($event.$wx)">结束录像</button>
        </div>
        <div class="btn-area">
          <navigator url="camera-scan-code" hover-class="none">
            <button type="primary">扫描一维码</button>
          </navigator>
        </div>
        <div class="preview-tips">点击录像或拍照即可在下方预览效果</div>
        <image v-if="src" mode="widthFix" class="photo" v-bind:src="src"
        ></image>
        <video v-if="videoSrc" class="video" src="{{videoSrc}}"></video>
      </div>
    </div>
    <foot />
  </div>
</template>

<script lang="typescript">
import wepy from '@wepy/core';

const vs = `
  attribute vec3 aPos;
  attribute vec2 aVertexTextureCoord;
  varying highp vec2 vTextureCoord;

  void main(void){
    gl_Position = vec4(aPos, 1);
    vTextureCoord = aVertexTextureCoord;
  }
`;

const fs = `
  varying highp vec2 vTextureCoord;
  uniform sampler2D uSampler;

  void main(void) {
    gl_FragColor = texture2D(uSampler, vTextureCoord);
  }
`;

const vertex = [-1, -1, 0.0, 1, -1, 0.0, 1, 1, 0.0, -1, 1, 0.0];

const vertexIndice = [0, 1, 2, 0, 2, 3];

const texCoords = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0];

const buffers: any = {};

function createShader(gl: any, src: string, type: string) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Error compiling shader: ' + gl.getShaderInfoLog(shader));
  }
  return shader;
}

function createRenderer(canvas: any, width: number, height: number) {
  const gl = canvas.getContext('webgl');
  if (!gl) {
    console.error('Unable to get webgl context.');
    return;
  }

  const info = wx.getSystemInfoSync();
  gl.canvas.width = info.pixelRatio * width;
  gl.canvas.height = info.pixelRatio * height;
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

  const vertexShader = createShader(gl, vs, gl.VERTEX_SHADER);
  const fragmentShader = createShader(gl, fs, gl.FRAGMENT_SHADER);

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Unable to initialize the shader program.');
    return;
  }

  gl.useProgram(program);

  const texture = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.bindTexture(gl.TEXTURE_2D, null);

  buffers.vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW);

  buffers.vertexIndiceBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.vertexIndiceBuffer);
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(vertexIndice),
    gl.STATIC_DRAW
  );

  const aVertexPosition = gl.getAttribLocation(program, 'aPos');
  gl.vertexAttribPointer(aVertexPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aVertexPosition);

  buffers.trianglesTexCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.trianglesTexCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);

  const vertexTexCoordAttribute = gl.getAttribLocation(
    program,
    'aVertexTextureCoord'
  );
  gl.enableVertexAttribArray(vertexTexCoordAttribute);
  gl.vertexAttribPointer(vertexTexCoordAttribute, 2, gl.FLOAT, false, 0, 0);

  const samplerUniform = gl.getUniformLocation(program, 'uSampler');
  gl.uniform1i(samplerUniform, 0);

  return (arrayBuffer: any, width: number, height: number) => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      width,
      height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      arrayBuffer
    );
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  };
}

wepy.page({
  onShareAppMessage() {
    return {
      title: 'camera',
      path: 'page/component/camera',
    };
  },
  data: {
    src: '',
    videoSrc: '',
    position: 'back',
    mode: 'scanCode',
    result: {},
    frameWidth: 0,
    frameHeight: 0,
    width: 288,
    height: 358,
    showCanvas: false,
    ctx: {} as WechatMiniprogram.CameraContext,
    listener: {} as WechatMiniprogram.CameraFrameListener,
  },
  onReady() {
    this.ctx = wx.createCameraContext();
  },
  methods: {
    init(res: WechatMiniprogram.NodeCallbackResult) {
      if (this.listener) {
        this.listener.stop();
      }
      const canvas = res.node;
      const render = createRenderer(canvas, this.width, this.height);

      this.listener = this.ctx.onCameraFrame((frame) => {
        if (render) {
          render(new Uint8Array(frame.data), frame.width, frame.height);
        }
        if (this.frameWidth === frame.width && this.frameHeight == frame.height)
          return;
        this.frameWidth = frame.width;
        this.frameHeight = frame.height;
      });
      this.listener.start();
    },
    takePhoto() {
      this.ctx.takePhoto({
        quality: 'high',
        success: (res) => {
            this.src = res.tempImagePath;
        },
      });
    },
    startRecord() {
      this.ctx.startRecord({
        success: () => {
          console.log('startRecord');
        },
      });
    },
    stopRecord() {
      this.ctx.stopRecord({
        success: (res) => {
            this.src = res.tempThumbPath;
            this.videoSrc = res.tempVideoPath;
        },
      });
    },
    togglePosition() {
        this.position = this.position === 'front' ? 'back': 'front'
    },
    error(e: WechatMiniprogram.CameraError) {
      console.log(e.detail);
    },
    handleShowCanvas() {
      const that = this;
      this.showCanvas = !this.showCanvas;
      if (this.showCanvas) {
          const selector = wx.createSelectorQuery();
          selector.select('#webgl').node(this.init).exec();
      }
    }
  }
});
</script>
<config>
{
    "navigationBarTitleText": "camera",
    "usingComponents": {
        "head": "../../common/head",
        "foot": "../../common/foot"
    }
}
</config>