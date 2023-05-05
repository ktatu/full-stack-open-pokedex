#!/bin/bash

response=$(curl --silent https://fullstack11.fly.dev/health)

if [[ "$response" == *"ok"* ]]; then
  echo "Health check passed"
  exit 0
else
  echo "Health check failed"
  exit 1
fi