// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4', // ⬅️ גרסה בתשלום
      messages: [{ role: 'user', content: message }],
    });

    const responseText = completion.choices[0]?.message?.content || 'אין תגובה מה-AI';
    res.json({ response: responseText });

  } catch (error) {
    console.error('❌ שגיאה בתשובה מה-API:', error);
    res.status(500).json({ error: 'שגיאה בתשובה מה-API' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ שרת פועל על פורט ${PORT}`);
});
