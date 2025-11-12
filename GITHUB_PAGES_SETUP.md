# GitHub Pages Automatic Deployment Setup

## ✅ Current Status
Your GitHub Actions workflow is already configured and ready! It will automatically deploy your website whenever you push code to the `main` branch.

## 🚀 Enable GitHub Pages (One-Time Setup)

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/BlendWitTech/website
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### Step 2: Verify Deployment
1. Go to **Actions** tab in your repository
2. You should see "Deploy Website" workflow running
3. Once complete, your site will be live at:
   - `https://blendwittech.github.io/website/`
   - Or your custom domain if configured

## 🌐 Custom Domain Setup (Optional)

If you want to use `blendwit.com` with GitHub Pages:

### Step 1: Add CNAME File
1. Create a file named `CNAME` in the root directory
2. Add this content:
   ```
   blendwit.com
   www.blendwit.com
   ```

### Step 2: Update DNS Records
In your domain registrar (where you bought blendwit.com):
- Add a CNAME record:
  - Name: `@` or blank
  - Value: `blendwittech.github.io`
- Add another CNAME record:
  - Name: `www`
  - Value: `blendwittech.github.io`

### Step 3: Enable Custom Domain in GitHub
1. Go to repository Settings → Pages
2. Under **Custom domain**, enter: `blendwit.com`
3. Check **Enforce HTTPS** (recommended)

## 📋 How It Works Now

1. **You push code** → `git push origin main`
2. **GitHub Actions triggers** → Automatically runs deployment workflow
3. **Website updates** → Changes go live within 1-2 minutes
4. **No manual steps needed!** ✨

## 🔍 Monitoring Deployments

- **View deployments**: Go to **Actions** tab in GitHub
- **Check status**: Green checkmark = successful deployment
- **View logs**: Click on any workflow run to see detailed logs

## ⚠️ Important Notes

- **GitHub Pages is FREE** for public repositories
- **Automatic HTTPS** is included
- **Custom domain** is supported
- **Deployments happen automatically** on every push to `main`

## 🆚 GitHub Pages vs cPanel

**GitHub Pages (Recommended):**
- ✅ Fully automatic
- ✅ Free hosting
- ✅ Built-in HTTPS
- ✅ Fast CDN
- ✅ Easy to set up

**cPanel (Current):**
- ⚠️ Requires manual "Pull or Deploy" click
- ✅ Uses your existing server
- ✅ Full server control

You can use both! GitHub Pages for automatic updates, and cPanel as backup.

## 🎯 Next Steps

1. Enable GitHub Pages (follow Step 1 above)
2. Test by making a small change and pushing
3. Check Actions tab to see automatic deployment
4. Visit your site to verify updates

That's it! Your website will now update automatically on every push! 🚀

