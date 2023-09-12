## Minimal example
My used script for setting up Node.js, ldap-utils and ldapjs on WSL Ubuntu 22.04
```sh
sudo apt-get update

# install node.js
## https://github.com/nodesource/distributions
## 1. Download and import the Nodesource GPG key
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

## 2. Create deb repository
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

## 3. Run Update and Install
sudo apt-get update
sudo apt-get install nodejs -y

# install ldap-utils
sudo apt install ldap-utils

# install ldapjs
npm install ldapjs
```
