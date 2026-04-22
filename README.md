# 🎓 Smart Study Assistant

An AI-powered web app that helps students **summarize notes**, **generate quizzes**, and **explain concepts** — runs 100% free and locally using **Ollama** (no API key, no internet needed after setup).

---

## ✨ Features

| Feature | Description |
|---|---|
| 📄 **Summarize Notes** | Paste any text → get brief, detailed, bullet, or key-terms summary |
| 🧠 **Generate Quiz** | Auto-generates MCQs from your notes with instant right/wrong feedback |
| 💡 **Explain Concept** | Ask any topic → get explanation at beginner / intermediate / advanced level |

---

## 🚀 How to Run (3 steps)

### Step 1 — Install Ollama (free, one time)
Go to **[ollama.com](https://ollama.com)** and download for your OS (Windows / Mac / Linux).

### Step 2 — Download the AI model (one time)
Open Terminal / Command Prompt and run:
```bash
ollama pull llama3.2
```
This downloads a ~2 GB free AI model to your computer. Wait for it to finish.

### Step 3 — Open the app
```bash
git clone https://github.com/YOUR_USERNAME/smart-study-assistant.git
cd smart-study-assistant
```
Then open `index.html` in VS Code with **Live Server** extension, or just double-click it.

That's it — **no API key, no paid account, no internet needed!**

---

## 📁 Project Structure

```
smart-study-assistant/
├── index.html       ← Open this to run the app
├── css/
│   └── style.css    ← All styling
├── js/
│   └── app.js       ← All logic (calls Ollama locally)
└── README.md
```

---

## ⚙️ How It Works

```
Your Browser  ──→  app.js  ──→  Ollama (localhost:11434)  ──→  llama3.2 model
                                        ↓
                              AI runs on YOUR computer
                              No data sent to internet
```

Your notes never leave your computer. Everything is processed locally.

---

## 🛠️ Tech Used

- **HTML, CSS, JavaScript** — frontend (no frameworks)
- **Ollama** — runs the AI model locally and free
- **llama3.2** — the AI model (by Meta, open source)
- **Live Server** — VS Code extension to run it

---

## ❓ Troubleshooting

| Problem | Fix |
|---|---|
| "Ollama is not running" | Open Terminal, type `ollama serve` and keep it open |
| "Model missing" | Run `ollama pull llama3.2` in Terminal |
| Quiz shows wrong format | Try again — local models sometimes need a retry |
| App won't open | Use Live Server in VS Code, not direct file open |

---

## 📄 License
MIT License — free to use and modify.
