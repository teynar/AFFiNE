#!/bin/zsh


set -e
set -o pipefail

# packages/frontend/apps/ios/

cd "$(dirname "$0")"
cd ../../../../

if [ ! -d .git ]; then
  echo "[-] .git directory not found at project root"
  exit 1
fi

echo "[+] setting up the project"

echo "[*] interacting with yarn..."
yarn install
export BUILD_TYPE=canary
export PUBLIC_PATH="/"
yarn affine @affine/ios build
yarn affine @affine/ios cap sync

echo "[*] interacting with rust..."
rustup target add aarch64-apple-ios
rustup target add aarch64-apple-ios-sim
rustup target add aarch64-apple-darwin

echo "[*] interacting with graphql..."
apollo-ios-cli generate || true

echo "[+] setup complete"

yarn affine @affine/ios cap open ios
