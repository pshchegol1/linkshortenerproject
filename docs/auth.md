# Authentication Standards

## Overview
All authentication in this application must be handled exclusively by [Clerk](https://clerk.com/). No other authentication providers, custom auth logic, or manual session handling are permitted.

## Clerk Integration Requirements
- **Clerk is the sole authentication provider.**
- All sign-in and sign-up flows must use Clerk's modal components (not separate pages or custom forms).
- Do not implement or import any alternative authentication methods.

## Route Protection
- The `/dashboard` route is a protected page. Users must be authenticated via Clerk to access it.
- If an unauthenticated user attempts to access `/dashboard`, they must be redirected to Clerk's sign-in modal.
- If an authenticated user visits the homepage (`/`), they must be automatically redirected to `/dashboard`.

## UI/UX
- Always use Clerk's modal for sign-in and sign-up. Do not use standalone pages or custom UI for these flows.
- Ensure Clerk's modals are accessible and styled consistently with the app's design.

## References
- [Clerk Documentation](https://clerk.com/docs)

---

**See also:** `/docs/agent-instructions.md` for general agent coding standards.
