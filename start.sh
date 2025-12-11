#!/usr/bin/env bash
set -euo pipefail
PORT=${PORT:-4173}
ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"
python -m http.server "$PORT" 2>/dev/null &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' INT TERM EXIT
sleep 1
printf "Play with Data is now served at http://localhost:%s\n" "$PORT"
wait "$SERVER_PID"
