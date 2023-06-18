---
layout: '../../layouts/BlogLayout.astro'
title: Setup server
---

# Basic server signin with putty

1. signin with `username@public_ip`
2. set ssh auth private key to use putty
3. upgrade packages : sudo `apt-get update` then `apt upgrade`
4. adduser new "name"
5. id "name" will show user groups
6. usermod -aG sudo "name" will add user to `sudo` group
7. cd `/home/name`
8. `mkdir .ssh` then `cd` into it and `touch authorized_keys`
9. use nano in that file and paste (local machine) public key into there

## Security

- [Refernce](https://www.youtube.com/watch?v=7aRjGIhwyQM) at 15 min
- `nano /etc/ssh/sshd_config`

# login new user

`logout` of root
try login if it fails use on LOCAL MACHINE
use eval `ssh-agent -s` then `ssh name@public_ip`

## Add Project

- Setup node

  - [node-js](https://nodejs.org/en/download/package-manager#debian-and-ubuntu-based-linux-distributions)
  - [Use binary distributions](https://github.com/nodesource/distributions)

- Setup project
  - make a new directory
  - git clone project follow [this with any issues in private repo](https://stackoverflow.com/questions/68775869/message-support-for-password-authentication-was-removed-please-use-a-personal)
  - In mongo allow your oracle public_ip
  - install depnedacies
  - `sudo npm i -g pm2`
    - `pm2 start entrypoint` and `pm2 stop name`

### Firewall, nginx, and fail2ban

- `sudo ufw enable`
- `sudo ufw allow ssh`
- `sudo ufw allow http`
- `sudo ufw allow https`
- `sudo apt install nginx`
  We then need to configure nginx
- `sudo nano /etc/nginx/sites-available/default`
  we can configure `server_name: domainname.com www.domainname.com;` follow with semicolon separate with space
  Then in Location/ add

```bash
        proxy_pass http://localhost:5000;    # or which other port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
```

to check your configuration
`sudo nginx -t`

- `sudo service nginx restart`

#### Installing fail2ban

- `sudo apt install fail2ban`
- make sure its running with ` systemctl status fail2ban`
- `cd /etc/fail2ban/`
  - Recomended to copy to local files incase of future updates fail2ban will look at local files
  - `cp fail2ban.conf fail2ban.local` and `cp jail.conf jail.local`
  - `nano jail.local` set configuration like maxretry and destemail
  - if you change email then make sure you have sendmail with `apt-get install sendmail` and `sudo sendmailconfig`

### Add SSL

```bash
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Only valid for 90 days, test the renewal process with
certbot renew --dry-run
```

### Other Info

- [For MERN application](https://crew-code.com/docker-setup-for-express-react-mongodb-application/)
- [Original](https://gist.github.com/bradtraversy/b8b72581ddc940e0a41e0bc09172d91b)
- [Sendmail info](https://kenfavors.com/code/how-to-install-and-configure-sendmail-on-ubuntu/)
- [Letsencrypt info](https://eff-certbot.readthedocs.io/en/stable/install.html)
- [Fail2Ban info](https://www.youtube.com/watch?v=YQEOALeixxY)
