---
layout: '../../layouts/BlogLayout.astro'
title: Connect to server without PuTTy
description: Skip putty step after dissallowing ssh 
---
If you have a putty generated key (a.k.a .ppk file) you will need to generate a openSSH key
# Steps
1. Open PuttyGen
2. Load your current .ppk file
3. Go to `Conversions` on the top menu and select "Export OpenSSH Key" make sure you save this as a `.pem` file
4. Open your terminal and just `ssh -i /path/to/your-key.pem username@your-server-ip` 