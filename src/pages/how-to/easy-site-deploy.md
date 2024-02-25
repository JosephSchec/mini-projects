---
layout: '../../layouts/BlogLayout.astro'
title: Easily Deploy A Site.
description: How to easily deploy a site with a custom domain/cloudflare and vercel
---
 
# Steps
- Create your site 
- Buy domain from a registrar
- Connect your repo to vercel for easy deployment
- In vercel dashboard click "add a domain"
- In Cloudflare add your domain then follow the steps include setting the `CNAME` and `A` records provided by vercel
- Add cloudflare nameservers to your registrar  
- Your set 

## Addons
- You can add a redirect to your domain in the vercel dashboard from base url to `www` or vice versa    
- You can get ssl and stats set up in cloudflare
 