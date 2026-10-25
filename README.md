# RAGHUNIX ERP Portal

GitHub Pages-ready frontend ERP prototype for Raghunix Healthcare LLP.

## Demo login
- Email: `admin@raghunix.com`
- Password: `admin123`

## Included
- Admin login UI
- Dashboard and KPI cards
- Sales / POB creation
- Customers
- Stockists
- Batch-wise inventory
- Purchase summary
- Sales team performance
- Finance / outstanding ledger
- Reports + CSV export
- LocalStorage persistence
- Responsive mobile navigation

## Deploy to GitHub Pages
1. Upload all files in this folder to the repository root.
2. GitHub → Settings → Pages.
3. Source: **Deploy from a branch**.
4. Branch: **main**, folder: **/(root)**.
5. Save and open the generated Pages URL.

## Important
This version is a functional **frontend prototype**. Login and data are stored in the browser (sessionStorage/localStorage), so it is not suitable for real production credentials or multi-user data. For production, connect it to a backend/database such as Supabase, Firebase, or a custom API and implement server-side authentication/authorization.
