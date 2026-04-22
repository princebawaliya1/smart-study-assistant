// =============================================
//   Smart Study Assistant - SIMPLE VERSION
//   Only Summarization (Stable + Minimal)
// =============================================

const API_KEY = "your_api_key"; // add your key

const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

// ---------- API CALL ----------

async function callAI(prompt) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("API ERROR:", data);
      throw new Error(data?.error?.message || "API failed");
    }

    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

  } catch (err) {
    console.error("FETCH ERROR:", err);
    throw err;
  }
}

// ---------- SUMMARIZE ONLY ----------

async function runSummarize() {
  const text = document.getElementById("sum-input").value.trim();
  if (!text) return alert("Paste notes first");

  const loader = document.getElementById("sum-loader");
  const resultCard = document.getElementById("sum-result");
  const resultText = document.getElementById("sum-result-text");

  loader.classList.add("show");
  resultCard.style.display = "none";

  try {
    const prompt = `Summarize this clearly in simple student-friendly language:\n\n${text}`;
    const answer = await callAI(prompt);

    resultText.textContent = answer;
    resultCard.style.display = "block";

  } catch (e) {
    console.error(e);
    alert("Error: " + e.message);
  }

  loader.classList.remove("show");
}

// ---------- DISABLED FEATURES ----------

function runQuiz() {
  alert("Quiz feature removed");
}

function runExplain() {
  alert("Explain feature removed");
}
