# Agent Skills: Best Practices

Good Skills are concise, well-structured, and tested with real usage. This guide provides practical authoring decisions to help you write Skills that Claude can discover and use effectively.

## Core Principles

### Concise is Key

The context window is a public good. Your Skill shares the context window with everything else Claude needs to know, including the system prompt, conversation history, and your actual request.

- **Default assumption:** Claude is already very smart. Only add context Claude doesn't already have.
    
- **Challenge each piece of information:** "Does Claude really need this explanation?" or "Does this paragraph justify its token cost?"
    

**Good example: Concise (~50 tokens)**

```
## Extract PDF text
Use pdfplumber for text extraction:
import pdfplumber
with pdfplumber.open("file.pdf") as pdf:
    text = pdf.pages[0].extract_text()
```

**Bad example: Too verbose (~150 tokens)**

> "PDF (Portable Document Format) files are a common file format... To extract text from a PDF, you'll need to use a library... First, you'll need to install it using pip..."

### Set Appropriate Degrees of Freedom

Match the level of specificity to the task's fragility and variability.

- **High Freedom (Text-based instructions):** Use when multiple approaches are valid or context determines the best path.
    
    - _Example:_ Code review process (analyze structure, check bugs, suggest improvements).
        
- **Medium Freedom (Pseudocode/Templates):** Use when a preferred pattern exists but variation is acceptable.
    
    - _Example:_ `def generate_report(data, format="markdown", include_charts=True):`
        
- **Low Freedom (Specific scripts):** Use when operations are fragile, error-prone, or strict sequences are required.
    
    - _Example:_ `python scripts/migrate.py --verify --backup` (Do not modify command).
        

### Test with All Models

Skills act as additions to models. What works for **Claude Opus** (powerful reasoning) might need more detail for **Claude Haiku** (fast, economical). Test your Skill with all models you plan to use.

## Skill Structure

### YAML Frontmatter

The `SKILL.md` frontmatter requires two specific fields:

- **`name`**:
    
    - Max 64 chars.
        
    - Lowercase letters, numbers, hyphens only.
        
    - No reserved words ("anthropic", "claude").
        
- **`description`**:
    
    - Max 1024 chars.
        
    - Must describe what the Skill does and **when to use it**.
        

### Example: Simple Skill Structure

A basic skill combines metadata, an overview, and executable examples.

**File: `pdf/SKILL.md`**

````
---
name: PDF Processing
description: Comprehensive PDF toolkit for extracting text and tables, merging/splitting documents, and filling-out forms.
---

## Overview

This guide covers essential PDF processing operations using Python libraries and command-line tools. For advanced features, JavaScript libraries, and detailed examples, see ./reference.md. If you need to fill out a PDF form, read ./forms.md and follow its instructions.

## Quick Start

```python
from pypdf import PdfReader, PdfWriter

# Read a PDF
reader = PdfReader("document.pdf")
print(f"Pages: {len(reader.pages)}")

# Extract text
text = ""
for page in reader.pages:
    text += page.extract_text()
````

```

## Naming Conventions

Use **gerund form (verb + -ing)** for Skill names to clearly describe activity.

* **Good:** `processing-pdfs`, `analyzing-spreadsheets`, `testing-code`.

* **Acceptable:** `pdf-processing`, `process-pdfs`.

* **Avoid:** `helper`, `utils`, `anthropic-helper` (reserved), `documents` (generic).

## Writing Effective Descriptions

The description is critical for Skill discovery. Claude uses it to choose the right Skill from potentially 100+ available Skills.

1. **Write in third person:** Avoid "I can help..." or "You can use...".

2. **Be specific:** Include what it does and specific triggers.

**Examples:**

* **PDF Processing:** "Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files or when the user mentions PDFs, forms, or document extraction."

* **Git Commit Helper:** "Generate descriptive commit messages by analyzing git diffs. Use when the user asks for help writing commit messages..."

## Progressive Disclosure Patterns

Keep `SKILL.md` under 500 lines. Use a filesystem-based architecture to load details only when needed.

### Bundling Additional Content

Keep your main skill file clean by linking to sidecar files using relative paths. This allows the model to "navigate" to more specific instructions only when requested.

**Example Structure:**
* **Entry Point (`pdf/SKILL.md`):**
    > "For advanced features... see `./reference.md`. If you need to fill out a PDF form, read `./forms.md`..."
* **Topic File (`pdf/forms.md`):**
    > "If you need to fill out a PDF form, first check to see if the PDF has fillable form fields..."
* **Reference File (`pdf/reference.md`):**
    > "# PDF Processing Advanced Reference... detailed examples, and additional libraries not covered in the main skill instructions."

### Bundling Executable Scripts

For complex or fragile operations, bundle Python scripts alongside your markdown instructions. This reduces the chance of code generation errors by providing a "golden path."

**Example:**
Instead of asking the model to write code to extract fields, provide a robust script.

1.  **Instruction File (`pdf/forms.md`):**
    > "Run this script from this file's directory: `python ./extract_fields.py <input.pdf> <fields.json>`"

2.  **Script File (`pdf/extract_fields.py`):**
    ```python
    from pypdf import PdfReader
    import sys, json

    def write_field_info(pdf_path, output_path):
        reader = PdfReader(pdf_path)
        fields = get_fields(reader)
        # ... logic ...
    
    if __name__ == "__main__":
        # ... CLI entry point ...
    ```

### File Organization Patterns

**Pattern 1: High-level guide with references**
Show quick starts in `SKILL.md` and link to detailed files.

```

# PDF Processing

## Quick start

[Code snippet...]

## Advanced features

Form filling: See FORMS.md for complete guide

API reference: See REFERENCE.md

```

**Pattern 2: Domain-specific organization**
Organize by domain (e.g., Finance, Sales, Marketing) so Claude only loads relevant schemas.

```

bigquery-skill/

├── SKILL.md

└── reference/

├── finance.md

├── sales.md

└── marketing.md

```

**Pattern 3: Conditional details**
Show basic content, link to complex/rare features.

> "For tracked changes: See [REDLINING.md](https://www.google.com/search?q=REDLINING.md)"

### Avoid Deeply Nested References

Keep references **one level deep** from `SKILL.md`.

* **Bad:** `SKILL.md` -> `advanced.md` -> `details.md` (Claude may miss content).

* **Good:** `SKILL.md` links directly to `advanced.md`, `reference.md`, `examples.md`.

## Workflows and Feedback Loops

### Use Workflows for Complex Tasks

Break complex operations into clear, sequential steps or checklists.

**Example: PDF Form Filling Workflow**

```

## PDF form filling workflow

Copy this checklist and check off items as you complete them:

- [ ] Step 1: Analyze the form (run analyze_form.py)
    
- [ ] Step 2: Create field mapping (edit fields.json)
    
- [ ] Step 3: Validate mapping (run validate_fields.py)
    
    ...
    

```

### Implement Feedback Loops

Common pattern: **Run validator → fix errors → repeat**.

**Example: Document Editing**

1. Make edits to `word/document.xml`.

2. **Validate immediately:** `python ooxml/scripts/validate.py`.

3. If fails, fix and re-run.

4. **Only proceed when validation passes.**

## Content Guidelines

* **Avoid Time-Sensitive Info:** Don't write "As of 2024...". Instead, distinguish between "Current method" and "Legacy/Old patterns".

* **Use Consistent Terminology:** Stick to one term (e.g., always "API endpoint", never switching to "URL" or "route").

## Common Patterns

### Template Pattern

Provide templates for output format.

```

## Report structure

ALWAYS use this exact template structure:

# [Analysis Title]

## Executive summary

## Key findings

## Recommendations

```

### Examples Pattern

Provide input/output pairs to demonstrate desired style.

```

## Commit message format

Example 1:

Input: Added user authentication...

Output: feat(auth): implement JWT-based authentication

Example 2:

Input: Fixed bug where dates displayed...

Output: fix(reports): correct date formatting

```

### Conditional Workflow Pattern

Guide Claude through decision points.

> "Creating new content? → Follow Creation workflow."
> "Editing existing content? → Follow Editing workflow."

## Evaluation and Iteration

**Build evaluations first.** Create evaluations BEFORE writing extensive documentation to ensure your Skill solves real problems.
```