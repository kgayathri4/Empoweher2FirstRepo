
const categories = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys"
];

// Step 1: Group and count using reduce()
const categoryCount = categories.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

// Print the count object
console.log("Count Object:", categoryCount);

// Extra Challenge:
// Sort categories based on count (descending)
const sortedCategories = Object.entries(categoryCount)
  .sort((a, b) => b[1] - a[1])  // Sort by count
  .map(entry => entry[0]);      // Return only category names

console.log("Sorted Categories:", sortedCategories);