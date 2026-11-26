#!/usr/bin/env bash
# SimpleAPI 启动 / 重启脚本（macOS / Linux）
# 用法：在 source 目录执行 ./start.sh
set -euo pipefail

cd "$(dirname "$0")"
ROOT="$(pwd)"
JAR="scmp.jar"
LIB_DIR="lib"

JAVA_OPTS=(
  -jar "$JAR"
  --db.type=sqlit
  --sqlit.path=./sqlit-db.db
  --project.location-file-path=file:./static/
  --project.socket.ports=3501
  --spring.profiles.active=pro
)

ensure_lib() {
  if [[ ! -d "$LIB_DIR" ]]; then
    echo "[SimpleAPI] 未找到目录 $LIB_DIR，无法启动" >&2
    exit 1
  fi
}

# 现测：按本目录 scmp.jar 命令行匹配进程
find_pids() {
  local pattern
  pattern="$ROOT/$JAR"
  if command -v pgrep >/dev/null 2>&1; then
    pgrep -f "$pattern" || true
  else
    ps -ax -o pid= -o command= | awk -v p="$pattern" 'index($0, p) { print $1 }' || true
  fi
}

stop_if_running() {
  local pids
  pids="$(find_pids | tr '\n' ' ' | sed 's/[[:space:]]*$//')"
  if [[ -z "${pids}" ]]; then
    echo "[SimpleAPI] 未检测到已运行实例"
    return 0
  fi
  echo "[SimpleAPI] 检测到已运行，正在停止: $pids"
  # shellcheck disable=SC2086
  kill $pids 2>/dev/null || true
  sleep 2
  # shellcheck disable=SC2086
  for pid in $pids; do
    if kill -0 "$pid" 2>/dev/null; then
      echo "[SimpleAPI] 强制结束: $pid"
      kill -9 "$pid" 2>/dev/null || true
    fi
  done
  echo "[SimpleAPI] 已停止"
}

start_app() {
  if [[ ! -f "$JAR" ]]; then
    echo "[SimpleAPI] 未找到 $JAR" >&2
    exit 1
  fi
  if ! command -v java >/dev/null 2>&1; then
    echo "[SimpleAPI] 未找到 java，请安装 JDK 8+" >&2
    exit 1
  fi
  echo "[SimpleAPI] 正在启动..."
  nohup java "${JAVA_OPTS[@]}" >/dev/null 2>&1 &
  sleep 1
  if [[ -n "$(find_pids)" ]]; then
    echo "[SimpleAPI] 已启动"
  else
    echo "[SimpleAPI] 启动后未检测到进程，请检查环境" >&2
    exit 1
  fi
  echo "[SimpleAPI] 访问: http://127.0.0.1:3500/scmp/static/index.html#/request/api"
}

ensure_lib
stop_if_running
start_app
