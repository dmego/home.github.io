# home.github.io

[![Version](https://img.shields.io/github/package-json/v/dmego/home.github.io)](https://www.npmjs.com/package/dmego-home-page)
[![Website](https://img.shields.io/website-up-down-green-red/http/i.dmego.cn.svg)](http://i.dmego.cn/)
[![License](https://img.shields.io/github/license/dmego/home.github.io.svg)](/LICENSE)
[![Say Thanks](https://img.shields.io/badge/Say-Thanks!-1EAEDB.svg)](https://saythanks.io/to/dmego)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/dmego/home.github.io)

## 个人主页

一个纯静态的个人主页模板：

- Bing 壁纸背景（由 GitHub Actions 每日更新 URL 列表）
- WakaTime 日主题 + 周报弹窗（可选 GitHub Models 生成点评）
- 无需构建，开箱即用（Pages/本地 HTTP 服务即可运行）

灵感来源：

- [Vno](https://github.com/onevcat/vno-jekyll) Jekyll 主题
- [Mno](https://github.com/mcc108/mno) Ghost 主题（部分加载效果）
- [北岛向南的小屋](https://javef.github.io/)（头像样式借鉴）

## 在线预览

- 访问地址：[i.dmego.cn](http://i.dmego.cn/)

## 效果图

![主页JPG](https://unpkg.com/dmego-home-page@latest/assets/img/home.jpg?t=20260123)

![主页GIF](https://unpkg.com/dmego-home-page@latest/assets/img/home.gif?t=20260123)

## 目录

- [快速开始](#快速开始)
- [功能概览](#功能概览)
- [自动化与数据流](#自动化与数据流)
- [Secrets / 环境变量](#secrets--环境变量)
- [自定义与进阶文档](#自定义与进阶文档)
- [更新记录](#更新记录)
- [Star History](#star-history)

## 快速开始

- Fork 后启用 GitHub Pages：见 [docs/quickstart.md](docs/quickstart.md)
- 本地预览：`python3 -m http.server 8080` 或 `npx serve .`

## 功能概览

- 一言（Hitokoto）：页面加载时调用 `https://v1.hitokoto.cn`
- Bing 壁纸：页面读取 `assets/json/images.js`，背景轮播
- WakaTime 主题：页面读取 `assets/json/config.js` 自动应用日主题
- 周报弹窗：点击右下角状态（`SYSTEM MONITOR`），读取 `assets/json/weekly.js`

## 自动化与数据流

核心数据流：

`GitHub Actions` 定时运行 → 生成 `assets/json/*.js` → 提交到仓库 → 页面加载脚本读取并渲染

工作流说明与触发时间：见 [docs/github-actions.md](docs/github-actions.md)

## Secrets / 环境变量

在仓库 Settings → Secrets and variables → Actions 中配置：

| 名称 | 必需 | 用途 |
| --- | ---: | --- |
| `GH_TOKEN` | 是 | Actions 提交生成文件 + GitHub Models 调用（建议 scope：`repo` + `models`） |
| `WAKATIME_TOKEN` | 用于周报 | 拉取 WakaTime summaries 数据 |
| `MODEL_NAME` | 否 | GitHub Models 模型名（默认 `openai/gpt-4.1`） |
| `MODEL_DEBUG` | 否 | 设为 `1` 输出调试日志 |

Token/Secrets 配图步骤：见 [docs/github-actions.md](docs/github-actions.md#配置-gh_token图文步骤)

## 自定义与进阶文档

建议先看这两篇：

- Fork 后部署与本地预览：[docs/quickstart.md](docs/quickstart.md)
- 自动化（Bing/WakaTime/Models）：[docs/github-actions.md](docs/github-actions.md)

常见自定义入口：

- `index.html`：头像、标题、导航链接、邮箱混淆
- `assets/js/theme-loader.js`：支持 `/?theme=focused&hours=6` 快速调试主题

更多细节：见 [docs/customization.md](docs/customization.md)

> 重要：`index.html` 默认引用 `https://unpkg.com/dmego-home-page@latest/` 的资源。你 fork 后如果不改这些 URL，页面仍会加载上游包资源。

## 更新记录

- 2023-02-27
  - 添加《GitHub Action 配置详细步骤》文档
- 2023-04-12
  - 移除 Jquery 依赖，使用原生 JS
- 2023-08-28
  - 将壁纸地址换成 cn.bing.com
- 2025-09-11
  - 添加公众号二维码、压缩图片
- 2026-01-22
  - 调整 GitHub Models 接入与默认模型

### Star History

[![Star History Chart](https://star-history.dera.page/svg?repos=dmego/home.github.io&type=Date)](https://star-history.dera.page/#dmego/home.github.io&Date)

