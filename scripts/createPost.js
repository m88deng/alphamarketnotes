#!/usr/bin/env node

/**
 * Helper script to create a new market outlook post with auto-generated ID
 * 
 * Usage:
 *   node scripts/createPost.js
 * 
 * This will generate a post template with a unique ID that you can copy
 * into your marketOutlookPosts.ts file
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate a short 8-character hexadecimal hash ID (MarketWatch style)
function generatePostId() {
  const timestamp = Date.now().toString(16);
  const random = Math.random().toString(16).substring(2);
  const combined = timestamp + random;
  
  // Take first 8 characters for a clean, short ID
  return combined.substring(0, 8);
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

console.log('\n🚀 Market Outlook Post Generator\n');
console.log('This will generate a new post template with an auto-generated ID.\n');

const questions = [
  { key: 'title', prompt: 'Post Title: ' },
  { key: 'excerpt', prompt: 'Excerpt (short summary): ' },
  { key: 'date', prompt: 'Date (e.g., "January 12, 2026"): ' },
  { key: 'category', prompt: 'Category (Quarterly Review/Strategy/Sector Analysis): ' },
  { key: 'readTime', prompt: 'Read Time (e.g., "12 min read"): ' },
  { key: 'spyChange', prompt: 'SPY Change: ' },
  { key: 'qqqChange', prompt: 'QQQ Change: ' },
  { key: 'iwmChange', prompt: 'IWM Change: ' }
];

const answers = {};
let currentQuestion = 0;

function askQuestion() {
  if (currentQuestion >= questions.length) {
    generatePost();
    return;
  }

  const q = questions[currentQuestion];
  rl.question(q.prompt, (answer) => {
    answers[q.key] = answer;
    currentQuestion++;
    askQuestion();
  });
}

function generatePost() {
  const postId = generatePostId();
  const slug = slugify(answers.title);
  
  const postTemplate = `
  {
    id: "${postId}",
    title: "${answers.title}",
    excerpt: "${answers.excerpt}",
    date: "${answers.date}",
    category: "${answers.category}",
    readTime: "${answers.readTime}",
    sources: [],
    content: \`
      <table style="border-collapse:collapse;width:100%;text-align:center;font-family:Arial,sans-serif;">
        <tr>
          <td style="padding:8px 16px;border:none;font-size:14px;">SPY ${answers.spyChange}</td>
          <td style="padding:8px 16px;border:none;font-size:14px;">QQQ ${answers.qqqChange}</td>
          <td style="padding:8px 16px;border:none;font-size:14px;">IWM ${answers.iwmChange}</td>
        </tr>
	    </table>
    \`
  }`;

  console.log('\n✅ Post Generated Successfully!\n');
  console.log('📋 Copy the following code and add it to src/data/marketOutlookPosts.ts:\n');
  console.log('─'.repeat(80));
  console.log(postTemplate);
  
  rl.close();
}

askQuestion();

