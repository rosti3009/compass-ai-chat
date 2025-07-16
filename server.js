const express = require('express');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

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

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
=======
const cors = require('cors');
require('dotenv').config();
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Missing message in request body' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: message }],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Error communicating with OpenAI API', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
>>>>>>> 5488c67129052bb1dfa2309e58340bfdab995c84
