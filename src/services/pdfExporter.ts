import { jsPDF } from 'jspdf';

export function exportComplianceReport(data) {
    const doc = new jsPDF();
    doc.text('Compliance Report', 10, 10);

    // Assuming `data` is an array of objects with `name` and `value`
    data.forEach((item, index) => {
        doc.text(`${item.name}: ${item.value}`, 10, 20 + index * 10);
    });

    // Save the PDF
    doc.save('compliance_report.pdf');
}