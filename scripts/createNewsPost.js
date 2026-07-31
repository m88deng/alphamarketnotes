#!/usr/bin/env node

/**
 * Helper script to create a new news post with an auto-generated ID.
 *
 * Usage:
 *   node scripts/createNewsPost.js
 *
 * This generates a post template to copy into src/data/newsPosts.ts.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generatePostId() {
  const timestamp = Date.now().toString(16);
  const random = Math.random().toString(16).substring(2);

  return (timestamp + random).substring(0, 8);
}

const questions = [
  { key: 'title', prompt: 'Post Title: ' },
  { key: 'excerpt', prompt: 'Excerpt (short summary): ' },
  { key: 'date', prompt: 'Date (e.g., "January 12, 2026"): ' },
  { key: 'category', prompt: 'Category: ' },
  { key: 'readTime', prompt: 'Read Time (e.g., "5 min read"): ' }
];

const answers = {};
let currentQuestion = 0;

function askQuestion() {
  if (currentQuestion >= questions.length) {
    generatePost();
    return;
  }

  const question = questions[currentQuestion];
  rl.question(question.prompt, (answer) => {
    answers[question.key] = answer;
    currentQuestion++;
    askQuestion();
  });
}

function generatePost() {
  const postTemplate = `
  {
    id: "${generatePostId()}",
    title: "${answers.title}",
    excerpt: "${answers.excerpt}",
    date: "${answers.date}",
    category: "${answers.category}",
    readTime: "${answers.readTime}",
    sources: [],
    content: \`
      <h3>Article Heading</h3>
      <p>Write your article content here.</p>
    \`
  }`;

  console.log('\n✅ News post generated successfully!\n');
  console.log('📋 Copy the following code and add it to src/data/newsPosts.ts:\n');
  console.log('─'.repeat(80));
  console.log(postTemplate);

  rl.close();
}

console.log('\n📰 News Post Generator\n');
console.log('This will generate a news post template with an auto-generated ID.\n');

askQuestion();
