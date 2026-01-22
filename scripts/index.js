const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

const TEMPLATE = "letter-template-esummit-26.pdf";
const OUTPUT_DIR = "outputs";

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

async function generatePDF(row) {
    const existingPdfBytes = fs.readFileSync(TEMPLATE);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const page = pdfDoc.getPages()[0];

    const fontSize = 12;

    // ⚠️ Adjust Y values if alignment needs tweaking
    page.drawText(row.name, {
        x: 186,
        y: 657,
        size: fontSize,
        font,
        color: rgb(0, 0, 0),
    });

    page.drawText(row.position, {
        x: 186,
        y: 644,
        size: fontSize,
        font,
        color: rgb(0, 0, 0),
    });

    page.drawText(row.department, {
        x: 186,
        y: 630,
        size: fontSize,
        font,
        color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();

    const fileName = row.name.replace(/\s+/g, "_") + ".pdf";
    fs.writeFileSync(path.join(OUTPUT_DIR, fileName), pdfBytes);
}

fs.createReadStream("data.csv")
    .pipe(csv())
    .on("data", (row) => generatePDF(row))
    .on("end", () => console.log("All letters generated."));
