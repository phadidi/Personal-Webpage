# Attach AWS Managed Policies to IAM User

Run these commands to attach the necessary managed policies:

```bash
# Attach AWS managed policies
aws iam attach-user-policy --user-name github-actions-turquoisepenguin --policy-arn arn:aws:iam::aws:policy/AWSCloudFormationFullAccess

aws iam attach-user-policy --user-name github-actions-turquoisepenguin --policy-arn arn:aws:iam::aws:policy/AWSLambda_FullAccess

aws iam attach-user-policy --user-name github-actions-turquoisepenguin --policy-arn arn:aws:iam::aws:policy/IAMFullAccess

aws iam attach-user-policy --user-name github-actions-turquoisepenguin --policy-arn arn:aws:iam::aws:policy/AmazonAPIGatewayAdministrator
```

Then update the inline policy with just S3 and CloudFront:

```bash
aws iam put-user-policy --user-name github-actions-turquoisepenguin --policy-name DeploymentPolicy --policy-document file://deploy-policy.json
```
