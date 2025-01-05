---
layout: '../../layouts/BlogLayout.astro'
title: Enforce Safe Search Windows 11
description: How to enforce google/bing safe search on windows 11
---
 
# Steps
- Open notepad in Administrator mode
- Open `C:\Windows\System32\drivers\etc\hosts`
- Add 
```
    216.239.38.120     www.google.com
    204.79.197.220     www.bing.com 
    204.79.197.220     bing.com
    204.79.197.220     www2.bing.com
    204.79.197.220     www3.bing.com
```
- Save

All done