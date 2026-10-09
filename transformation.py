scores = [85, 87, 90, 94, 88]

# Calculate average
avg = sum(scores) / len(scores)

# Conditional Logic
if avg > 95:
    result = "Meeting Expectations"
else:
    result = "Needs Improvement"

print(f"Average: {avg} - {result}")