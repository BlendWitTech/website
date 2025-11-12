# SSH Automatic Deployment Setup Guide

## Overview
This guide will help you set up automatic SSH deployment from GitHub to your cPanel server. Once configured, every push to `main` will automatically deploy your website.

## Prerequisites
- cPanel server with SSH access enabled
- SSH key pair (public and private)
- GitHub repository access

## Step 1: Generate SSH Key Pair

### On Windows (PowerShell):
```powershell
# Generate SSH key
ssh-keygen -t ed25519 -C "github-actions-deploy" -f deploy_key

# This creates two files:
# - deploy_key (private key) - Keep this SECRET
# - deploy_key.pub (public key) - Add to server
```

### On Linux/Mac:
```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f deploy_key
```

**Important:** Don't add a passphrase when prompted (press Enter twice) - this is required for automated deployments.

## Step 2: Add Public Key to Your Server

### Option A: Using cPanel File Manager
1. Log into cPanel
2. Go to **File Manager**
3. Navigate to `/home/blendwi1/.ssh/` (create folder if it doesn't exist)
4. Create/edit `authorized_keys` file
5. Paste the contents of `deploy_key.pub` into this file
6. Set permissions: `chmod 600 authorized_keys` and `chmod 700 .ssh`

### Option B: Using SSH (if you have access)
```bash
# Copy public key to server
ssh-copy-id -i deploy_key.pub blendwi1@your-server-ip

# Or manually:
cat deploy_key.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

## Step 3: Get Your Server Information

You'll need:
1. **Server Host/IP**: Your server's IP address or domain
   - Check in cPanel → Server Information
   - Or use your domain if SSH is enabled: `blendwit.com`

2. **SSH Port**: Usually `22` (default)
   - Check in cPanel → SSH Access

3. **Deployment Path**: Where files should be deployed
   - Usually: `/home/blendwi1/public_html`
   - Check in cPanel → File Manager

4. **Username**: Your cPanel username
   - Usually: `blendwi1` (from your cPanel path)

## Step 4: Add Secrets to GitHub

1. Go to your repository: https://github.com/BlendWitTech/website
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these secrets one by one:

### Secret 1: SERVER_HOST
- **Name**: `SERVER_HOST`
- **Value**: Your server IP or domain (e.g., `123.45.67.89` or `blendwit.com`)

### Secret 2: SERVER_USER
- **Name**: `SERVER_USER`
- **Value**: Your cPanel username (e.g., `blendwi1`)

### Secret 3: SERVER_SSH_KEY
- **Name**: `SERVER_SSH_KEY`
- **Value**: Copy the ENTIRE contents of `deploy_key` (the private key file)
  - Open `deploy_key` in a text editor
  - Copy everything including:
    ```
    -----BEGIN OPENSSH PRIVATE KEY-----
    [key content]
    -----END OPENSSH PRIVATE KEY-----
    ```

### Secret 4: SERVER_PORT (Optional)
- **Name**: `SERVER_PORT`
- **Value**: `22` (or your custom SSH port)

### Secret 5: SERVER_DEPLOY_PATH
- **Name**: `SERVER_DEPLOY_PATH`
- **Value**: `/home/blendwi1/public_html` (your public_html directory)

## Step 5: Test SSH Connection

Before deploying, test the connection:

```bash
# Test SSH connection
ssh -i deploy_key blendwi1@your-server-ip

# If successful, you should be logged into your server
# Type 'exit' to disconnect
```

## Step 6: Verify Deployment

1. Make a small change to your website
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test SSH deployment"
   git push origin main
   ```
3. Go to GitHub → **Actions** tab
4. Watch the "Deploy to Server" workflow run
5. Check your website - it should update automatically!

## Troubleshooting

### Workflow Fails with "Permission Denied"
- Check that public key is in `~/.ssh/authorized_keys` on server
- Verify file permissions: `chmod 600 ~/.ssh/authorized_keys`
- Ensure SSH access is enabled in cPanel

### Workflow Fails with "Host Key Verification Failed"
- This is normal for first connection
- The workflow will automatically accept the host key

### Files Not Deploying
- Verify `SERVER_DEPLOY_PATH` is correct
- Check that the path exists on your server
- Ensure user has write permissions to the directory

### Connection Timeout
- Check firewall settings
- Verify SSH port is correct
- Ensure server allows SSH connections from GitHub Actions IPs

## Security Best Practices

1. **Never commit private keys** to Git
2. **Use SSH key restrictions** in cPanel if available
3. **Rotate keys regularly** (every 6-12 months)
4. **Monitor deployment logs** in GitHub Actions
5. **Use specific IP restrictions** if possible

## Current Workflow Configuration

The workflow (`.github/workflows/deploy-server.yml`) will:
1. ✅ Validate all files exist
2. ✅ Copy files to your server via SCP
3. ✅ Set proper file permissions
4. ✅ Deploy automatically on every push to `main`

## Need Help?

- Check GitHub Actions logs for detailed error messages
- Verify all secrets are set correctly
- Test SSH connection manually first
- Contact your hosting provider if SSH access issues persist

---

**Once configured, your website will deploy automatically on every push! 🚀**

