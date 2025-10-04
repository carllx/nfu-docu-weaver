from PyPDF2 import PdfWriter, PdfReader
import sys


def split_pdf(pdf_file):

    pdf = PdfReader(pdf_file)
    # split pdf file into multiple files according value of over size
    over_size = 1-0.4 # over size in total pages
    total_pages = len(pdf.pages)
    split_pages = int(total_pages * over_size)
    for i in range(0, total_pages, split_pages):
        writer = PdfWriter()
        for page in pdf.pages[i:i+split_pages]:
            writer.add_page(page)
        writer.write(pdf_file.split(".")[0] + "_split_" + str(i) + ".pdf")



# extract pdf file by specific range of pages
def extract_pdf(pdf_file, start, end):
    pdf = PdfReader(pdf_file)
    writer = PdfWriter()
    for i in range(start-1, end):
        writer.add_page(pdf.pages[i])
    writer.write(pdf_file.split(".")[0] + "_extract_" + str(start) + "_" + str(end) + ".pdf")


if __name__ == "__main__":
    # split_pdf(sys.argv[1])
    #
    # split_pdf("/Users/yamlam/Zotero/storage/QPZSPMX6/Drozdick et al. - 2011 - Essentials of WMS-IV assessment.pdf")
    extract_pdf("/Users/yamlam/Downloads/mti2020013 (1).pdf", 922,928)
