const { createVLESSServer } = require('./index.js');

// 定义端口和 UUID
const port = 3001;
const uuid = 'e84f6e25-b122-4bbb-8c80-2e4a531dda9f';

// 调用函数启动 VLESS 服务器
createVLESSServer(port, uuid);
