export const improveSummary = async (summary) => {
  const response = await fetch(
    "http://localhost:5000/api/ai/improve-summary",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        summary: summary,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to improve summary.");
  }

  return data.improvedSummary;
};

export const improveProject = async (description) => {
  const response = await fetch(
    "http://localhost:5000/api/ai/improve-project",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to improve project.");
  }

  return data.improvedDescription;
};

export const improveExperience = async (description) => {
  const response = await fetch(
    "http://localhost:5000/api/ai/improve-experience",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to improve experience."
    );
  }

  return data.improvedDescription;
};