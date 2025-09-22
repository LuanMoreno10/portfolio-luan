import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contact from './routes/contact.js';

dotenv.config();
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(',') || '*'
}));
app.use(express.json());

app.get('/health', (_, res) => {
    res.json({ status: 'ok' });
});

app.use('/contact', contact);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on API http://0.0.0.0:${PORT}`));