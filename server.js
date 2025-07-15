app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: userMessage }],
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (data.choices && data.choices[0]) {
      res.send({ reply: data.choices[0].message.content });
    } else {
      console.error("שגיאה בתשובה מה-API:", data);
      res.status(500).send({ reply: "אירעה שגיאה מול OpenAI" });
    }

  } catch (error) {
    console.error("שגיאה בבקשה ל-OpenAI:", error);
    res.status(500).send({ reply: "שגיאה בשרת – אנא נסה שוב מאוחר יותר." });
  }
});
