# 智能体的配置

当今智能体较强，可一定程度上自行配置自己。

## 安装 Oh My OpenCode 插件

对智能体说：

```markdown
根据下述指南安装并配置插件：
https://raw.githubusercontent.com/code-yeongyu/oh-my-openagent/refs/heads/dev/docs/guide/installation.md
```

## 接入聚合 MCP 服务

对智能体说：

```markdown
根据 OpenCode 的[文档](https://opencode.ai/docs/zh-cn/mcp-servers)，在你的配置文件配置 MCP：

地址：`http://172.17.0.1:25601/mcp`
密钥：`（密钥内容）`
```

## 配置大模型 API

对智能体说：

```markdown
根据 OpenCode 的[文档](https://opencode.ai/docs/zh-cn)，在你的配置文件配置大模型 API：

地址：`http://172.17.0.1:25602/proxy/agents`
格式：`openai-compatible`
密钥：`（密钥内容）`
可用模型：`（可用模型的 ID）`

如果已安装了 Oh My OpenCode，根据模型性能分配 Oh My OpenCode 的子智能体所用模型。
```

## 智能体技能

对智能体说：

```markdown
根据 OpenCode 的[文档](https://opencode.ai/docs/zh-cn)，在你的总配置文件配置以下智能体技能：

`https://github.com/obra/superpowers`、`https://skills.sh/vercel-labs/skills/find-skills`。
```
