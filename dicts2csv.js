const file = [

    {
        id: 101,
        name: "Alice Johnson",
        role: "Lead Engineer",
        skills: ["Python", "AWS", "Docker"],
        is_active: true // use valid lang bool value
    },
    {
        id: 102,
        name: "Marcus Chen",
        role: "UX Designer",
        skills: ["Figma", "CSS", "React"],
        is_active: true // use valid lang bool value
    },
    {
        id: 103,
        name: "Sarah Smith",
        role: "Data Analyst",
        skills: ["SQL", "Tableau", "R"],
        is_active: false // use valid lang bool value
    }
];
// 1. Manually extract headers from the first object

const headers = Object.keys(file[0]);
let js_result = "";

// 2. Build the header row manually
for (let i = 0; i < headers.length; i++) {
    js_result = js_result + headers[i];
    if (i < headers.length - 1) {
        js_result += ","; // Add comma between headers, but not at the end
    }
}
js_result += "\n"; // Move to the next line

// 3. Loop through each row (object) in the data array
for (let i = 0; i < file.length; i++) {
    const row = file[i];
    // Loop through each header to get the values for this row
    for (let j = 0; j < headers.length; j++) {
        const key = headers[j];
        js_result = js_result + row[key];
        if (j < headers.length - 1) {
            js_result += ","; // Add comma between values
        }
    }
    // Add a new line after each row except the very last one
    if (i < file.length - 1) {
        js_result = js_result + "\n";
    }
}
console.log(js_result);