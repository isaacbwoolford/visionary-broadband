# Visionary Broadband

Mobile-first order flow for [visionary-broadband.com](https://visionary-broadband.com).

## Local preview

```bash
python3 -m http.server 8766
```

Open `http://127.0.0.1:8766`.

## Deploy (GitHub Pages)

This repo is set up for GitHub Pages from the `main` branch. The `CNAME` file points the site at `visionary-broadband.com`.

### Squarespace DNS

In Squarespace → Domains → visionary-broadband.com → DNS Settings, replace conflicting A/CNAME records with:

| Type  | Host | Value                     |
|-------|------|---------------------------|
| A     | @    | 185.199.108.153           |
| A     | @    | 185.199.109.153           |
| A     | @    | 185.199.110.153           |
| A     | @    | 185.199.111.153           |
| CNAME | www  | isaacbwoolford.github.io  |

DNS can take a few minutes to a few hours. After it propagates, GitHub Pages will serve HTTPS for the domain.
