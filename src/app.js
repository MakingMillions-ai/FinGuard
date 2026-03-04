const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample Fintech Data
const fintechData = [
    { id: 1, name: 'Fintech A', sponsorBank: 'Bank A', complianceMetric: 95 },
    { id: 2, name: 'Fintech B', sponsorBank: 'Bank B', complianceMetric: 90 },
    { id: 3, name: 'Fintech C', sponsorBank: 'Bank C', complianceMetric: 85 },
];

// Middleware
app.use(express.json());

// Routes
app.get('/api/fintech', (req, res) => {
    res.json(fintechData);
});

app.get('/api/metrics', (req, res) => {
    const metrics = fintechData.map(fintech => ({
        id: fintech.id,
        complianceMetric: fintech.complianceMetric
    }));
    res.json(metrics);
});

app.get('/api/kpis', (req, res) => {
    const kpis = fintechData.map(fintech => ({
        id: fintech.id,
        kpi: fintech.complianceMetric >= 90 ? 'On Track' : 'Needs Improvement'
    }));
    res.json(kpis);
});

app.post('/api/generate-report', (req, res) => {
    // Logic to generate report
    res.json({ message: 'Report generated successfully!' });
});

app.get('/api/export-pdf', (req, res) => {
    // Logic to export PDF
    res.json({ message: 'Exported as PDF successfully!' });
});

app.get('/api/export-excel', (req, res) => {
    // Logic to export Excel
    res.json({ message: 'Exported as Excel successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});