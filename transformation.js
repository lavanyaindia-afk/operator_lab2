const scores = [85, 87, 90, 94, 88]; 

// Calculate average
let total = 0;
for (const score of scores) {
  total += score; // calculates by adding to total.
                  // += means total = total + score
}
const avg = total / scores.length;

// Conditional Logic (Ternary Operator)
const result = avg > 95 ? "Meeting Expectations" : "Needs Improvement";

console.log(`Average: ${avg} - ${result}`);