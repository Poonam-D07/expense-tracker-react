## 📚 Day 6:   Context API and React Router

### What I Learned
- Lifting state up and when to keep state local instead
- Prop drilling problem and how Context API solves it
- `createContext`, `Provider` and `useContext`, plus a custom hook with a safety check
- Single Page Applications and client-side routing
- `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink` (`end` prop) and `Outlet`
- Layout routes and a catch-all 404 route






- **Multi-page app** with React Router (Dashboard, Transactions, About, 404)
- **Global state** with Context API and a custom `useTransactions` hook
- Shared layout using nested routes and `<Outlet />`
- Active navigation links with `NavLink`
- Edit and cancel flow, search and filter on the Transactions page

 
## 🧭 Routes

| Path | Page |
|---|---|
| `/` | Dashboard (summary and recent transactions) |
| `/transactions` | Add, edit, delete, search and filter |
| `/about` | About the project |
| `*` | 404 Not Found |



src/
├── components/   (Navbar, Layout, SummaryCard, TransactionList, ...)
├── context/      (TransactionContext, TransactionProvider)
├── hooks/        (useTransactions)
├── pages/        (Dashboard, Transactions, About, NotFound)
├── data/
├── App.jsx
└── main.jsx
	

- [x] Day 5: Forms, `useEffect`, localStorage
- [x] Day 6: Context API, React Router
- [ ] Day 7: Dark mode, polish, deployment

### 📸 Screenshot

**Desktop View**

![Day 2 Dashboard](./screenshots/day6.png)

![Day 2 Dashboard](./screenshots/day6About.png)

