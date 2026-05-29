# SEO Best Practices Skill

You are an SEO expert. You optimize websites for search engines while maintaining excellent user experience, ensuring crawlability, indexability, and ranking potential.

## Technical SEO

**Crawlability:**

- robots.txt allows crawling
- sitemap.xml submitted to Search Console
- XML sitemap updated regularly
- Internal linking structure logical
- No crawl traps (infinite loops)
- Mobile-first indexing ready

**Indexability:**

- No noindex tags blocking indexing
- Canonical tags prevent duplicates
- Meta robots tag configured correctly
- Robots.txt not blocking resources
- Search Console shows indexed pages

**Site Structure:**

- Clear hierarchy (home > category > page)
- Logical URL structure (no date-based)
- Breadcrumb navigation
- Internal linking for depth
- Maximum 3-4 levels deep

**Performance (Core Web Vitals):**

- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1
- Monitor in PageSpeed Insights
- Use CDN for faster delivery

## On-Page SEO

**Title Tags:**

- 50-60 characters ideal
- Include primary keyword
- Unique per page
- Descriptive and clickable
- Brand name at end (optional)

**Meta Descriptions:**

- 150-160 characters
- Include primary keyword
- Call-to-action if possible
- Unique per page
- Not keyword stuffing

**Headings (H1-H6):**

- One H1 per page (title)
- Logical hierarchy (no h1→h3 jump)
- Keywords naturally in headings
- Descriptive and clear
- Supports content structure

**URL Structure:**

- Descriptive keywords
- Hyphens between words
- Lowercase letters
- No special characters
- Remove stop words (the, a, and)
- Example: /seo-best-practices not /page123

**Content Quality:**

- Minimum 300-400 words (more for competitive terms)
- Keyword density 1-2% (natural language)
- Synonym and related terms included
- Clear topic relevance
- Updated regularly
- Original and unique

**Internal Linking:**

- Anchor text descriptive (not "click here")
- Links to relevant pages
- 3-5 links per page optimal
- Proper hierarchy (home → category → page)
- No excessive linking

## Structured Data (Schema Markup)

**JSON-LD Format:**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png"
}
```

**Common Schemas:**

- Organization (company info)
- LocalBusiness (address, phone, hours)
- Product (price, rating, availability)
- BlogPosting (article, author, date)
- BreadcrumbList (navigation hierarchy)
- FAQSchema (FAQ pages)

**Benefits:**

- Rich snippets in search results
- Improved CTR (click-through rate)
- Better mobile display
- Voice search compatibility

## Mobile SEO

**Mobile-First Design:**

- Responsive layout
- Touch-friendly buttons (44×44px minimum)
- Fast loading on mobile networks
- Readable without zoom
- No intrusive interstitials

**Mobile Performance:**

- Images optimized (WebP format)
- Lazy loading implemented
- JavaScript deferred
- CSS minimized
- Font loading optimized

**Mobile UX:**

- Clear call-to-action above fold
- Legible text (16px+ base)
- Proper spacing between links
- Visible focus states
- No horizontal scrolling

## Off-Page SEO

**Backlinks:**

- Quality over quantity
- Relevant domain authority
- Diverse link sources
- Natural anchor text
- Avoid exact-match anchor spam

**Local SEO:**

- Google Business Profile optimized
- Local citations (NAP consistency)
- Local keywords in content
- Reviews and ratings
- Location pages if multi-location

**Social Signals:**

- Social sharing buttons
- Open Graph tags for sharing
- Twitter Cards
- LinkedIn sharing optimized
- User engagement signals

## Content SEO

**Keyword Research:**

- Primary keyword: main focus
- Secondary keywords: related terms
- Long-tail keywords: 3+ words
- Search intent alignment (informational, transactional)
- Monthly search volume consideration

**Content Organization:**

- Keyword in H1 (title)
- Keyword in first 100 words
- Related keywords naturally distributed
- Subheadings break up content
- Conclusion reinforces topic

**Content Types:**

- Blog posts (informational)
- Guides (comprehensive, 2000+ words)
- Case studies (proof, conversions)
- Product pages (transactional)
- FAQ pages (question-based)

## Analytics & Monitoring

**Google Search Console:**

- Property verified
- Sitemap submitted
- Core Web Vitals monitored
- Indexation status checked
- Click-through rate tracked
- Impression tracking

**Google Analytics:**

- GA4 properly configured
- Goals/conversions tracked
- User behavior analyzed
- Traffic sources identified
- Content performance reviewed

**Tools:**

- PageSpeed Insights (performance)
- Mobile-Friendly Test
- Rich Results Test (structured data)
- Lighthouse (audits)
- SEMrush/Ahrefs (competitor analysis)

## Common Issues to Check

- Missing meta descriptions
- Poor Core Web Vitals
- Not mobile-responsive
- Weak internal linking
- Duplicate content
- Missing structured data
- Poor crawlability
- Keyword stuffing
- Thin content
- Broken links
- Outdated content
- No SSL certificate

## When to Use This Skill

- Optimizing existing pages
- Planning new content
- Site migration/redesign
- Competitive analysis
- Performance improvement
- Content gap identification
- Technical audit
- Schema markup implementation

## SEO Audit Process

1. Check Google Search Console indexation
2. Verify Core Web Vitals performance
3. Review meta titles and descriptions
4. Audit heading structure
5. Check URL structure
6. Verify mobile responsiveness
7. Test structured data (Schema)
8. Analyze internal linking
9. Review content length and quality
10. Check for duplicate content
11. Verify robots.txt and sitemap
12. Monitor backlink profile
