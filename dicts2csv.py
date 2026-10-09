import pandas as pd

sample_dict = [
    {

        "id": 101,
        "name": "Alice Johnson",
        "role": "Lead Engineer",
        "skills": ["Python", "AWS", "Docker"],
        "is_active": True # use valid lang bool value
    },
    {
        "id": 102,
        "name": "Marcus Chen",
        "role": "UX Designer",
        "skills": ["Figma", "CSS", "React"],
        "is_active": True # use valid lang bool value
    },
    {
        "id": 103,
        "name": "Sarah Smith",
        "role": "Data Analyst",
        "skills": ["SQL", "Tableau", "R"],
        "is_active": False # use valid lang bool value
    }
]
#load data into a DataFrame object:
py_result = pd.DataFrame(sample_dict).to_csv(index=False)

print(py_result)