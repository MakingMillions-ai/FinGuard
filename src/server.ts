import express from 'express';
import { generateComplianceReport } from './services/reportGenerator';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/generate-report', async (req, res) => {
    try {
        const report = await generateComplianceReport(req.body);
        res.json(report);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});