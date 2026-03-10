# 软件环境初始化

可选在线维护和本地维护两种方式。

在线维护仅需网页环境即可修改维护，但对 Git 提交（Commit）的修改和文档的测试需依赖仓库持续集成。

本地维护需安装并配置多个软件并拉取仓库到本地，对 Git 提交（Commit）的修改和文档测试更友好。

## 在线维护

### 仓库配置

[**点击我以复刻（Fork）本仓库**](https://github.com/haytham-ai/public-docs/fork)，选择“Create fork”按钮。

您应看到在您的命名空间中的仓库如 `your-user-name/public-docs`，其中 `your-user-name` 为您的 GitHub 用户名。
地址似 `https://github.com/your-user-name/public-docs`。
下文称做“您的仓库”。

接下来请配置[自动测试工作流](actions_init.md)。

## 本地维护

### 软件安装

开始在本地维护前，请确保已安装以下软件：

- [Git](https://git-scm.com/)：

  确保运行 `git --version` 命令无报错。

- [mdBook](https://github.com/rust-lang/mdBook/releases)，选择版本：{{ mdbook-version }}：
  - 使用包管理器安装，如执行 `pamac install mdbook`。
  - 对应操作系统下载后解压出可执行文件并放到环境变量包含的目录中。

  确保运行 `mdbook --version` 命令无报错。

- [AutoCorrect](https://github.com/huacnlee/autocorrect/releases/latest)（可选）：
  - 使用包管理器安装，如执行 `pamac install autocorrect-bin`。
  - 对应操作系统下载后解压出可执行文件并放到环境变量包含的目录中。

  确保运行 `autocorrect --version` 命令无报错。

### 仓库配置

[**点击我以复刻（Fork）本仓库**](https://github.com/haytham-ai/public-docs/fork)，选择“Create fork”按钮。

您应看到在您的命名空间中的仓库如 `your-user-name/public-docs`，其中 `your-user-name` 为您的 GitHub 用户名。
地址似 `https://github.com/your-user-name/public-docs`。
下文称做“您的仓库”。

接下来请配置[自动测试工作流](actions_init.md)。
