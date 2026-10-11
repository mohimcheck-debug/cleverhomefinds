# Clever Home Finds

Free Amazon affiliate site: Astro (site builder) + Decap CMS (admin dashboard) hosted free on Netlify.

## One-time setup (about 30 minutes)

### 1. Put your details in
- `src/data/site.js`: replace `YOURTAG-20` with your Amazon tracking ID, and update the social links and email.
- `public/admin/config.yml`: replace `YOUR-GITHUB-USERNAME` with your GitHub username.

### 2. Upload to GitHub (free)
1. Create a GitHub account with your project email.
2. Click **New repository**, name it `clever-home-finds`, set it to Public or Private, and click **Create repository**.
3. Click **uploading an existing file**, drag in everything from this folder (not the folder itself), and click **Commit changes**.

### 3. Connect Netlify
1. In Netlify, click **Add new site → Import an existing project → GitHub** and pick `clever-home-finds`.
2. The build settings fill in automatically from `netlify.toml`. Click **Deploy**.
3. Go to **Site configuration → Change site name** and set it to `clever-home-finds` (or the closest free name). If you get a different name, update it in `astro.config.mjs` and `public/admin/config.yml`.

### 4. Turn on the admin login
1. On GitHub: **Settings → Developer settings → OAuth Apps → New OAuth App**.
   - Homepage URL: `https://cleverhomefinds.netlify.app`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Click **Register**, then **Generate a new client secret**. Copy the Client ID and secret.
2. In Netlify: **Site configuration → Access & security → OAuth → Install provider → GitHub**, then paste the Client ID and secret.
3. Visit `https://cleverhomefinds.netlify.app/admin` and log in with GitHub.

### 5. Turn on email signups
Netlify: **Forms → Enable form detection**, then redeploy once. Signups appear under Forms (free plan covers 100 a month).

## Daily workflow: adding a product (about 2 minutes)
1. Go to `/admin` → **Products → New Product**.
2. Fill in the name, category, summary, 3 bullets and price band.
3. Paste your SiteStripe link (Amazon product page → SiteStripe bar → Get Link → Short link).
4. Paste the YouTube Shorts ID (from `youtube.com/shorts/ABC123`, paste `ABC123`).
5. Add a photo: upload a square screenshot from your reel, OR paste a SiteStripe image link (SiteStripe → Get Link → Image → copy the link inside src="...").
6. Fill in Best for, Heads up and Quick specs (optional, but they help sales).
7. Click **Publish**. It's live in about a minute.

## Rules baked in
- Never type exact prices. Use the price band.
- Amazon disclosure is on every product page and in the footer.
- All Amazon links are marked `nofollow sponsored`.
- Don't re-upload Amazon's product photos. Use screenshots from your own reels.

## Adding the next niche
In `src/data/site.js`, change `hidden: true` to `hidden: false` on Smart home, Desk setup or Tech finds. The category page and navigation update automatically.
