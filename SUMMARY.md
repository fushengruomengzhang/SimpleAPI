# SimpleAPI 项目概要

**SimpleAPI**（开源、自托管 self-hosted）是轻量级 **API 接口测试 / 接口调试 / 接口文档** 工具：浏览器即用，**一处部署**（jar + 静态资源），适合中小团队 **内网私有化** 与本地联调。

可检索别名与场景：Postman 轻量替代 · Apifox 私有化平替 · HTTP API Client · OpenAPI / Swagger 调试 · RESTful 测试 · SSE · WebSocket · 接口文档协作 · API 定时巡检 · 团队共享接口库。

## 一句话

简单上手、功能够强：测接口、写文档、定时跑 API；不依赖重客户端，服务端一处部署全员浏览器访问。

## 能力清单

- **接口测试**：HTTP(S) / SSE / WebSocket；RESTful；JSON5；脚本预处理；批量执行 N 次；顺序/并行；版本快照；分享链接即测  
- **OpenAPI / Swagger**：填地址加载后联调，不落库  
- **接口文档**：组合文档、协同编辑、分享 / 下载  
- **定时任务**：CRON / RRULE / 时间戳，关联 API 冒烟巡检  
- **团队与隐私**：远程库共享 + 本地私密 API；远程页经插件测本机 `localhost`  
- **部署**：JDK8 + SQLite（可选 MySQL8）；`source` 内 `start.sh` / `start.bat`（已运行则重启）；内网 / 本地均可  

侧栏还提供 AI 助手、群聊等可选协作能力；主路径仍是 **测 · 写 · 跑**。

远程服务不通时，仅 **API管理 / Swagger管理** 可用。

## 文档

- 产品说明与部署：[README.md](README.md)  
- 完整使用手册：[USER_GUIDE.md](USER_GUIDE.md)  

仓库：GitHub / Gitee 搜索 **SimpleAPI** · API测试 · 接口调试 · 私有化部署。
