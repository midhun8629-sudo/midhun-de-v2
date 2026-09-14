# midhun.de

Personal computational-engineering portfolio for Midhun Mohanan.

## Edit the website text on GitHub

Almost every visible word and all personal links are stored in one file:

[`data/portfolio.ts`](data/portfolio.ts)

1. Open that file on GitHub.
2. Select the pencil icon (**Edit this file**).
3. Change the text inside quotation marks.
4. Select **Commit changes**.

Cloudflare will rebuild the website automatically. Avoid changing the property
names, commas, brackets, or files in `components/` unless you intend to change
the design.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static website is exported to `out/` and deployed through Cloudflare.

## Design credit

The visual foundation is
[Modern Next.js Portfolio](https://github.com/sanidhyy/next-portfolio) by
Sanidhya Kumar Verma, used under the MIT License. The original layout,
animations, and graphical assets are intentionally retained.
