#!/bin/bash

# Cloudflare Images API - List all images
# Usage: ./scripts/list-cloudflare-images.sh YOUR_API_TOKEN

ACCOUNT_ID="323c464c8747c7110b8060cae23df989"
API_TOKEN="${1}"

if [ -z "$API_TOKEN" ]; then
  echo "❌ Error: API token required"
  echo "Usage: ./scripts/list-cloudflare-images.sh YOUR_API_TOKEN"
  echo ""
  echo "To get your API token:"
  echo "1. Go to https://dash.cloudflare.com/profile/api-tokens"
  echo "2. Create a token with 'Cloudflare Images' permissions"
  echo "3. Copy the token and run: ./scripts/list-cloudflare-images.sh YOUR_TOKEN"
  exit 1
fi

echo "🔍 Fetching images from Cloudflare..."
echo ""

# Fetch images from Cloudflare API
RESPONSE=$(curl -s -X GET "https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v2" \
  -H "Authorization: Bearer ${API_TOKEN}" \
  -H "Content-Type: application/json")

# Check if request was successful
SUCCESS=$(echo "$RESPONSE" | jq -r '.success')

if [ "$SUCCESS" != "true" ]; then
  echo "❌ Error fetching images:"
  echo "$RESPONSE" | jq '.errors'
  exit 1
fi

# Parse and display images
IMAGES=$(echo "$RESPONSE" | jq -r '.result.images[]')
TOTAL=$(echo "$RESPONSE" | jq -r '.result.images | length')

echo "✅ Found $TOTAL images in your Cloudflare account"
echo ""
echo "=================================================="
echo ""

# Display each image with details
echo "$RESPONSE" | jq -r '.result.images[] |
  "ID: \(.id)\n" +
  "Filename: \(.filename)\n" +
  "Uploaded: \(.uploaded)\n" +
  "URL: https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/\(.id)/public\n" +
  "--------------------------------------------------"'

echo ""
echo "=================================================="
echo ""
echo "📋 Quick Copy - Image IDs only:"
echo ""
echo "$RESPONSE" | jq -r '.result.images[].id'
echo ""
echo "💡 Use these IDs in your pages:"
echo "   imageUrl=\"https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/<image_id>/public\""
