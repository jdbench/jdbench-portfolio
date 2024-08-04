#!/bin/bash
echo "
# fly.toml app configuration file generated for jdbench-portfolio on 2024-08-04T04:41:05-06:00
#
# See https://fly.io/docs/reference/configuration/ for information about how to use this file.
#

app = '$VAR_FLY_APP_NAME'
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