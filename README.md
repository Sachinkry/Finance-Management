```
finance-dashboard

├─ app
│  ├─ (auth)
│  │  ├─ sign-in
│  │  │  └─ [[...sign-in]]
│  │  │     └─ page.tsx
│  │  └─ sign-up
│  │     └─ [[...sign-up]]
│  │        └─ page.tsx
│  ├─ (dashboard)
│  │  ├─ accounts
│  │  │  ├─ actions.tsx
│  │  │  ├─ columns.tsx
│  │  │  └─ page.tsx
│  │  ├─ categories
│  │  │  ├─ actions.tsx
│  │  │  ├─ columns.tsx
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ transactions
│  │     ├─ account-column.tsx
│  │     ├─ actions.tsx
│  │     ├─ category-column.tsx
│  │     ├─ columns.tsx
│  │     └─ page.tsx
│  ├─ api
│  │  └─ [[...route.ts]]
│  │     ├─ accounts.ts
│  │     ├─ categories.ts
│  │     ├─ route.ts
│  │     └─ transactions.ts
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ logo.svg
├─ bun.lockb
├─ components
│  ├─ amount-input.tsx
│  ├─ data-table.tsx
│  ├─ date-picker.tsx
│  ├─ Header.tsx
│  ├─ HeaderLogo.tsx
│  ├─ Logo.tsx
│  ├─ NavButton.tsx
│  ├─ Navigation.tsx
│  ├─ select.tsx
│  ├─ theme-provider.tsx
│  ├─ ui
│  │  ├─ badge.tsx
│  │  ├─ button.tsx
│  │  ├─ calendar.tsx
│  │  ├─ card.tsx
│  │  ├─ checkbox.tsx
│  │  ├─ dialog.tsx
│  │  ├─ dropdown-menu.tsx
│  │  ├─ form.tsx
│  │  ├─ input.tsx
│  │  ├─ label.tsx
│  │  ├─ popover.tsx
│  │  ├─ sheet.tsx
│  │  ├─ skeleton.tsx
│  │  ├─ sonner.tsx
│  │  ├─ table.tsx
│  │  ├─ textarea.tsx
│  │  └─ tooltip.tsx
│  └─ WelcomeMsg.tsx
├─ components.json
├─ db
│  ├─ drizzle.ts
│  └─ schema.ts
├─ drizzle
│  ├─ 0000_glamorous_paladin.sql
│  ├─ 0001_thankful_beyonder.sql
│  ├─ 0002_huge_jubilee.sql
│  ├─ 0003_funny_screwball.sql
│  └─ meta
│     ├─ 0000_snapshot.json
│     ├─ 0001_snapshot.json
│     ├─ 0002_snapshot.json
│     ├─ 0003_snapshot.json
│     └─ _journal.json
├─ drizzle.config.ts
├─ features
│  ├─ accounts
│  │  ├─ api
│  │  │  ├─ use-bulk-delete-accounts.ts
│  │  │  ├─ use-create-account.ts
│  │  │  ├─ use-delete-account.ts
│  │  │  ├─ use-edit-account.ts
│  │  │  ├─ use-get-account.ts
│  │  │  └─ use-get-accounts.ts
│  │  ├─ components
│  │  │  ├─ AccountForm.tsx
│  │  │  ├─ EditAccountSheet.tsx
│  │  │  └─ NewAccountSheet.tsx
│  │  └─ hooks
│  │     ├─ use-new-account.ts
│  │     └─ use-open-account.ts
│  ├─ categories
│  │  ├─ api
│  │  │  ├─ use-bulk-delete-categories.ts
│  │  │  ├─ use-create-category.ts
│  │  │  ├─ use-delete-category.ts
│  │  │  ├─ use-edit-category.ts
│  │  │  ├─ use-get-categories.ts
│  │  │  └─ use-get-category.ts
│  │  ├─ components
│  │  │  ├─ CategoryForm.tsx
│  │  │  ├─ EditCategorySheet.tsx
│  │  │  └─ NewCategorySheet.tsx
│  │  └─ hooks
│  │     ├─ use-new-category.ts
│  │     └─ use-open-category.ts
│  └─ transactions
│     ├─ api
│     │  ├─ use-bulk-create-transactios.ts
│     │  ├─ use-bulk-delete-transactions.ts
│     │  ├─ use-create-transaction.ts
│     │  ├─ use-delete-transaction.ts
│     │  ├─ use-edit-transaction.ts
│     │  ├─ use-get-transaction.ts
│     │  └─ use-get-transactions.ts
│     ├─ components
│     │  ├─ EditTransactionSheet.tsx
│     │  ├─ NewTransactionSheet.tsx
│     │  └─ TransactionForm.tsx
│     └─ hooks
│        ├─ use-new-transaction.ts
│        └─ use-open-transaction.ts
├─ hooks
│  └─ use-confirm.tsx
├─ lib
│  ├─ hono.ts
│  └─ utils.ts
├─ middleware.ts
├─ next.config.mjs
├─ package.json
├─ postcss.config.mjs
├─ providers
│  ├─ query-provider.tsx
│  └─ sheet-provider.tsx
├─ README.md
├─ script
│  └─ migrate.ts
├─ tailwind.config.ts
└─ tsconfig.json

```
