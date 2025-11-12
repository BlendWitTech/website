# Deployment Guide

This guide explains how to set up automatic deployment for the Blendwit website.

## Deployment Options

### Option 1: GitHub Pages (Easiest - Free)

GitHub Pages automatically deploys your website when you push to the main branch.

#### Setup Steps:

1. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/BlendWitTech/website
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **The workflow is already configured:**
   - The `.github/workflows/deploy.yml` file will automatically deploy on every push to `main`
   - Your site will be available at: `https://blendwittech.github.io/website/`

3. **Custom Domain (Optional):**
   - Add your domain to the `CNAME` file in the repository
   - Update DNS records to point to GitHub Pages
   - The workflow already includes the `cname: blendwit.com` setting

### Option 2: Deploy to Your Own Server

If you want to deploy to your own web server, use the server deployment workflow.

#### Prerequisites:
- A web server (Nginx, Apache, etc.)
- SSH access to your server
- SSH key pair for authentication

#### Setup Steps:

1. **Generate SSH Key Pair:**
   ```bash
   ssh-keygen -t ed25519 -C "github-actions-deploy"
   # Save as: deploy_key (don't add passphrase for CI/CD)
   ```

2. **Add Public Key to Server:**
   ```bash
   # Copy deploy_key.pub to your server
   ssh-copy-id -i deploy_key.pub user@your-server.com
   # Or manually add to ~/.ssh/authorized_keys
   ```

3. **Add Secrets to GitHub Repository:**
   - Go to: https://github.com/BlendWitTech/website/settings/secrets/actions
   - Click **New repository secret**
   - Add these secrets:
     - `SERVER_HOST`: Your server IP or domain (e.g., `123.45.67.89`)
     - `SERVER_USER`: SSH username (e.g., `deploy` or `root`)
     - `SERVER_SSH_KEY`: Contents of your private key (`deploy_key`)
     - `SERVER_PORT`: SSH port (default: `22`)
     - `SERVER_DEPLOY_PATH`: Deployment directory (e.g., `/var/www/blendwit`)

4. **Enable Server Deployment Workflow:**
   - The `.github/workflows/deploy-server.yml` file is ready
   - It will automatically deploy on every push to `main`

5. **Configure Web Server:**
   ```nginx
   # Example Nginx configuration
   server {
       listen 80;
       server_name blendwit.com www.blendwit.com;
       root /var/www/blendwit;
       index index.html;
       
       location / {
           try_files $uri $uri/ =404;
       }
   }
   ```

### Option 3: Webhook-Based Deployment (Custom Server)

If you prefer a webhook-based approach without GitHub Actions:

#### Server-Side Setup:

1. **Create Webhook Handler Script** (`deploy.php` or `deploy.sh`):
   ```bash
   #!/bin/bash
   # deploy.sh
   cd /var/www/blendwit
   git pull origin main
   # Add any post-deployment commands here
   ```

2. **Set up Webhook Endpoint:**
   - Use a webhook service or create a simple endpoint
   - GitHub will POST to this endpoint on every push

3. **Configure GitHub Webhook:**
   - Go to: https://github.com/BlendWitTech/website/settings/hooks
   - Click **Add webhook**
   - Payload URL: `https://your-server.com/webhook/deploy`
   - Content type: `application/json`
   - Secret: (optional, but recommended)
   - Events: Select **Just the push event**
   - Active: ✓

## Testing Deployment

1. **Make a test change:**
   ```bash
   git add .
   git commit -m "Test deployment"
   git push origin main
   ```

2. **Check GitHub Actions:**
   - Go to: https://github.com/BlendWitTech/website/actions
   - You should see the deployment workflow running

3. **Verify Deployment:**
   - Check your website URL
   - Changes should be live within 1-2 minutes

## Troubleshooting

### GitHub Pages Issues:
- Ensure `index.html` is in the root directory
- Check GitHub Actions logs for errors
- Verify repository is not private (or upgrade to GitHub Pro)

### Server Deployment Issues:
- Verify SSH keys are correctly configured
- Check server permissions for deployment directory
- Review GitHub Actions logs for detailed error messages
- Ensure web server has read permissions for files

### Webhook Issues:
- Verify webhook URL is accessible
- Check webhook secret matches
- Review server logs for webhook requests
- Ensure webhook handler script has execute permissions

## Manual Deployment

If automatic deployment fails, you can manually deploy:

```bash
# Clone repository
git clone https://github.com/BlendWitTech/website.git
cd website

# Copy files to web server
scp -r * user@server:/var/www/blendwit/
```

## Security Notes

- Never commit secrets or API keys
- Use GitHub Secrets for sensitive information
- Keep SSH keys secure and rotate regularly
- Use HTTPS for all deployments
- Enable webhook secret verification

