---
name: Prototype SPA navigation
description: Routing and session behavior for the static governance prototype.
---

Use hash-based routes with browser history for in-document page rendering, and keep the demo-only session in sessionStorage so refresh and Back do not return an authenticated demo user to the login screen.

**Why:** The prototype must feel like a complete app without introducing a real authentication system or server-side session dependency.

**How to apply:** Preserve the existing page renderers and UI; add route synchronization and event rebinding around them rather than replacing the static prototype with a framework or redesign.