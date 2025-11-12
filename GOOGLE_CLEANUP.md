# Google Search Cleanup Guide

This guide helps you remove old/invalid pages from Google search results.

## Problem
Google is showing pages that no longer exist on your website:
- `/listings/e-...`
- `/seo-analyst`
- Other old pages

## Solution Steps

### 1. Files Created ✅
- **404.html** - Custom 404 error page
- **.htaccess** - Redirects old URLs to correct pages
- **Updated robots.txt** - Tells Google not to crawl old pages
- **Updated sitemap.xml** - Only includes current pages

### 2. Submit Updated Sitemap to Google

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://blendwit.com`
3. Verify ownership (via DNS, HTML file, or meta tag)
4. Go to **Sitemaps** section
5. Submit: `https://blendwit.com/sitemap.xml`

### 3. Request Removal of Old Pages

#### Option A: Remove via Search Console (Recommended)
1. In Google Search Console, go to **Removals** → **New Request**
2. Enter the old URLs:
   - `https://blendwit.com/listings/e-...`
   - `https://blendwit.com/seo-analyst`
3. Select "Remove this URL"
4. Submit the request

#### Option B: Use robots.txt (Already Done)
- Old pages are already disallowed in `robots.txt`
- Google will stop crawling them on next visit

#### Option C: Return 404 or 301 Redirects (Already Done)
- `.htaccess` file redirects old pages to homepage or relevant sections
- 404.html handles any remaining broken links

### 4. Force Google to Re-crawl

1. In Google Search Console, go to **URL Inspection**
2. Enter your homepage: `https://blendwit.com`
3. Click **Request Indexing**
4. Repeat for other important pages

### 5. Monitor Progress

- Check **Coverage** report in Search Console weekly
- Monitor **Removals** to see if old pages are being removed
- Check **Performance** to see if old URLs are still getting clicks

## Expected Timeline

- **Immediate**: Redirects work, 404 page shows for broken links
- **1-2 weeks**: Google starts removing old pages from index
- **2-4 weeks**: Old pages completely removed from search results
- **Ongoing**: New pages indexed correctly

## Additional Actions

### Update Google My Business (if applicable)
- Ensure business information is correct
- Update website URL if changed

### Check Other Search Engines
- Submit sitemap to Bing Webmaster Tools
- Submit to other search engines you care about

## Prevention

- Always use 301 redirects when removing pages
- Keep sitemap.xml updated
- Regularly check Google Search Console for issues
- Use canonical tags to prevent duplicate content

## Verification

After 2-4 weeks, search for:
- `site:blendwit.com/listings`
- `site:blendwit.com/seo-analyst`

These should return no results or only show redirects.

