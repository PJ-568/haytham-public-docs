# 文档的编写

## 启动编辑器

如果您在[软件环境初始化](env_init.md)时配置了：

- [在线维护](env_init.md#在线维护)：使用[在线编辑器](#在线编辑器)；
- [本地维护](env_init.md#本地维护)：使用[拉取仓库并本地编辑](#拉取仓库并本地编辑)。

### 在线编辑器

在您的仓库的主页面（`Code` 页面）中，按下键盘上的句号键 <kbd>.</kbd>，
或访问 `https://github.dev/your-user-name/public-docs` 启动网页编辑器进行编辑。

### 拉取仓库并本地编辑

在终端模拟器或命令行执行：

```bash
git clone https://github.com/your-user-name/public-docs.git
```

即可拉取仓库到本地目录 `public-docs`。

在该目录下启动您喜好的编辑器（如 [VSCode](https://code.visualstudio.com/)），就可开始编写文档了。

## 目录结构示例

```plaintext
src/
├── index.md                      # 文档首页
├── SUMMARY.md                    # 目录配置文件
├── products/                     # 产品类
│   ├── index.md
│   ├── videoextensometer/        # 视频引伸计类
│   │   ├── index.md
│   │   └── ...
│   └── visualstraingauge/        # DIC 系统类
│       ├── index.md
│       └── DIC_Tracker_ONS-B-10/
│           ├── v0.5.1/           # 版本
│           │   ├── index.md
│           │   └── ...
│           └── v0.5.0/
│               ├── index.md
│               └── ...
├── ...
└── doc-maintain/                 # 文档维护（当前目录）
    ├── index.md                  # 文档维护首页（章节描述）
    ├── env-init.md
    ├── doc-write.md              # 文档的编写（当前页面）
    └── doc-format.md
```

## 须知

- `src/SUMMARY.md` 文件为目录结构，请勿删除。
- 所有的文档名称、相对文件路径和层级关系必须在 `src/SUMMARY.md` 文件中定义，否则无法在在线文档中显示。
  - 名称保持与文章大标题一致。
  - 层级关系和目录层级保持一致。
- 为防止自动化脚本解析出错，所有目录（文件夹）名称仅能由英文字母、下划线、减号、点和数字组成，且不能以下划线、减号、点或数字开头。
