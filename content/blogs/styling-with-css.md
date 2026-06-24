---
title: "Styling with CSS"
date: "December 04, 2022"
image: "/images/blog/blog3.png"
excerpt: "We've compiled a massive list of tips, tricks, techniques, & the occasional dirty hack to help you build the design you want."
---

## Styling with CSS

CSS gets a bad reputation — but when you understand it deeply, it's one of the most expressive tools in a frontend developer's toolkit. Here's a roundup of tips and techniques I keep coming back to.

### Custom Properties (CSS Variables)

If you're not using CSS custom properties yet, start today. They make theming, dark mode, and consistent spacing dramatically easier to manage across a large codebase.

```css
:root {
  --color-primary: #d946ef;
  --spacing-md: 1.5rem;
}
```

### The Power of `clamp()`

Responsive typography used to require a dozen media queries. Now you can write it in one line:

```css
font-size: clamp(1rem, 2.5vw, 2rem);
```

### Logical Properties

Instead of `margin-left` and `margin-right`, modern CSS offers `margin-inline-start` and `margin-inline-end` — which automatically adapt to right-to-left languages. A small habit change with big accessibility benefits.

### Grid vs Flexbox

Use Flexbox for one-dimensional layouts (a row of buttons, a nav bar). Use Grid for two-dimensional layouts (a card grid, a page layout). They're complementary, not competing.

### Don't Fear the Cascade

The cascade isn't a bug — it's a feature. Understanding specificity and inheritance lets you write less CSS, not more. Lean into it instead of fighting it with `!important` everywhere.
