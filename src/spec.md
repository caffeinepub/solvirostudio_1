# Specification

## Summary
**Goal:** Allow Portfolio project cards to use user-provided Pinterest (external) image URLs in addition to existing local static asset image paths, without changing the current Portfolio layout or styling.

**Planned changes:**
- Update the Portfolio project data model to support either a local image path or an external image URL for each project.
- Render portfolio card images from the external URL when provided, otherwise continue using the existing local asset path.
- Add safe rendering for external images (lazy loading and a graceful fallback/placeholder when an external image fails) while preserving all existing card content and behavior (title/goal/results text, badges, hover styling, and grid sizing).
- Provide a single, obvious configuration spot in the code (within the existing portfolioProjects data) where Pinterest image URLs can be pasted per project, with no Pinterest API integration or automated fetching.

**User-visible outcome:** The Portfolio section can display project images sourced from direct Pinterest image URLs (when configured), and cards remain stable and readable even if an external image fails to load.
