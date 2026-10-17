import pandas as pd
import sys

try:
    df = pd.read_csv("tasks.csv")
    def calculate_safe(row):
        try:
            # Check if time_spent is not null/NaN and not equal to zero
            if pd.notna(row["time_spent"]) and row["time_spent"] != 0:
                avg = row["total_tasks"] / row["time_spent"]
                return avg
            return 0  # Fallback value for zero or null/NaN
        except ZeroDivisionError:
            return 0  # Fallback value

    df["avg_speed"] = df.apply(calculate_safe, axis=1)
    print("Process Complete.")
    print(df)

except FileNotFoundError:
    print("DEBUG: 'tasks.csv' not found.")
except Exception as e:
    print(f"CRITICAL ERROR: {e}")