# Luma Stay — Component Specification

## 1. Navigation

Component: Navigation

Responsibilities:
- Desktop navigation
- Responsive mobile navigation
- Scroll-state styling
- Mobile menu state
- Keyboard accessibility
- Navigation links

## 2. Hero

Component: Hero

Responsibilities:
- Hero photography or video
- Location label
- Editorial headline
- Supporting copy
- Primary reservation CTA
- Secondary exploration CTA
- Scroll indicator
- Entrance animation

## 3. Editorial Section

Component: EditorialSection

Purpose:
Reusable image and text composition for editorial storytelling.

Responsibilities:
- Eyebrow
- Heading
- Description
- Image or video
- CTA
- Responsive layout
- Reveal animation

## 4. Suite Feature

Component: SuiteFeature

Responsibilities:
- Suite photography
- Suite title
- Suite description
- Room specifications
- CTA
- Image interaction

## 5. Architecture Section

Component: ArchitectureSection

Responsibilities:
- Architectural photography
- Supporting image
- Editorial statement
- Material/design information
- Scroll reveal

## 6. Experiences

Component: Experiences

Responsibilities:
- Experience list
- Editorial numbering
- Experience descriptions
- Hover interactions
- Active state
- Responsive presentation

## 7. Dining Feature

Component: DiningFeature

Responsibilities:
- Restaurant identity
- Food/interior photography
- Dining description
- Dining information
- CTA

## 8. Gallery

Component: Gallery

Responsibilities:
- Responsive image grid
- Asymmetrical composition
- Image captions
- Category labels
- Hover image scale
- Editorial reveal

## 9. Location

Component: LocationSection

Responsibilities:
- Destination information
- Location statement
- Map-inspired visual
- Travel/access information

## 10. Reservation CTA

Component: ReservationCTA

Responsibilities:
- Closing statement
- Primary reservation action
- Secondary contact action
- Background media

## 11. Footer

Component: Footer

Responsibilities:
- Brand identity
- Navigation
- Contact information
- Social links
- Legal links
- Copyright

## 12. Shared Components

Potential shared components:
- Button
- Arrow
- Label
- SectionHeading
- Divider
- MediaFrame
- Reveal

Shared components should be introduced when there is meaningful reuse.

## 13. Component Principles

Components should remain small and focused.
- Keep presentation logic close to the component.
- Avoid unnecessary prop complexity.
- Avoid components that exist only for one trivial HTML element.
- Keep animation behavior predictable.
- Prefer semantic HTML.
- Keep accessibility responsibilities inside interactive components.
- Avoid unnecessary JavaScript.
