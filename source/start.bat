@echo off
setlocal EnableExtensions EnableDelayedExpansion
REM SimpleAPI 启动 / 重启脚本（Windows）
REM 用法：在 source 目录双击或命令行执行 start.bat
REM 是否运行：现测本目录 scmp.jar 进程，不写 PID 文件

cd /d "%~dp0"
set "ROOT=%CD%"
set "JAR=scmp.jar"
set "LIB_DIR=lib"
set "JAVA_ARGS=-jar %JAR% --db.type=sqlit --sqlit.path=./sqlit-db.db --project.location-file-path=file:./static/ --project.socket.ports=3501 --spring.profiles.active=pro"

REM ---- 1) 检查 lib ----
if not exist "%LIB_DIR%\" (
  echo [SimpleAPI] 未找到目录 %LIB_DIR%，无法启动
  exit /b 1
)

REM ---- 2) 现测已运行则杀死 ----
set "KILLED="
for /f "usebackq delims=" %%P in (`powershell -NoProfile -Command "$root=[regex]::Escape('%ROOT:\=\\%'); Get-CimInstance Win32_Process -Filter \"Name='java.exe'\" | Where-Object { $_.CommandLine -and ($_.CommandLine -match $root) -and ($_.CommandLine -match 'scmp\.jar') } | ForEach-Object { $_.ProcessId }"`) do (
  echo [SimpleAPI] 检测到已运行，正在停止 PID=%%P
  taskkill /PID %%P /T /F >nul 2>&1
  set "KILLED=1"
)
if defined KILLED (
  echo [SimpleAPI] 已停止旧进程
) else (
  echo [SimpleAPI] 未检测到已运行实例
)

REM ---- 3) 启动 ----
if not exist "%JAR%" (
  echo [SimpleAPI] 未找到 %JAR%
  exit /b 1
)
where java >nul 2>&1
if errorlevel 1 (
  echo [SimpleAPI] 未找到 java，请安装 JDK 8+
  exit /b 1
)

echo [SimpleAPI] 正在启动...
start "SimpleAPI" /B cmd /c "java %JAVA_ARGS% >nul 2>&1"
timeout /t 2 /nobreak >nul

set "STARTED="
for /f "usebackq delims=" %%P in (`powershell -NoProfile -Command "$root=[regex]::Escape('%ROOT:\=\\%'); Get-CimInstance Win32_Process -Filter \"Name='java.exe'\" | Where-Object { $_.CommandLine -and ($_.CommandLine -match $root) -and ($_.CommandLine -match 'scmp\.jar') } | Select-Object -First 1 -ExpandProperty ProcessId"`) do (
  set "STARTED=1"
)
if defined STARTED (
  echo [SimpleAPI] 已启动
) else (
  echo [SimpleAPI] 启动后未检测到进程，请检查环境
  exit /b 1
)

echo [SimpleAPI] 访问: http://127.0.0.1:3500/scmp/static/index.html#/request/api
exit /b 0
