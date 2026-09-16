# Luma Stay — Responsive Design

## Responsive Strategy

Luma Stay must provide a consistent premium experience across desktop, tablet, and mobile.

## Breakpoints

- Mobile: below 768px
- Tablet: 768px to 1023px
- Desktop: 1024px and above

## Desktop

- 12-column editorial grid
- Large display typography
- Wide image compositions
- Full navigation
- Hover interactions
- Asymmetrical layouts

## Tablet

- 8-column grid
- Reduced typography scale
- Reduced horizontal spacing
- Navigation remains compact
- Image compositions adapt without losing hierarchy

## Mobile

- 4-column conceptual grid
- Single-column primary flow
- Compact navigation with menu control
- Fluid typography using clamp()
- Full-width or near-full-width media
- Reduced decorative motion
- Touch-friendly interactive elements
- No horizontal overflow

## Images

- Use responsive image sizing
- Use aspect-ratio to preserve composition
- Use object-fit: cover where appropriate
- Lazy-load non-critical images

## Typography

- Use clamp() for major headings
- Maintain readable body text
- Prevent excessive line lengths
- Preserve editorial hierarchy on small screens

## Navigation

- Desktop navigation is replaced by a mobile menu
- Mobile menu must be keyboard accessible
- Menu state must be visually clear

## Motion

- Keep transitions subtle on mobile
- Respect prefers-reduced-motion
- Avoid animation that interferes with scrolling or reading

## Accessibility

- Maintain sufficient text contrast
- Provide visible focus states
- Ensure interactive elements are touch accessible
- Do not rely only on hover

## Performance

- Avoid unnecessary JavaScript
- Avoid oversized media
- Load critical content first
- Use progressive enhancement for advanced visual effects

## Quality Requirements

- No horizontal scrolling
- No clipped text
- No overlapping content
- No broken image compositions
- No unusable navigation
- Consistent spacing across viewport sizes
