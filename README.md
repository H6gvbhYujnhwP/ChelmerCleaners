# Chelmer Cleaners — Website

A mobile-first website for **Chelmer Cleaners**, a home delivery dry cleaning and laundry service based in Chelmsford, Essex.

---

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, services overview, how it works, phone CTA |
| Services | `/services` | Full service descriptions |
| Prices | `/prices` | Mock price list (to be updated by Sandra) |
| Book a Slot | `/book` | Mock calendar + enquiry form |
| Contact | `/contact` | Phone, enquiry form, service area |

---

## Brand Colours

| Colour | Hex |
|---|---|
| Sky Blue | `#29ABE2` |
| Navy | `#1B3A6B` |
| Orange | `#F7941D` |
| Green | `#39B54A` |

---

## Tech Stack

- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Vite** (build tool)
- **Wouter** (routing)
- **Framer Motion** (animations)
- **shadcn/ui** (component primitives)

---

## Development

```bash
pnpm install
pnpm dev
```

---

## Build

```bash
pnpm build
```

---

## Deployment on Render

1. Push this repository to GitHub.
2. In [Render](https://render.com), create a new **Web Service**.
3. Connect your GitHub repository.
4. Set the following:
   - **Build Command:** `pnpm install && pnpm run build`
   - **Start Command:** `node dist/index.js`
   - **Environment:** Node
5. Deploy.

A `render.yaml` file is included in the root of the project for one-click deployment.

---

## Integrations (Pending)

### Formspree (Contact & Booking Forms)
1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy the form ID.
3. In `client/src/pages/Book.tsx` and `client/src/pages/Contact.tsx`, uncomment the `fetch` call and replace `YOUR_FORM_ID` with your real Formspree form ID.

### Calendly (Booking Calendar)
1. Create a free account at [calendly.com](https://calendly.com).
2. Set up your event types and available slots.
3. In `client/src/pages/Book.tsx`, the mock calendar can be replaced with a Calendly embed widget using:
   ```html
   <div class="calendly-inline-widget" data-url="https://calendly.com/YOUR_USERNAME/collection" style="min-width:320px;height:630px;"></div>
   <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
   ```

---

## Prices

All prices on the `/prices` page are **placeholder values**. Sandra to supply the real price list for update.

---

## Contact

**Sandra** — 07855 716659  
[www.chelmercleaners.co.uk](https://www.chelmercleaners.co.uk)

Website built by [TheGreenAgents.com](https://www.thegreenagents.com)
