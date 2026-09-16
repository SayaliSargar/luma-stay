# Luma Stay — UI/UX Design Direction

## 1. Visual Personality

Luma Stay should feel:

**Quiet. Architectural. Warm. Refined. Cinematic.**

The design should communicate luxury through restraint rather than decoration.

## 2. Layout Philosophy

Use:

- CSS Grid
- Flexbox
- Asymmetrical layouts
- Large negative space
- Full-bleed photography
- Editorial alignment
- Overlapping compositions
- Strong horizontal rhythm

Avoid repetitive card grids.

## 3. Typography

Use two complementary type styles:

### Display

A sophisticated serif or editorial display face.

Used for:

- Hero headlines
- Major section titles
- Large editorial statements

### Interface

A clean modern sans-serif.

Used for:

- Navigation
- Labels
- Buttons
- Metadata
- Body text

Typography must remain readable and responsive.

## 4. Photography Direction

Photography should communicate:

- Architecture
- Natural light
- Texture
- Materials
- Rooms
- Landscape
- Food
- Human-scale moments

Images should feel intentionally art-directed.

## 5. Motion Direction

Motion should feel:

- Slow
- Smooth
- Controlled
- Natural

Preferred effects:

- Fade-up reveals
- Image scale transitions
- Mask reveals
- Text movement
- Subtle image parallax
- Navigation state transitions

Avoid excessive bouncing or attention-grabbing animation.

## 6. Cursor

Desktop may use a custom cursor interaction.

Possible states:

- Default
- Image hover
- Link hover
- Gallery interaction

The custom cursor must disappear on touch devices.

## 7. Scroll Experience

Sections should reveal themselves progressively.

Intersection Observer may be used for reliable viewport-triggered animation.

CSS scroll-driven animation can be progressively enhanced using `@supports`.

## 8. Interaction Principles

Every interaction should communicate a clear state change.

Examples:

- Button arrow moves slightly.
- Image subtly scales.
- Navigation border changes.
- Text shifts horizontally.
- Gallery captions appear.

## 9. Mobile Philosophy

Mobile is not simply a smaller desktop layout.

On mobile:

- Remove unnecessary decorative layers.
- Stack editorial compositions.
- Reduce typography.
- Preserve whitespace.
- Keep important images prominent.
- Simplify cursor interactions.
- Respect touch interaction.
