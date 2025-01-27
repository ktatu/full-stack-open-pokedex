#!/bin/bash

response=$(curl --silent http://localhost:8080/health)

if [[ "$response" == *"ok"* ]]; then
  echo "Health check passed"
  exit 0
else
  echo "Health check failed"
  exit 1
fi