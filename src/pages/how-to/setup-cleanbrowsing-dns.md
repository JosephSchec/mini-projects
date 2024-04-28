---
layout: '../../layouts/BlogLayout.astro'
title: Setup Custom DNS
description: How to setup CleanBrowsing/OpenDns private dns for windows and android
---

## Getting Started
- Choose your dns provider these are the ones I've tried
    - [Clean Browsing here](https://cleanbrowsing.org/filters/)
    - [Open Dns](https://www.opendns.com/home-internet-security/)
- Choose your DNS servers 
    - For OpenDns the servers are 
        - 208.67.222.222 and 208.67.220.220 for the basic dns which can be configured [here](https://dashboard.opendns.com/settings/)
        - 208.67.222.123 and 208.67.220.123 for family shield [see here for more info](https://www.opendns.com/setupguide/#familyshield)
    - For CleanBrowsing the servers can be found in the link above
        - 185.228.168.168 and 185.228.169.168 for family filter
- Testing your server configuration can be done at https://www.dnsleaktest.com/ or https://welcome.opendns.com/ for opendns

## Configuring your browser
- OpenDns Allows straight configuration from the browser see https://support.opendns.com/hc/en-us/articles/360038086532-Using-DNS-over-HTTPS-DoH-with-OpenDNS
- For firefox go to Settings > Privacy > Enable DNS over HTTPS using and make sure to use default or none so the resolver will use your systems or make sure that you resovle to the same hostname
- For Chrome go to Settings > Privacy & Security > Security 
    - Set Use secure DNS to on
    - Set your provider 

### Windows Configuration
1. Right click on wifi signal on the bottom right and click "Open Network and Internet settings"
2. Click "Network And Sharing Center"
3. Click "Change adapter settings" on the top left
4. Right click on your connection and click "properties" 
5. Find "Ipv4" then click "properties"
6. Setup the dns servers
    
### Android Configuration Just Hostname
1. Open your wifi settings on your device
2. Go to "More connection settings" or "advance"
3. Set "private dns" settings to provider hostname and there you can set hostname like "family-filter-dns.cleanbrowsing.org" 

### Android Configuration with DNS server 
1. Go to your wifi settings and change your "Ip Settings" to static
2. Update your DNS servers like you would above

