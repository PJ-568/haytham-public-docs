# 智能体的部署

## 部署辅助终端智能体（可选）

可选：安装并登录配置 `qwen-code`，当出现问题时可执行 `qwen` 命令启动命令行智能体辅助排障。

## 创建服务账号

为智能体创建 GitHub 账号，之后智能体的授权和 GitHub 操作都由智能体在此账号上发出。

## 初始化软件环境

安装 `docker`、`git` 和 `github-cli`。

运行 `gh auth login`，在其提供的网页地址内使用智能体的 GitHub 账号为其授权。

## 初始化项目目录

若所有智能体部署相关文件都计划存放在 `$HOME/.local/bin/` 目录下。

执行：

```bash
mkdir -p $HOME/.local/bin/{caddy,gpt-load,fetcher-mcp,mcphub,opencode-docker-web,searxng}
```

## 写入部署计划自述

编辑 `$HOME/.local/bin/README`，写入：

```markdown
# 各服务说明

- Caddy（占用 `80`、`443` 端口）：
  把访问服务器的流量路由至对应服务；
  实现对域名的免费自动 SSL 签名和续签。

- OpenCode（占用 `25600` 端口）：
  多智能体并行驱动的智能体系统。

  用户名：（用户名）
  密码：（密码）

- MCP Hub（占用 `25601` 端口）:
  MCP 服务聚合网关。

  用户名：（用户名）
  密码：（密码）

- GPT Load（占用 `25602` 端口）:
  大模型 API 聚合透明路由。

  密钥：（鉴权密钥）

- SearXNG（占用 `25603` 端口）：
  聚合元搜索引擎。

  已设置优先使用国内搜索引擎信息源，关闭国外搜索引擎。

- Fetcher MCP（占用 `25604` 端口）：
  先进网页内容获取格式化工具。

## 已弃用

- ~~OpenWebUI~~（占用 `25600` 端口）:
  智能体网页客户端。

  淘汰原因：不稳定，错误处理一坨，错误信息可读性差，无法 debug。

  电子邮箱：（电子邮箱）
  用户名：（用户名）
  密码：（密码）

- ~~Lobe Hub~~（占用 `25600`、`25603` 端口）：
  重型智能体网页客户端。

  淘汰原因：太耗资源，部署维护困难。

- ~~Libre Chat~~（占用 `25600` 端口）：
  企业级开源智能体网页客户端。

  淘汰原因：依赖过多，资源占用过多。

- ~~OpenClaw~~（占用 `18789`、`18790` 端口）：
  多子智能体规划驱动的智能体。

  淘汰原因：理念先进，但代码是玩具等级的实现。
```

## 部署各项服务容器

### 聚合元搜索引擎

在 `$HOME/.local/bin/searxng/` 下编写容器文件 `docker-compose.yml`：

```yaml
services:
  # caddy:
  #   container_name: caddy
  #   image: docker.io/library/caddy:2-alpine
  #   network_mode: host
  #   restart: unless-stopped
  #   volumes:
  #     - ./Caddyfile:/etc/caddy/Caddyfile:ro
  #     - caddy-data:/data:rw
  #     - caddy-config:/config:rw
  #   environment:
  #     - SEARXNG_HOSTNAME=${SEARXNG_HOSTNAME:-http://localhost}
  #     - SEARXNG_TLS=${LETSENCRYPT_EMAIL:-internal}
  #   logging:
  #     driver: "json-file"
  #     options:
  #       max-size: "1m"
  #       max-file: "1"

  # redis:
  #   container_name: redis
  #   image: docker.io/valkey/valkey:8-alpine
  #   command: valkey-server --save 30 1 --loglevel warning
  #   restart: unless-stopped
  #   networks:
  #     - searxng
  #   volumes:
  #     - valkey-data2:/data
  #   logging:
  #     driver: "json-file"
  #     options:
  #       max-size: "1m"
  #       max-file: "1"

  searxng:
    container_name: searxng
    image: docker.io/searxng/searxng:latest
    restart: always
    networks:
      - searxng
    ports:
      - "127.0.0.1:25603:8080"
    volumes:
      - ./searxng:/etc/searxng:rw
      - searxng-data:/var/cache/searxng:rw
    environment:
      - SEARXNG_BASE_URL=https://${SEARXNG_HOSTNAME:-localhost}/
    logging:
      driver: "json-file"
      options:
        max-size: "1m"
        max-file: "1"

networks:
  searxng:

volumes:
  # caddy-data:
  # caddy-config:
  # valkey-data2:
  searxng-data:
```

创建配置文件，执行：

```bash
mkdir $HOME/.local/bin/searxng/searxng
touch $HOME/.local/bin/searxng/searxng/{limiter.toml,settings.yml,uwsgi.ini}
```

在 `limiter.toml`，写入：

```toml
# This configuration file updates the default configuration file
# See https://github.com/searxng/searxng/blob/master/searx/limiter.toml

[botdetection.ip_limit]
# activate link_token method in the ip_limit method
link_token = true
```

在 `settings.yml`，写入：

```yaml
# see https://docs.searxng.org/admin/settings/settings.html#settings-use-default-settings
use_default_settings: true
engines:
  - name: bing
    disabled: false
  - name: 360search
    disabled: true
  - name: baidu
    disabled: true
  - name: sogou
    disabled: true
  - name: brave
    disabled: true
  - name: duckduckgo
    disabled: true
  - name: google
    disabled: true
  - name: qwant
    disabled: true
  - name: startpage
    disabled: true
  - name: wikidata
    disabled: true
  - name: wikipedia
    disabled: true
general:
  instance_name: "My SearXNG"
server:
  # base_url is defined in the SEARXNG_BASE_URL environment variable, see .env and docker-compose.yml
  secret_key: "（此处需更改）" # change this!
  limiter: false # can be disabled for a private instance
  image_proxy: false
search:
  autocomplete: baidu
  formats:
    - json
    - html
ui:
  static_use_hash: true
  results_on_new_tab: true
  infinite_scroll: true
  query_in_title: true
redis:
  url: false
```

更改 `secret_key` 字段。

在 `uwsgi.ini`，写入：

```ini
[uwsgi]
# Who will run the code
uid = searxng
gid = searxng

# Number of workers (usually CPU count)
# default value: %k (= number of CPU core, see Dockerfile)
workers = 4

# Number of threads per worker
# default value: 4 (see Dockerfile)
threads = 4

# The right granted on the created socket
chmod-socket = 666

# Plugin to use and interpreter config
single-interpreter = true
master = true
plugin = python3
lazy-apps = true
enable-threads = 4

# Module to import
module = searx.webapp

# Virtualenv and python path
pythonpath = /usr/local/searxng/
chdir = /usr/local/searxng/searx/

# automatically set processes name to something meaningful
auto-procname = true

# Disable request logging for privacy
disable-logging = true
log-5xx = true

# Set the max size of a request (request-body excluded)
buffer-size = 8192

# No keep alive
# See https://github.com/searx/searx-docker/issues/24
add-header = Connection: close

# Follow SIGTERM convention
# See https://github.com/searxng/searxng/issues/3427
die-on-term

# uwsgi serves the static files
static-map = /static=/usr/local/searxng/searx/static
static-gzip-all = True
offload-threads = 4
```

在该服务的目录下启动容器，执行：`docker compose up -d`。

执行 `ssh -f -N -L 25603:127.0.0.1:25603 （用户名）@（主机名）` 将服务器的端口映射到本地。
用浏览器访问 `http://127.0.0.1:25603`，检查服务功能是否正常。

### 网页内容获取格式化工具

在 `$HOME/.local/bin/fetcher-mcp/` 下编写容器文件 `docker-compose.yml`：

```yaml
services:
  fetcher-mcp:
    image: ghcr.io/jae-jae/fetcher-mcp:latest
    container_name: fetcher-mcp
    restart: unless-stopped
    deploy:
      resources:
        limits:
          cpus: "0.10"
          memory: 1024M
    ports:
      - "25604:3000"
    environment:
      - NODE_ENV=production
    # Using host network mode on Linux hosts can improve browser access efficiency
    # network_mode: "host"
    volumes:
      # For Playwright, may need to share certain system paths
      - /tmp:/tmp
    # Health check
    healthcheck:
      test: ["CMD", "wget", "--spider", "-q", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
```

在该服务的目录下启动容器，执行：`docker compose up -d`。

### MCP 工具聚合平台

在 `$HOME/.local/bin/mcphub/` 下编写配置文件 `mcp_settings.json`：

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"],
      "prompts": {
        "fetch-fetch": {
          "enabled": true,
          "description": "Fetch a URL and extract its contents as markdown (Should only use when fetcher-fetch_url(s) is not working)"
        }
      }
    },
    "searxng-search": {
      "command": "npx",
      "args": ["-y", "searxng-mul-mcp"],
      "env": {
        "SEARXNG_URL": "http://172.17.0.1:25603"
      },
      "type": "stdio",
      "owner": "admin",
      "enabled": true,
      "options": {
        "timeout": 256000
      }
    },
    "arxiv-paper": {
      "enabled": true,
      "owner": "admin",
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@langgpt/arxiv-paper-mcp@latest"],
      "tools": {
        "arxiv-paper-mcp-get_recent_ai_papers": {
          "enabled": false
        },
        "arxiv-paper-get_recent_ai_papers": {
          "enabled": false
        }
      }
    },
    "fetcher": {
      "enabled": true,
      "owner": "admin",
      "type": "streamable-http",
      "url": "http://172.17.0.1:25604/mcp",
      "options": {
        "timeout": 256000,
        "resetTimeoutOnProgress": true
      },
      "enableKeepAlive": false,
      "tools": {
        "fetcher-browser_install": {
          "enabled": false
        },
        "fetcher-fetch_url": {
          "enabled": true,
          "description": "Retrieve web page content from a specified URL (Use fetch-fetch if this is not working)"
        },
        "fetcher-fetch_urls": {
          "enabled": true,
          "description": "Retrieve web page content from multiple specified URLs (Use fetch-fetch if this is not working)"
        }
      }
    },
    "context7": {
      "enabled": false,
      "owner": "admin",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"],
      "env": {}
    }
  }
}
```

在 `$HOME/.local/bin/mcphub/` 下编写容器文件 `docker-compose.yml`：

```yaml
services:
  mcphub:
    image: samanhappy/mcphub:latest
    ports:
      - "25601:3000"
    volumes:
      - ./mcp_settings.json:/app/mcp_settings.json
    environment:
      - PORT=3000
      - REQUEST_TIMEOUT=60000
    restart: always
    deploy:
      resources:
        limits:
          cpus: "0.20"
          memory: 1024M

  # 可选：用于智能路由的 PostgreSQL
  # postgres:
  #   image: pgvector/pgvector:pg16
  #   environment:
  #     POSTGRES_DB: mcphub
  #     POSTGRES_USER: mcphub
  #     POSTGRES_PASSWORD: passwd
  #   volumes:
  #     - postgres_data:/var/lib/postgresql/data
  #   ports:
  #     - "5432:5432"

volumes:
  postgres_data:
```

在该服务的目录下启动容器，执行：`docker compose up -d`。

执行 `ssh -f -N -L 25601:127.0.0.1:25601 （用户名）@（主机名）` 将服务器的端口映射到本地。
用浏览器访问 `http://127.0.0.1:25601`，初始化管理账户，检查服务功能是否正常。

### 模型 API 聚合平台（可选）

在 `$HOME/.local/bin/gpt-load/` 下编写容器文件 `docker-compose.yml`：

```yaml
services:
  gpt-load:
    image: ghcr.io/tbphp/gpt-load:latest
    # build:
    #   context: .
    #   dockerfile: Dockerfile
    container_name: gpt-load
    ports:
      - "${PORT:-25602}:${PORT:-3001}"
    env_file:
      - .env
    restart: always
    volumes:
      - ./data:/app/data
    stop_grace_period: ${SERVER_GRACEFUL_SHUTDOWN_TIMEOUT:-10}s
    healthcheck:
      test: wget -q --spider -T 10 -O /dev/null http://localhost:${PORT:-3001}/health
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    # depends_on:
    #   mysql:
    #     condition: service_healthy
    #     restart: true
    #   postgres:
    #     condition: service_healthy
    #     restart: true
    #   redis:
    #     condition: service_healthy
    #     restart: true

  # 如果需要安装 MySQL、PostgreSQL 或 Redis，请取消以下注释并配置相应的环境变量。
  # 并且要在上方的 depends_on 中取消注释相应的依赖服务。

  # mysql:
  #   image: mysql:8.2
  #   container_name: gpt-load-mysql
  #   restart: always
  #   environment:
  #     MYSQL_ROOT_PASSWORD: 123456
  #     MYSQL_DATABASE: gpt-load
  #   volumes:
  #     - ./data/mysql:/var/lib/mysql
  #   healthcheck:
  #     test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
  #     interval: 5s
  #     timeout: 5s
  #     retries: 10

  # postgres:
  #   image: "postgres:16"
  #   container_name: gpt-load-postgres
  #   environment:
  #     POSTGRES_USER: postgres
  #     POSTGRES_PASSWORD: 123456
  #     POSTGRES_DB: gpt-load
  #   volumes:
  #     - ./data/postgres:/var/lib/postgresql/data
  #   healthcheck:
  #     test: ["CMD-SHELL", "pg_isready -U postgres -d gpt-load"]
  #     interval: 5s
  #     timeout: 5s
  #     retries: 10

  # redis:
  #   image: redis:latest
  #   container_name: gpt-load-redis
  #   restart: always
  #   healthcheck:
  #     test: ["CMD", "redis-cli", "ping"]
  #     interval: 5s
  #     timeout: 3s
  #     retries: 3
```

在该服务的目录下启动容器，执行：`docker compose up -d`。

执行 `ssh -f -N -L 25602:127.0.0.1:25602 （用户名）@（主机名）` 将服务器的端口映射到本地。
用浏览器访问 `http://127.0.0.1:25602`，初始化账户，配置模型 API 路由，检查服务功能是否正常。

### 智能体核心

#### 拉取并初始化必要文件

在 `$HOME/.local/bin/opencode-docker-web/` 下，执行：

```bash
wget -c 'https://github.com/haytham-ai-assistant/opencode-docker-web/raw/refs/heads/master/docker-compose.yml' && \
wget -c 'https://github.com/haytham-ai-assistant/opencode-docker-web/raw/refs/heads/master/.env.example' && \
cp .env.example .env && \
mkdir {config,opencode,workspace}
```

编辑 `.env` 配置必要的鉴权，智能体的 GitHub 账号的访问令牌等信息。

在该服务的目录下启动容器，执行：`docker compose up -d`。

执行 `ssh -f -N -L 25600:127.0.0.1:25600 （用户名）@（主机名）` 将服务器的端口映射到本地。
用浏览器访问 `http://127.0.0.1:25600`，检查服务功能是否正常。

### 总路由

在 `$HOME/.local/bin/caddy/` 下编写容器文件 `docker-compose.yml`：

```yaml
services:
  caddy:
    image: caddy:latest
    container_name: caddy-reverse-proxy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - ./www:/var/www/static
      - caddy_data:/data
      - caddy_config:/config
    networks:
      - caddy-network
    # 资源限制，防止占用过多服务器资源
    deploy:
      resources:
        limits:
          cpus: "0.5" # 最多使用 0.5 个 CPU 核心
          memory: 256M # 最大内存限制为 256MB
        reservations:
          cpus: "0.1" # 预留 0.1 个 CPU 核心
          memory: 64M # 预留 64MB 内存
    # 健康检查，确保服务正常运行
    healthcheck:
      test: ["CMD", "caddy", "validate", "--config", "/etc/caddy/Caddyfile"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 10s
    # Docker 日志限制，防止日志文件过大
    logging:
      driver: "json-file"
      options:
        max-size: "10m" # 单个日志文件最大 10MB
        max-file: "3" # 最多保留 3 个日志文件

networks:
  caddy-network:
    driver: bridge

volumes:
  caddy_data:
  caddy_config:
```

编写 `Caddyfile`：

```caddy
域.名 {

    handle {
        reverse_proxy * 172.17.0.1:25600
    }

    # 只记录错误级别日志
    log {
        output stdout
        level ERROR
        format json
    }

    # 禁用访问日志
    log / {
        output discard
    }
}
```

在该服务的目录下启动容器，执行：`docker compose up -d`。

用浏览器访问 `http://（主机名）`，检查服务功能是否正常。
