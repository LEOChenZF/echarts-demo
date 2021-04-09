export default class SocketService {
  /**
   * 单例
   * 用法 => main.js
   * 参照 => https://www.bilibili.com/video/BV1Uz4y1S7kr?p=87&spm_id_from=pageDriver
   */
  static instance = null;
  static get Instance() {
    if (!this.instance) {
      this.instance = new SocketService();
    }
    return this.instance;
  }

  //   定义Socket对象
  ws = null;

  //   标识是否成功连接服务器
  connected = false;

  //   记录重新send的次数
  sendRetryCount = 0;

  //   记录重新连接的次数
  connectRetryCount = 0;

  // 定义连接服务器的方法
  connect() {
    //   连接服务器
    if (!window.WebSocket) {
      return console.log("您的浏览器不支持WebSocket");
    }

    this.ws = new WebSocket("ws://域名地址");

    // 成功事件
    this.ws.onopen = () => {
      console.log("连接成功");
      this.connected = true;
      this.connectRetryCount = 0;
    };
    // 失败 && 关闭 事件
    this.ws.onclose = () => {
      console.log("连接失败");
      this.connected = false;
      this.connectRetryCount++;
      setTimeout(() => {
        this.connect();
      }, this.connectRetryCount * 500);
    };
    // 获取数据事件
    this.ws.onmessage = (msg) => {
      console.log("数据:", msg);
    };
  }

  //   前端数据发送到后端服务器
  send(data) {
    if (this.connected) {
      this.sendRetryCount = 0;
      this.ws.send(JSON.stringify(data));
    } else {
      this.sendRetryCount++;
      setTimeout(() => {
        this.send(data);
      }, this.sendRetryCount * 500);
    }
  }
}
