// complianceMetrics.ts

// Function to calculate compliance KPIs

export function calculateComplianceKPI(transactions: number, frauds: number, amlAlerts: number, complaints: number) {
    const transactionVolume = transactions;
    const fraudRate = transactions > 0 ? (frauds / transactions) * 100 : 0;
    const amlAlertRate = transactions > 0 ? (amlAlerts / transactions) * 100 : 0;
    const complaintRate = transactions > 0 ? (complaints / transactions) * 100 : 0;

    return {
        transactionVolume,
        fraudRate,
        amlAlertRate,
        complaintRate,
    };
}

// Example usage
// const metrics = calculateComplianceKPI(1000, 10, 5, 20);
// console.log(metrics);