# cPanel Automatic Deployment Setup Guide

Based on [cPanel Git Deployment Documentation](https://docs.cpanel.net/knowledge-base/web-services/), here's how to set up automatic deployment for your website.

## Current Setup ✅

You already have:
- ✅ `.cpanel.yml` file configured
- ✅ GitHub repository connected
- ✅ cPanel Git Version Control set up

## Option 1: Push Deployment (Automatic) - Recommended

Push deployment automatically deploys when you push to GitHub.

### Step 1: Configure Push Deployment in cPanel

1. Log into **cPanel**
2. Go to **Files** → **Git Version Control**
3. Find your repository: `website`
4. Click **Manage** or **Edit**
5. Under **Deployment** section:
   - **Deployment Type**: Select **Push Deployment**
   - **Deployment Branch**: `main`
   - **Deployment Path**: `/home/blendwi1/public_html`
   - **Deployment Script**: Leave empty (`.cpanel.yml` handles this)

### Step 2: Set Up Webhook in GitHub

1. Go to your repository: https://github.com/BlendWitTech/website
2. Click **Settings** → **Webhooks** → **Add webhook**
3. **Payload URL**: 
   ```
   https://your-server-ip:2083/execute/Git/deploy?repository=website
   ```
   Or if you have a domain:
   ```
   https://blendwit.com:2083/execute/Git/deploy?repository=website
   ```
4. **Content type**: `application/json`
5. **Secret**: Leave empty or create one
6. **Which events**: Select **Just the push event**
7. **Active**: ✅ Checked
8. Click **Add webhook**

### Step 3: Test Push Deployment

1. Make a small change to your website
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Test push deployment"
   git push origin main
   ```
3. Check your website - it should update automatically!

## Option 2: Pull Deployment with Cron Job (Automatic)

This uses a cron job to automatically pull changes from GitHub.

### Step 1: Set Up Pull Deployment

1. In cPanel → **Git Version Control**
2. Configure repository for **Pull Deployment**
3. **Deployment Branch**: `main`
4. **Deployment Path**: `/home/blendwi1/public_html`

### Step 2: Create Cron Job

1. Go to **Advanced** → **Cron Jobs** in cPanel
2. Click **Create Cron Job**
3. **Common Settings**: Select **Every 5 minutes** (or your preferred interval)
4. **Command**: 
   ```bash
   /usr/local/cpanel/3rdparty/bin/git -C /home/blendwi1/repositories/website pull origin main && /usr/local/cpanel/3rdparty/bin/git -C /home/blendwi1/repositories/website checkout main
   ```
5. Click **Create**

### Step 3: Verify Cron Job

- Check **Cron Jobs** → **Current Cron Jobs** to see it running
- Changes will be pulled automatically every 5 minutes

## Option 3: Use GitHub Actions + cPanel (Current Setup)

Your current setup uses GitHub Actions to deploy via SSH. This is also valid and works well!

### Current Workflow:
1. Push to GitHub → GitHub Actions triggers
2. GitHub Actions connects via SSH to your server
3. Files are copied to `/home/blendwi1/public_html`
4. Permissions are set automatically

### To Make This Work:
You need to add GitHub Secrets (see `SSH_DEPLOYMENT_SETUP.md`)

## Comparison

| Method | Speed | Setup Complexity | Reliability |
|--------|-------|------------------|-------------|
| **Push Deployment** | Instant | Medium | High |
| **Cron Job Pull** | 5 min delay | Easy | Medium |
| **GitHub Actions SSH** | 1-2 min | Complex | High |

## Recommended: Push Deployment

For the best automatic deployment experience with cPanel, use **Push Deployment**:

1. ✅ Instant updates (no delay)
2. ✅ Uses your existing `.cpanel.yml` file
3. ✅ Native cPanel integration
4. ✅ No SSH keys needed
5. ✅ Works with your current setup

## Troubleshooting

### Push Deployment Not Working?
- Check webhook URL is correct
- Verify repository name matches in cPanel
- Check cPanel error logs: **Metrics** → **Errors**
- Ensure `.cpanel.yml` file exists and is valid

### Cron Job Not Running?
- Check cron job syntax is correct
- Verify Git path: `/usr/local/cpanel/3rdparty/bin/git`
- Check cron job logs in cPanel
- Ensure repository path is correct

### GitHub Actions SSH Failing?
- Verify all secrets are set correctly
- Check SSH key is added to server
- Test SSH connection manually
- Review GitHub Actions logs

## Next Steps

1. **Choose your method** (Push Deployment recommended)
2. **Configure in cPanel** (follow steps above)
3. **Test with a small change**
4. **Verify automatic deployment works**

---

**Reference**: [cPanel Git Deployment Documentation](https://docs.cpanel.net/knowledge-base/web-services/)

