# Quick Setup: cPanel Push Deployment (Automatic)

Based on [cPanel Git Deployment Documentation](https://docs.cpanel.net/knowledge-base/web-services/), this is the **easiest and fastest** way to set up automatic deployment.

## ✅ What You Already Have
- ✅ `.cpanel.yml` file (deployment script)
- ✅ GitHub repository connected to cPanel
- ✅ Repository path: `/home/blendwi1/repositories/website`

## 🚀 Quick Setup (5 Minutes)

### Step 1: Configure Push Deployment in cPanel

1. Log into **cPanel**
2. Go to **Files** → **Git Version Control**
3. Find your repository: `website`
4. Click **Manage** or the **gear icon** ⚙️
5. Scroll to **Deployment** section
6. Configure:
   - **Deployment Type**: Select **Push Deployment** 
   - **Deployment Branch**: `main`
   - **Deployment Path**: `/home/blendwi1/public_html`
   - **Deployment Script**: Leave empty (`.cpanel.yml` will be used automatically)
7. Click **Update** or **Save**

### Step 2: Get Webhook URL from cPanel

After configuring push deployment, cPanel will show you a **Webhook URL**. It looks like:
```
https://your-server-ip:2083/execute/Git/deploy?repository=website&access_token=xxxxx
```

**Copy this URL** - you'll need it for Step 3.

### Step 3: Add Webhook to GitHub

1. Go to: https://github.com/BlendWitTech/website/settings/hooks
2. Click **Add webhook**
3. **Payload URL**: Paste the webhook URL from Step 2
4. **Content type**: `application/json`
5. **Secret**: Leave empty (or use the access token from cPanel)
6. **Which events**: Select **Just the push event**
7. **Active**: ✅ Checked
8. Click **Add webhook**

### Step 4: Test It!

1. Make a small change (add a comment in `index.html`)
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Test automatic deployment"
   git push origin main
   ```
3. **Check your website** - it should update within seconds! ⚡

## 🎯 How It Works

1. **You push to GitHub** → GitHub sends webhook to cPanel
2. **cPanel receives webhook** → Automatically pulls latest code
3. **cPanel reads `.cpanel.yml`** → Executes deployment tasks
4. **Files copied to public_html** → Website updated automatically!

## ✅ Benefits

- ⚡ **Instant deployment** (no delay)
- 🔒 **Secure** (uses cPanel's built-in security)
- 🎯 **Simple** (no SSH keys needed)
- 📝 **Uses your `.cpanel.yml`** file automatically
- 🔄 **Fully automatic** (no manual clicks needed)

## 🔍 Verify It's Working

1. Check **GitHub** → **Settings** → **Webhooks** → You should see a ✅ green checkmark
2. Check **cPanel** → **Git Version Control** → Should show "Push Deployment" enabled
3. Make a test push and watch your site update automatically!

## ⚠️ Troubleshooting

### Webhook Not Working?
- Verify webhook URL is correct (check cPanel for exact URL)
- Check webhook shows ✅ in GitHub (green checkmark)
- Ensure repository name matches: `website`

### Deployment Not Happening?
- Check `.cpanel.yml` file exists in repository root
- Verify deployment path is correct: `/home/blendwi1/public_html`
- Check cPanel error logs: **Metrics** → **Errors**

### Files Not Updating?
- Ensure `.cpanel.yml` has correct file paths
- Check file permissions on server
- Verify deployment path exists

---

**That's it! Your website will now update automatically on every push! 🎉**

Reference: [cPanel Git Deployment Guide](https://docs.cpanel.net/knowledge-base/web-services/)

