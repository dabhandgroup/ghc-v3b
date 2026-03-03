#!/bin/bash
# Download Platform One assets from original source
# Run this script to populate public/assets/ with the real files

ASSETS_DIR="$(dirname "$0")/../public/assets"
mkdir -p "$ASSETS_DIR"

echo "Downloading Platform One hero video..."
curl -L -o "$ASSETS_DIR/platformone-hero.mp4" \
  "https://platformone.com.au/wp-content/uploads/2023/10/GIFS_19.mp4"

echo "Downloading Platform One venue image..."
curl -L -o "$ASSETS_DIR/platformone-venue.webp" \
  "https://platformone.com.au/wp-content/uploads/2024/05/IMG_1696-jpg.webp"

echo "Done! Assets saved to public/assets/"
ls -lh "$ASSETS_DIR"
