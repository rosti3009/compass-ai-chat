# Compass AI ChatBot

שרת Node.js עם צ'אט מבוסס GPT-4 המוכן לפריסה ב-Render.

## שלבים לפריסה ב-Render

1. פתח חשבון ב- https://render.com
2. צור ריפוזיטורי חדש ב-GitHub והעלה אליו את הקבצים מהתיקייה הזו
3. ב-Render לחץ "New Web Service"
4. בחר את הריפו שלך
5. בנה עם הפקודות:
   - Build Command: npm install
   - Start Command: npm start
6. הגדר Environment Variable:
   - `OPENAI_API_KEY` = `sk-xxxxxxxxxxxx`
7. אחרי הפריסה, תוכל לגשת לכתובת הציבורית כמו:
   https://compass-ai.onrender.com

8. כדי להטמיע באתר שלך:
   - הוסף iframe או כפתור קישור:
   `<iframe src="https://compass-ai.onrender.com" style="width:100%; height:600px; border:none;"></iframe>`

בהצלחה 🚀
