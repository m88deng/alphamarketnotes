# Scripts

## Creating a New News Post

To create a news post with an auto-generated ID, run:

```bash
npm run create-news-post
```

Copy the generated object into `src/data/newsPosts.ts`, then replace the example HTML in `content` with your article.

## Creating a New Market Outlook Post

To create a new post with an auto-generated ID, run:

```bash
npm run create-post
```

This interactive script will:
1. ✅ Ask you for post details (title, excerpt, date, category, read time)
2. ✅ Generate a unique ID automatically
3. ✅ Create a post template with proper formatting
4. ✅ Show you the URL where the post will be accessible

### Steps:

1. Run the command:
   ```bash
   npm run create-post
   ```

2. Answer the prompts:
   - **Title**: The post title (e.g., "Q1 2026 Market Review")
   - **Excerpt**: A short summary (1-2 sentences)
   - **Date**: Publication date (e.g., "January 12, 2026")
   - **Category**: One of: "Quarterly Review", "Strategy", or "Sector Analysis"
   - **Read Time**: Estimated reading time (e.g., "10 min read")

3. Copy the generated code

4. Open `src/data/marketOutlookPosts.ts`

5. Add the generated post object to the `outlookPosts` array

6. Fill in the `content` section with your full article using HTML tags:
   - Use `<h3>` for section headings
   - Use `<p>` for paragraphs
   - Use `<ul>` and `<li>` for bullet lists
   - Use `<strong>` for bold text

### Example:

```typescript
{
  id: "1736726400000-a3f2",
  title: "Q1 2026 Market Review",
  excerpt: "Analysis of first quarter market dynamics...",
  date: "January 12, 2026",
  category: "Quarterly Review",
  readTime: "12 min read",
  content: `
    <h3>Market Overview</h3>
    <p>The first quarter showed strong performance...</p>
    
    <h3>Key Takeaways</h3>
    <ul>
      <li>Equity markets rallied 8%</li>
      <li>Tech sector outperformed</li>
    </ul>
  `
}
```

### ID Format

IDs are automatically generated as **8-character hexadecimal hashes** (MarketWatch style):
- Example: `cb8b7ce1`
- Short, clean, and professional
- Ensures uniqueness through timestamp + random data
- Works seamlessly with the routing system

### URL Structure

Posts will be accessible at:
```
/market-outlook/{title-slug}-{id}
```

For example:
```
/market-outlook/q1-2026-market-review-cb8b7ce1
```

This follows the same URL pattern as major news sites like MarketWatch!
