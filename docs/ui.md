# UI Standards: shadcn/ui Usage

All UI elements in this application must use [shadcn/ui](https://ui.shadcn.com/) components exclusively.

- **No custom UI components**: Do not create or use custom UI components. Always use the official shadcn/ui library components for all user interface needs.
- **Consistency**: Ensure all UI elements (buttons, forms, modals, etc.) are implemented using shadcn/ui to maintain a consistent look and feel.
- **Component Extension**: If additional styling or behavior is required, extend shadcn/ui components using their recommended patterns (e.g., via props, className, or composition), but do not fork or rewrite components.
- **Documentation**: Refer to the [shadcn/ui documentation](https://ui.shadcn.com/docs) for usage patterns, accessibility, and customization guidelines.
- **Review**: All PRs introducing UI changes must be reviewed for compliance with this standard.

## Example

**Correct:**
```tsx
import { Button } from "@/components/ui/button";

<Button variant="outline">Click me</Button>
```

**Incorrect:**
```tsx
// Custom button implementation (not allowed)
function MyButton(props) { /* ... */ }
```

---

See `/docs/ui.md` for these standards. All agents must follow these rules for UI work.
