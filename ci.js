const { createVLESSServer } = require('./index.js');

// 定义端口和 UUID
const port = 3001;
const uuid = '71b7cbfb-4e77-4585-92c2-1282d1290a9f';

// 调用函数启动 VLESS 服务器
createVLESSServer(port, uuid);
