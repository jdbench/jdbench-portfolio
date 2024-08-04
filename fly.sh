#!/bin/bash
echo "app = '$VAR_FLY_APP_NAME'
primary_region = 'sea'

[build]
  image = '$VAR_FLY_IMAGE'

[http_service]
  internal_port = 3000
  force_https = true
  auto_stop_machines = 'stop'
  auto_start_machines = true
  min_machines_running = 0
  processes = ['app']

[[vm]]
  memory = '1gb'
  cpu_kind = 'shared'
  cpus = 1
" -> fly.toml