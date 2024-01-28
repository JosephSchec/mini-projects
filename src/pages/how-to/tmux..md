---
layout: '../../layouts/BlogLayout.astro'
title: Tmux commands
description: Getting started with Tmux
---

# Getting started

Tmux should be installed on most linux machines by default but simply use
`apt install tmux` to get started.

Then just run `tmux` to create a new Tmux instance or `tmux -t "name"` to create a named instance
## Commands
By default all cammands will start with `Ctrl+B`
- `c` to create new window
- `%` (shift + 5) will add a vertical plane
- `"` (shift + ') will add a horizontal plane
- `d` to detach from the instance (the instance will still run)
- `a` to reattach to the instance 
- `w` to see all instances
- `&` (shift + 7) will close current window
- `x` kill current plane
- `n` to go to next plane or arrows keys 
- `tmux kill-session` to kill current session (add `-t "name"`)
- `tmux kill-server` to kill all sessions

### Other Info

- I found this [Cheat sheet](https://tmuxcheatsheet.com/) after creating this 
- I was introduced to tmux via [this video](https://www.youtube.com/watch?v=nTqu6w2wc68)
 
