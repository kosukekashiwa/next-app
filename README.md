# Next App

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Prisma

Migration:

```bash
npx prisma migrate dev --name init
```

Prisma Studio:

```bash
npx prisma studio
```

Create data:

```bash
npx prisma db seed
```

## Library

- [x] UI component library
  - React
- [x] React framework
  - Next.js
- [x] Language
  - TypeScript
- [x] Style & Icons
  - Tailwind, Heroicons
- [x] Headless UI components
  - Radix UI
- [x] ORM(Object-Relational Mapping) library
  - Prisma
- [x] Validation library
  - zod
- [x] Linter & Formatter
  - ESLint, Prettier
- [ ] Form library
  - React Hook Form
- [ ] Testing framework & Mock server
  - Jest, Testing Library, MSW
- [ ] UI component explorer
  - Storybook
- [ ] Visual regression testing
  - reg-suit, storycap
- [ ] E2E test
  - Playwright

## Doc

- Tailiwind CSS  
  コンセプトは「ユーティリティファースト」。「flex」, 「bg-white」 といったユーティリティクラスの組み合わせだけでスタイリングしてしまうというアプローチをとっている。メリットは「クラス名を考える必要がなくなる」「HTML ファイル, CSS ファイルの行き来がなくなる」「CSS の影響範囲が明確になる」「CSS Guidelines ののようなコーディングガイドラインが不要」「CSS のファイルサイズが小さくなる」「環境を選ばない(CSS in JS は JavaScript の環境が必要)」  
  ユーティリティファーストが意味するのは、「最初はユーティリティクラスで作り、本当に再利用する必要が生じてからパーツとして抽出すべし」ということ。CSS には共通化すべきものと、そうでないものがあるから。Tailwind の強みは後から抽出をスムーズにできること。  
  課題は解読しづらい。選定理由は流行っている気がするから。
- Radix UI  
  品質が十分だと思っていた UI コンポーネントが実は十分ではないということがある。この考慮漏れはアクセシビリティの観点で起こりがち。例えば、キーボードによる「十分な操作性」。Web アクセシビリティの標準仕様として WAI-ARIA があり、そのデザインパターン実装方法は ARIA APG として公開されている。Radix UI は可能な限り ARIA APG に準拠するという思想で開発されている Headless UI。Headless UI とは見た目を持たず機能だけを提供するライブラリのこと。選定理由は WEB-DB PRESS で紹介されていたから。
