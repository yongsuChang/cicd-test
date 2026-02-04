# CI/CD Test

## EC2 Environment Setup

This project uses AWS SSM for deployment. The target EC2 instance must have the SSM Agent, Docker, and AWS CLI v2 installed.

### 1. Direct Access (SSH) Setup
If you can access the instance via SSH, run the following commands:

```bash
# SSM Agent installation and status check
sudo apt update -y
sudo apt install snapd -y
sudo snap install amazon-ssm-agent --classic
sudo snap start amazon-ssm-agent
sudo snap services amazon-ssm-agent

# Docker installation
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
rm get-docker.sh
sudo usermod -aG docker $USER

# AWS CLI v2 installation
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
rm -rf awscliv2.zip aws/
```

### 2. User Data Setup (e.g., Private Subnet)
Use this script in the EC2 User Data field during instance launch:

```bash
#!/bin/bash

# 1. SSM Agent installation
snap install amazon-ssm-agent --classic
snap start amazon-ssm-agent

# 2. Package update and essential tools
apt-get update -y
apt-get install -y curl unzip net-tools apt-transport-https ca-certificates gnupg lsb-release

# 3. Docker installation
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update -y
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Docker permission and start
systemctl enable --now docker
usermod -aG docker ubuntu

# 4. AWS CLI v2 installation
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
./aws/install
rm -rf awscliv2.zip aws/
```

### ⚠️ Required IAM Permissions
The EC2 Instance Profile (IAM Role) must have the following policies:
*   `AmazonSSMManagedInstanceCore`: For SSM communication.
*   `AmazonEC2ContainerRegistryReadOnly`: To pull images from ECR.
