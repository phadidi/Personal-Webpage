# Deployment Guide for turquoisepenguin.com

## Quick Setup (Automated)

### Option 1: CloudFormation (Recommended)
```bash
# Deploy infrastructure
aws cloudformation create-stack \
  --stack-name turquoisepenguin-website \
  --template-body file://cloudformation-template.yml \
  --region us-east-1

# Get outputs
aws cloudformation describe-stacks \
  --stack-name turquoisepenguin-website \
  --query 'Stacks[0].Outputs'
```

### Option 2: Manual Setup

1. **Create S3 Bucket**
```bash
aws s3 mb s3://turquoisepenguin.com --region us-east-1
aws s3 website s3://turquoisepenguin.com --index-document index.html --error-document index.html
```

2. **Set Bucket Policy**
```bash
aws s3api put-bucket-policy --bucket turquoisepenguin.com --policy file://s3-bucket-policy.json
```

3. **Request SSL Certificate**
```bash
aws acm request-certificate \
  --domain-name turquoisepenguin.com \
  --subject-alternative-names www.turquoisepenguin.com \
  --validation-method DNS \
  --region us-east-1
```

## GitHub Repository Setup

1. **Add Repository Secrets** (Settings > Secrets and variables > Actions):
   - `AWS_ACCESS_KEY_ID`: Your AWS access key
   - `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
   - `CLOUDFRONT_DISTRIBUTION_ID`: CloudFront distribution ID (optional)

2. **Push to GitHub**
```bash
git add .
git commit -m "Initial deployment setup"
git push origin main
```

## GoDaddy DNS Configuration

### After CloudFront Setup:
1. Log into GoDaddy DNS management
2. Add/Update DNS records:
   - **A Record**: `@` → CloudFront distribution domain
   - **CNAME**: `www` → `turquoisepenguin.com`

### SSL Certificate Validation:
1. AWS will provide DNS validation records
2. Add these CNAME records in GoDaddy DNS
3. Wait for validation (usually 5-30 minutes)

## Verification

1. **Test S3 Website**: `http://turquoisepenguin.com.s3-website-us-east-1.amazonaws.com`
2. **Test CloudFront**: `https://your-distribution-id.cloudfront.net`
3. **Test Custom Domain**: `https://turquoisepenguin.com`

## Troubleshooting

- **403 Errors**: Check S3 bucket policy and public access settings
- **SSL Issues**: Ensure certificate is in us-east-1 region
- **DNS Propagation**: Can take up to 48 hours for global propagation
- **Cache Issues**: Use CloudFront invalidation or wait for TTL expiry

## Security Notes

- All sensitive AWS configuration files are in .gitignore
- Use IAM user with minimal required permissions
- Enable CloudTrail for audit logging
- Consider enabling AWS Config for compliance monitoring