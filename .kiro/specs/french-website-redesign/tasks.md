# Implementation Plan

- [x] 1. Update global color scheme and design system


  - Update `src/app/globals.css` to replace yellow accent with blue (#0066FF) throughout all CSS variables
  - Modify primary, accent, and yellow color variables to use blue values
  - Remove neubrutalist yellow styling and replace with blue equivalents
  - Ensure white backgrounds and blue accents are properly defined
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_



- [ ] 2. Create vehicle categories constants and utilities
  - Create `src/lib/constants.ts` file with vehicle category definitions (SUVs, Berlines, Compactes, Luxe, Utilitaires)
  - Define VehicleCategory interface with id, name, slug, description, and displayOrder
  - Export array of vehicle categories with French labels


  - Add helper functions to get category by slug
  - _Requirements: 2.2, 12.1, 12.2, 12.3, 12.4, 12.5_

- [ ] 3. Implement vehicle categories dropdown component
  - Create `src/components/navbar-dropdown.tsx` component for vehicle categories menu
  - Implement dropdown with blue background and white text styling
  - Add hover states with lighter blue or white background with blue text


  - Implement smooth slide-down animation using Framer Motion
  - Add click handlers to navigate to category-specific routes
  - Ensure dropdown closes on outside click or navigation
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

- [ ] 4. Update navbar with enhanced navigation
  - Modify `src/components/navbar.tsx` to integrate the dropdown component


  - Add "Locations" and "Blogs" menu items to navigation in French
  - Update navigation structure to match: Accueil | Véhicules ▼ | Offres Spéciales | Locations | Blogs | Contact | FAQs
  - Apply blue and white color scheme to all navigation elements
  - Update hover states to use blue (#0066FF)
  - Update call-to-action button to use blue background
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_



- [ ] 5. Implement mobile navigation with accordion
  - Update mobile menu in `src/components/navbar.tsx` to include expandable accordion for Véhicules
  - Add chevron icon that rotates when accordion expands
  - Implement smooth animation for accordion expansion
  - Add "Locations" and "Blogs" to mobile menu
  - Ensure blue accent colors throughout mobile navigation


  - _Requirements: 1.4, 2.6_

- [ ] 6. Create vehicle category pages with routing
  - Create `src/app/vehicles/[category]/page.tsx` dynamic route
  - Implement page component that filters vehicles by category slug
  - Add category header with title and description in French
  - Display filtered vehicles in grid layout


  - Apply blue and white color scheme
  - Handle invalid category slugs with proper error handling
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_

- [ ] 7. Update hero section with blue color scheme
  - Modify `src/components/hero-section.tsx` to replace yellow accents with blue
  - Update subtitle text color to blue (#0066FF)


  - Change CTA button background to blue with white text
  - Update button hover state to white background with blue text
  - Change carousel active indicator to blue
  - Ensure all text remains in French
  - _Requirements: 8.1, 8.2, 8.3, 7.1, 7.2, 7.3, 7.4, 7.5_



- [ ] 8. Create home page content sections component
  - Create `src/components/home-content-section.tsx` for alternating image-text layout
  - Implement interface for content sections with title, subtitle, description, image, imagePosition
  - Create component that renders image on left or right based on imagePosition prop
  - Apply proper spacing (minimum 24px between sections)
  - Use blue for subtitles and CTA buttons
  - Implement responsive grid that stacks on mobile
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 11.1, 11.3_

- [ ] 9. Add content sections to home page
  - Update `src/app/page.tsx` to include new content sections between BrandFilter and FeaturedCars


  - Create array of 3 content sections with alternating image positions
  - Write French content for each section (title, subtitle, description)
  - Add high-quality placeholder images or use existing Supabase images
  - Ensure sections follow image-text-image-text pattern
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 10. Update FAQ section with improved spacing and colors
  - Modify `src/components/faq-section.tsx` to increase spacing between items to 24px
  - Update internal padding to 24px (p-6)
  - Change line-height for answer text to 1.625 (leading-relaxed)


  - Replace black background with white background
  - Change item backgrounds to light blue (bg-blue-50)
  - Add blue border to FAQ items (border-2 border-[#0066FF])
  - Update question text color to black
  - Change number and icon colors to blue (#0066FF)
  - Update answer text to dark gray (text-gray-700)
  - Implement blue hover state (hover:bg-blue-100)
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 8.1, 8.2, 9.1, 9.2, 9.3, 9.4, 9.5_



- [ ] 11. Modernize contact page with blue color scheme
  - Update `src/app/contact/page.tsx` header background to blue gradient
  - Replace all yellow elements with blue (#0066FF)
  - Update phone icon background to light blue (bg-blue-100)
  - Change submit button to blue background with white text


  - Update all focus rings to blue (focus:ring-[#0066FF])
  - Change links to blue color
  - Update icon backgrounds to light blue (except WhatsApp which stays green)
  - Modernize form input styling with blue accents
  - Ensure all text remains in French
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 8.1, 8.2, 8.3, 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 12. Update special offers page with blue branding


  - Modify `src/app/special-offers/page.tsx` header to use blue gradient background
  - Replace yellow accent colors with blue throughout the page
  - Update CTA buttons to blue background
  - Ensure promotion cards use blue as primary accent
  - Apply consistent spacing and typography
  - Maintain visual hierarchy with blue highlights
  - Ensure all text remains in French
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 8.1, 8.2, 7.1, 7.2, 7.3, 7.4, 7.5_



- [ ] 13. Update footer component with blue accents
  - Modify `src/components/footer.tsx` to use blue for links and accents
  - Replace any yellow elements with blue
  - Update hover states to use blue color
  - Ensure consistent styling with rest of site
  - Maintain all French text
  - _Requirements: 8.1, 8.2, 8.3, 7.1, 7.2, 7.3, 7.4, 7.5_


- [ ] 14. Create locations page
  - Create `src/app/locations/page.tsx` for rental locations
  - Implement hero section with blue gradient background
  - Create location cards displaying address, phone, hours, and services
  - Apply blue accent colors throughout
  - Use consistent card styling with shadow and borders
  - Add map placeholder or integration
  - Write all content in French

  - _Requirements: 1.1, 7.1, 7.2, 7.3, 7.4, 7.5, 8.1, 8.2, 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ] 15. Create blog listing page
  - Create `src/app/blogs/page.tsx` for blog listing
  - Implement hero section with blue gradient
  - Create grid layout for blog post cards
  - Add blog card component with image, title, excerpt, date, and category
  - Apply blue accents for links and hover states
  - Implement responsive grid (1 column mobile, 2-3 columns desktop)


  - Write placeholder content in French
  - _Requirements: 1.1, 7.1, 7.2, 7.3, 7.4, 7.5, 8.1, 8.2, 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ] 16. Create individual blog post page
  - Create `src/app/blogs/[slug]/page.tsx` for individual blog posts
  - Implement clean reading layout with proper typography
  - Add featured image at top
  - Include author information and publish date


  - Add category and tags with blue styling
  - Implement related posts section at bottom
  - Apply blue accents for links and interactive elements
  - Write placeholder content in French
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 8.1, 8.2, 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ] 17. Update all button components with blue styling
  - Search for all button instances across components
  - Update primary buttons to use bg-[#0066FF] with white text
  - Update secondary buttons to use white background with blue border and text
  - Ensure hover states use appropriate blue shades
  - Apply consistent padding (px-6 py-3) and font weight (font-semibold)
  - Add smooth transition effects
  - _Requirements: 8.1, 8.2, 8.3, 11.1, 11.2_

- [ ] 18. Ensure responsive design across all pages
  - Test all updated pages on mobile viewport (< 768px)
  - Verify tablet layout (768px - 1024px)
  - Confirm desktop layout (> 1024px)
  - Ensure navigation converts to mobile menu properly
  - Verify content sections stack correctly on mobile
  - Check that all touch targets are minimum 44px on mobile
  - Test dropdown menu on all screen sizes
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 11.3, 11.4, 11.5_

- [ ] 19. Update remaining components with blue color scheme
  - Update `src/components/brand-filter.tsx` with blue accents
  - Update `src/components/car-card.tsx` with blue hover states and badges
  - Update `src/components/featured-cars.tsx` section title and buttons to blue
  - Update `src/components/promo-banner.tsx` with blue background
  - Update `src/components/floating-social.tsx` icons with blue accents
  - Update `src/components/whatsapp-chat.tsx` button (keep green for WhatsApp brand)
  - Ensure all components use consistent blue (#0066FF)
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ] 20. Verify French language across entire site
  - Review all navigation labels are in French
  - Check all button text is in French
  - Verify form labels and placeholders are in French
  - Ensure error messages are in French
  - Confirm page titles and headings are in French
  - Update any remaining English text to French
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ]* 21. Perform accessibility audit
  - Check color contrast ratios meet WCAG AA standards for blue on white
  - Verify keyboard navigation works throughout site
  - Test screen reader compatibility
  - Ensure focus indicators are visible
  - Add ARIA labels where needed
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ]* 22. Optimize performance
  - Verify all images use Next.js Image component
  - Check lazy loading is implemented for below-fold content
  - Confirm code splitting by route
  - Test page load times (LCP < 2.5s)
  - Optimize font loading
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_
