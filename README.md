# SimpleAPI · 轻量开源 API 接口测试与文档工具

**SimpleAPI** 是面向中小团队的 **浏览器端 API 调试 / 接口测试 / 接口文档** 工作台：  
**一处部署、开箱即用**，覆盖 HTTP(S) · SSE · WebSocket，支持 **OpenAPI / Swagger 联调**、组合文档、定时巡检；可 **内网私有化** 与本地部署。

> 关键词：API 测试 · 接口调试 · Postman / Apifox 轻量替代 · 私有化部署 · OpenAPI · Swagger · RESTful · SSE · WebSocket · 接口文档 · 定时任务 · 团队协作 · 自托管 self-hosted

左侧导航（与产品壳层一致）：  
API管理 → Swagger管理 → 组合文档 → 定时任务 → AI助手 → 群聊 → 配置 → 使用帮助；底栏 **数据统计**。

---

## 适合谁用

- 需要 **内网 / 私有化** 的接口联调，不想上云、不想买企业版  
- 想要 **比 Postman / Apifox 更轻、更好部署** 的团队 API 工具  
- 日常要做 **HTTP / SSE / WebSocket** 调试、**Swagger 临时试调**、接口文档沉淀与定时冒烟  

一句话：**简单上手，功能够强；jar + 静态资源即可跑起来。**

---

## 核心功能

| 模块 | 能力（便于检索） |
|------|------------------|
| **API 管理 / 接口测试** | GET/POST/PUT/DELETE、RESTful 路径参数、JSON5、脚本预处理、执行 N 次、顺序/并行、版本快照、分享链接 |
| **Swagger / OpenAPI** | 填 docs 地址加载后即测，**不写入**本地 API 库；适合现网临时联调 |
| **接口文档** | 单接口预览；多 API **组合文档**、协同编辑、分享 / 下载 |
| **定时任务** | CRON / RRULE / 时间戳，关联 API 做巡检 / 冒烟 |
| **双库协作** | 远程 API 团队共享；本地 API（橘黄）仅本机不上云 |
| **本机联调** | 工具在服务器、接口在 `localhost` 时，可用篡改猴「自动启用插件」代发 HTTP |
| **配置** | 全局 Header、域名、超时、插件管理、自动保存、暗色模式 |

---

## 为什么选 SimpleAPI（相对主流工具）

对比常见 **Postman · Apifox · Insomnia · Knife4j / Swagger UI · YApi**：

| 能力 | SimpleAPI | 常见情况 |
|------|:---------:|----------|
| HTTP / SSE / WebSocket 一站调试 | ✅ | SSE/WS 因工具而异 |
| 浏览器使用 + **私有化 / 内网一键部署** | ✅ | 私有化多为企业版或客户端 |
| 组合文档 + 协同 | ✅ | 多数偏只读文档 |
| 定时跑 API 巡检 | ✅ | 常需付费 Monitor 或另写脚本 |
| 远程页面测本机 localhost | ✅ 插件 | 通常依赖本地客户端 |
| 本地私密接口不上云 | ✅ | 较少 |
| Mock / CI 流水线 | ❌ | Postman / Apifox 更强 |

定位：**轻量自托管的团队接口测试与文档工具**，不是全能企业套件。

---

## 产品亮点（细项）

1. **远程测 localhost**：部署在内网服务器时，经篡改猴「自动启用插件」可测本机 HTTP（WebSocket 仍浏览器直连）。  
2. **全协议**：HTTP(S) / SSE / WS(S)；Body 支持 JSON5、multipart、表单；结果多 Tab、耗时图。  
3. **测 · 写 · 跑**：接口树调试 → 组合文档沉淀 → 定时任务巡检。  
4. **分享即开即测**：生成链接，对方浏览器打开即可执行。  
5. **Fetch / Java 注解导入**：Copy as fetch → API；上传 Swagger 注解生成字段文档与 JSON 示例。  
6. **脚本 + 版本**：`getVersion` / `buildHeader` / `buildParam` / `buildMessage`；快照回滚。

侧栏另有 AI 助手、群聊等协作能力（可选使用，非部署与联调主路径）。

---

## 截图

![API接口测试](img/request_detail.png)
![API接口文档](img/api_doc_detail.png)
![定时任务 / API 巡检](img/task_handler_detail.png)
![配置与插件管理](img/setting_detail.png)
![群聊](img/chat_detail.png)
![侧栏 AI 助手](img/ai_detail.png)

---

## 快速部署（私有化 / 本地）

### 下载

- GitHub：[https://github.com/fushengruomengzhang/SimpleAPI](https://github.com/fushengruomengzhang/SimpleAPI)  
- Gitee：[https://gitee.com/fusheng_zhang/SimpleAPI](https://gitee.com/fusheng_zhang/SimpleAPI)  

`source` 目录含：`scmp.jar`、`lib/`、`sqlit-db.db`、`static`、启动脚本 `start.sh` / `start.bat`。

### 推荐启动（JDK 8）

进入 `source` 目录后执行脚本即可：**若已在运行则先结束再重启。**

```shell
cd source
chmod +x start.sh   # 仅首次需要
./start.sh
```

```batch
cd source
start.bat
```

### 手动启动（可选）

```shell
java -jar scmp.jar \
	--db.type=sqlit --sqlit.path=./sqlit-db.db \
	--project.location-file-path=file:./static/ \
	--project.socket.ports=3501 \
	--spring.profiles.active=pro
```

```batch
java -jar .\scmp.jar --db.type=sqlit --sqlit.path=./sqlit-db.db --project.location-file-path=file:./static/ --project.socket.ports=3501 --spring.profiles.active=pro
```

默认库为 **SQLite**，也支持 **MySQL 8**（更稳，可邮件联系配置）。

### 访问

[http://127.0.0.1:3500/scmp/static/index.html#/request/api](http://127.0.0.1:3500/scmp/static/index.html#/request/api)

---

## 文档与联系

- [使用手册 USER_GUIDE.md](USER_GUIDE.md)  
- [项目概要 SUMMARY.md](SUMMARY.md)  
- 邮箱：17610759800@163.com　QQ：1270622569　微信：zfs1270622569  

---

## 感谢支持

![感谢支持](img/PayCode.png)

---

**SimpleAPI** — Simple to deploy. Powerful enough to test.  
开源 · 自托管 · 接口测试 · API 文档 · OpenAPI/Swagger · 团队联调
