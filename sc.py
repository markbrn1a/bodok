import json
from docx import Document

def docx_to_json(docx_file):
    doc = Document(docx_file)
    data = {}

    # Assuming that each paragraph starts with a heading or key, followed by the value.
    key = None
    for para in doc.paragraphs:
        text = para.text.strip()
        if not text:
            continue
        if para.style.name.startswith('Heading') or ':' in text:
            if key:
                data[key] = value.strip()
            if ':' in text:
                key, value = text.split(':', 1)
            else:
                key = text
                value = ''
        else:
            value += ' ' + text

    # Save the last key-value pair
    if key:
        data[key] = value.strip()

    return json.dumps(data, ensure_ascii=False, indent=4)

# Usage
docx_file = "/Adatvedelmi-minta.docx"
json_output = docx_to_json(docx_file)

# Saving the JSON to a file
with open("/Adatvedelmi-minta.json", "w", encoding="utf-8") as json_file:
    json_file.write(json_output)

print(json_output)
