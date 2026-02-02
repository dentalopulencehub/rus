#!/usr/bin/env node

/**
 * Cloudflare Images Lister
 * Lists all images from your Cloudflare Images account
 *
 * Usage: node scripts/list-cloudflare-images.js YOUR_API_TOKEN
 *
 * To get your API token:
 * 1. Go to https://dash.cloudflare.com/profile/api-tokens
 * 2. Create a token with 'Cloudflare Images' read permissions
 * 3. Copy the token and run this script
 */

const ACCOUNT_ID = '323c464c8747c7110b8060cae23df989';
const ACCOUNT_HASH = 'W93NbEGaswuledAsk5GMeA';

const apiToken = process.argv[2];

if (!apiToken) {
  console.error('❌ Error: API token required\n');
  console.log('Usage: node scripts/list-cloudflare-images.js YOUR_API_TOKEN\n');
  console.log('To get your API token:');
  console.log('1. Go to https://dash.cloudflare.com/profile/api-tokens');
  console.log('2. Create a token with "Cloudflare Images" read permissions');
  console.log('3. Copy the token and run: node scripts/list-cloudflare-images.js YOUR_TOKEN');
  process.exit(1);
}

async function listCloudflareImages() {
  console.log('🔍 Fetching images from Cloudflare...\n');

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v2`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();

    if (!data.success) {
      console.error('❌ Error fetching images:');
      console.error(data.errors);
      process.exit(1);
    }

    const images = data.result.images;
    console.log(`✅ Found ${images.length} images in your Cloudflare account\n`);
    console.log('==================================================\n');

    // Display each image with details
    images.forEach((image, index) => {
      console.log(`${index + 1}. ${image.filename || 'Untitled'}`);
      console.log(`   ID: ${image.id}`);
      console.log(`   Uploaded: ${new Date(image.uploaded).toLocaleString()}`);
      console.log(`   URL: https://imagedelivery.net/${ACCOUNT_HASH}/${image.id}/public`);
      console.log(`   --------------------------------------------------`);
    });

    console.log('\n==================================================\n');
    console.log('📋 Quick Copy - Image IDs only:\n');
    images.forEach((image) => {
      console.log(image.id);
    });

    console.log('\n==================================================\n');
    console.log('💡 Image URLs for copy/paste:\n');
    images.forEach((image) => {
      console.log(`https://imagedelivery.net/${ACCOUNT_HASH}/${image.id}/public`);
    });

    console.log('\n==================================================\n');
    console.log('📝 Saving to cloudflare-images.json...');

    // Save to JSON file
    const fs = require('fs');
    const outputData = {
      accountId: ACCOUNT_ID,
      accountHash: ACCOUNT_HASH,
      totalImages: images.length,
      fetchedAt: new Date().toISOString(),
      images: images.map(img => ({
        id: img.id,
        filename: img.filename,
        uploaded: img.uploaded,
        url: `https://imagedelivery.net/${ACCOUNT_HASH}/${img.id}/public`,
        variants: img.variants || [],
      })),
    };

    fs.writeFileSync(
      './cloudflare-images.json',
      JSON.stringify(outputData, null, 2)
    );

    console.log('✅ Saved to cloudflare-images.json\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

listCloudflareImages();
