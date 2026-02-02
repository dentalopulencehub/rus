# Cloudflare Images Management

## Account Details
- **Account ID:** `323c464c8747c7110b8060cae23df989`
- **Account Hash:** `W93NbEGaswuledAsk5GMeA`
- **Image Delivery URL:** `https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/<image_id>/<variant_name>`

## List All Images

### Option 1: Using Node.js Script (Recommended)
```bash
# Get your API token from https://dash.cloudflare.com/profile/api-tokens
node scripts/list-cloudflare-images.js YOUR_API_TOKEN
```

This will:
- List all images with details
- Display all image IDs
- Show full URLs for each image
- Save results to `cloudflare-images.json`

### Option 2: Using Bash Script
```bash
./scripts/list-cloudflare-images.sh YOUR_API_TOKEN
```

### Getting Your API Token
1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Select "Cloudflare Images" permissions (at minimum: `Cloudflare Images:Read`)
4. Create the token and copy it
5. Run the script with your token

## Current Image Usage

### Services Using Cloudflare Images
- ✅ Audit & Assurance (2 images)
- ✅ Company Secretarial (2 images)
- ✅ Taxation Services (1 image + 1 local SVG)
- ✅ Payroll (2 images)
- ✅ HMRC & NCA Investigations (2 images)
- ✅ Company Formation (2 images)
- ✅ Forensic Accounting (2 images)

### Services Using Local SVG
- ⚠️ Business Advisory (2 local SVGs)
- ⚠️ Accounting & Bookkeeping (2 local SVGs)

### Sectors Using Cloudflare Images
- ✅ Education & Academies (2 images)
- ✅ Retail (2 images)
- ✅ Construction (2 images)
- ✅ Contractors & Professional Services (2 images)
- ✅ Charities & Not-for-profit (2 images)
- ✅ Information Technology (2 images)
- ✅ Creative & Media (2 images)
- ✅ Property Services (2+ images)
- And more...

## How to Use Images in Pages

### In Service/Sector Pages
```tsx
<ServiceHero
  title="Your Service"
  subtitle="Your subtitle"
  description="Your description"
  imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/<image_id>/public"
/>
```

### In CTA Sections
```tsx
<CTASimple
  title="Your CTA Title"
  subtitle="Your subtitle"
  imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/<image_id>/public"
/>
```

## Cloudflare Image Variants

Default variants available:
- `public` - Full-size public access (used in most places)
- `thumbnail` - Smaller thumbnail version
- Custom variants can be created in Cloudflare dashboard

## Background Pattern

The ServiceHero component uses this as a background pattern:
```
https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ee11fdf-aac0-4c26-0f5e-026a2df87900/public
```

## Next Steps

1. Run the image listing script to see all available images
2. Review `cloudflare-images.json` for organized image data
3. Update pages that still use local SVGs to use Cloudflare images
4. Ensure all new images are uploaded to Cloudflare for consistency

## Image Upload

To upload new images to Cloudflare:
1. Go to https://dash.cloudflare.com
2. Navigate to "Images"
3. Upload your images
4. Copy the image ID
5. Use the URL format: `https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/<image_id>/public`
