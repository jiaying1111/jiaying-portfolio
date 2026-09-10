# 国内稳定站：腾讯云轻量（最快可施行路径）

国际站继续用 Vercel：`https://jiaying-portfolio-one.vercel.app`  
国内站：腾讯云轻量 + ICP 备案 + 同一套 Next.js。

目标：**稳定可打开**。备案是唯一硬等待；其余步骤可并行。

## 总时间预期

| 阶段 | 你要做的 | 通常耗时 |
| --- | --- | --- |
| 买域名 + 实名 | 腾讯云 / DNSPod | 当天 |
| 买轻量 + 装环境 | 按本文脚本 | **1–2 小时** |
| 提交 ICP 备案 | 控制台引导 | 提交当天 |
| 管局审核 | 等 | **约 7–20 天**（个人站常见） |
| 备案通过后绑域名 HTTPS | 半天内 | **当天可上线** |

没有备案前：用服务器 **公网 IP** 自测；不要把未备案域名正式解析到国内 IP 对外宣传。

---

## Day 0（今天就能做完）

### 1. 腾讯云账号

1. 打开 [云服务器轻量应用服务器](https://cloud.tencent.com/product/lighthouse)
2. 完成 **实名认证**（个人身份证）

### 2. 域名（建议今天一起买）

- 推荐：在腾讯云/DNSPod 买一个 **`.cn` 或已实名的 `.com`**，专门给国内站  
- 域名必须 **实名认证通过** 才能备案  
- 国际站可继续用 Vercel 默认域名或另绑 `.com`

### 3. 买轻量（规格建议）

| 项 | 建议 |
| --- | --- |
| 地域 | **广州** 或 **上海**（国内） |
| 套餐 | 2核 2G / 约 40GB 盘（够用） |
| 镜像 | **Ubuntu 22.04** |
| 流量 | 按套餐默认即可 |

购买后在防火墙放行：**22 / 80 / 443**。

记下：

- 公网 IP  
- 登录用户（常见 `ubuntu` / `root`）  
- SSH 密码或密钥  

### 4. 一键装环境

本机把仓库同步上去后，在服务器执行：

```bash
cd /var/www/jiaying-portfolio   # 若目录尚无，先 mkdir -p 再 scp/rsync
sudo bash deploy/remote-setup.sh
```

或本机首次推送源码（不含 `node_modules` / `.next`）：

```bash
export CN_HOST=ubuntu@你的公网IP
rsync -az --exclude node_modules --exclude .next --exclude .git --exclude .env.local \
  ./ "$CN_HOST:/var/www/jiaying-portfolio/"
ssh "$CN_HOST" 'sudo bash /var/www/jiaying-portfolio/deploy/remote-setup.sh'
```

### 5. 环境变量 + 首次构建

在服务器创建 `/var/www/jiaying-portfolio/.env.local`（内容与 Vercel 生产一致，并加上备案占位）：

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
# 备案通过后再填；未通过可先留空
NEXT_PUBLIC_ICP_NUMBER=
NEXT_PUBLIC_ICP_URL=https://beian.miit.gov.cn/
```

```bash
cd /var/www/jiaying-portfolio
npm ci
npm run build
pm2 start deploy/ecosystem.config.cjs
pm2 save
pm2 startup    # 按提示再执行它打印的那行
```

### 6. Nginx

```bash
sudo cp deploy/nginx-portfolio.conf /etc/nginx/sites-available/portfolio
sudo sed -i 's/YOUR_CN_DOMAIN/你的国内域名或先用_/' /etc/nginx/sites-available/portfolio
# 若还没有域名，可把 server_name 改成 _
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

浏览器打开：`http://公网IP` → 应能看到作品集。

### 7. **立刻提交备案（与装机同一天）**

路径：腾讯云控制台 → **备案** → 开始备案  

要点：

- 主体：个人  
- 网站用途：非经营性 / 个人作品展示  
- 网站名称：避免「官网」「最好」「第一」等词；可用「李佳莹个人作品集」一类  
- 接入：选刚买的这台轻量  
- 按提示完成小程序核验 / 照片  

提交后进入等待；期间继续用 Vercel 给国外看。

---

## 备案通过当天（上线）

1. 域名解析：`A` 记录 → 轻量公网 IP（在 DNSPod）  
2. SSL（二选一，推荐腾讯云免费证书）：  
   - 腾讯云 SSL 申请免费 DV → 下载 Nginx 证书 → 放到 `/etc/nginx/ssl/...`  
   - 或本机/服务器 `certbot --nginx`  
3. 编辑 `nginx-portfolio.conf`：打开 HTTPS server，HTTP 改为 `return 301 https://...`  
4. `.env.local` 填入：

```bash
NEXT_PUBLIC_ICP_NUMBER=粤ICP备xxxxxxxx号
NEXT_PUBLIC_ICP_URL=https://beian.miit.gov.cn/
```

5. 重新构建并重启：

```bash
cd /var/www/jiaying-portfolio
npm run build && pm2 restart portfolio
```

页脚会出现备案号链接（合规要求）。

6. 国内 4G / Wi‑Fi 各测一遍首页与作品页。

---

## 日常发版（本机）

```bash
export CN_HOST=ubuntu@你的公网IP
./deploy/sync-to-tencent.sh
```

会先跑 `npm run check`，再 rsync，再在服务器 `npm ci && build && pm2 reload`。

国际站照旧：

```bash
npx vercel deploy --prod --yes --scope jy-2412
```

---

## 仓库里已有的文件

| 文件 | 作用 |
| --- | --- |
| `deploy/remote-setup.sh` | 服务器首次装 Node / nginx / pm2 |
| `deploy/ecosystem.config.cjs` | PM2 进程 |
| `deploy/nginx-portfolio.conf` | Nginx 反代模板 |
| `deploy/sync-to-tencent.sh` | 本机一键同步发版 |

---

## 注意

- **不要**在未备案时把正式国内域名长期解析到该 IP 并公开传播。  
- 图片与代码随站部署；视频继续用 B 站链接（国内友好）。  
- Supabase 若在海外，国内读接口可能偶发偏慢；作品集正文目前主要在本地 `src/data/`，一般可先忽略。若以后强依赖远程库，再考虑国内库或缓存。  
- `package.json` engines 写的是 Node 24；国内机建议用脚本里的 **Node 22**，足够稳定。

---

## 你今天的最短检查清单

- [ ] 腾讯云实名  
- [ ] 买广州/上海轻量 Ubuntu 22.04  
- [ ] 防火墙 22/80/443  
- [ ] `remote-setup.sh` + 首次 `build` + pm2 + nginx  
- [ ] `http://IP` 能打开  
- [ ] 域名实名  
- [ ] 控制台提交 ICP 备案  
- [ ] 等审核；通过后绑域名 + HTTPS + 填 `NEXT_PUBLIC_ICP_NUMBER`
