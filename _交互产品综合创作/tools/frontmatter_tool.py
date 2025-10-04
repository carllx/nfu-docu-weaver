import argparse
import os
import sys

# A list of keys that the script will check for in the frontmatter.
REQUIRED_KEYS = [
    'week_num',
    'epic_num',
    'sequence',
    'type',
    'status',
    'tldr',
    'course_name'
]

def add_frontmatter_to_file(file_path, args):
    """
    Checks a file for required YAML frontmatter keys and adds them if they are missing.
    """
    try:
        if not os.path.isfile(file_path):
            print(f"Error: File not found at '{file_path}'", file=sys.stderr)
            return

        with open(file_path, 'r', encoding='utf-8') as f:
            original_content = f.read()

        if original_content.startswith('---'):
            try:
                end_of_frontmatter = original_content.index('---', 3)
                frontmatter_section = original_content[3:end_of_frontmatter]

                for key in REQUIRED_KEYS:
                    if f'{key}:' in frontmatter_section:
                        print(f"Info: At least one required key ('{key}') already exists. Skipping file: {file_path}")
                        return
            except ValueError:
                pass

        print(f"Info: No required keys found in frontmatter. Adding new block to {file_path}")

        new_frontmatter = (
            "---"
            f"\nweek_num: {args.week_num}"
            f"\nepic_num: {args.epic_num}"
            f"\nsequence: {args.sequence}"
            f"\ntype: \"{args.type}\""
            f"\nstatus: \"{args.status}\""
            f"\ntldr: \"{args.tldr}\""
            f"\ncourse_name: \"{args.course_name}\""
            f"\n---"
            f"\n\n"
        )

        new_content = new_frontmatter + original_content

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"Success: Frontmatter added successfully to {file_path}")

    except Exception as e:
        print(f"An unexpected error occurred: {e}", file=sys.stderr)

def remove_frontmatter_from_file(file_path):
    """
    Removes the YAML frontmatter block from the specified file.
    """
    try:
        if not os.path.isfile(file_path):
            print(f"Error: File not found at '{file_path}'", file=sys.stderr)
            return

        with open(file_path, 'r', encoding='utf-8') as f:
            original_content = f.read()

        if not original_content.startswith('---'):
            print(f"Info: No frontmatter found to remove in {file_path}.")
            return

        try:
            end_of_frontmatter_index = original_content.index('---', 3)
            content_after_frontmatter = original_content[end_of_frontmatter_index + 3:]
            new_content = content_after_frontmatter.lstrip()

            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Success: Removed frontmatter from {file_path}")

        except ValueError:
            print(f"Info: Found opening '---' but no closing '---'. No changes made to {file_path}.")
            return

    except Exception as e:
        print(f"An unexpected error occurred during removal: {e}", file=sys.stderr)

def main():
    """
    Main function to parse arguments and initiate the file modification.
    """
    parser = argparse.ArgumentParser(
        description="A tool to add or remove a YAML frontmatter block to markdown files.",
        formatter_class=argparse.RawTextHelpFormatter
    )

    parser.add_argument('file_path', help='The absolute path to the markdown file to process.')

    # Action group
    action_group = parser.add_mutually_exclusive_group()
    action_group.add_argument('--remove', action='store_true', help='If set, removes the existing YAML frontmatter from the file.')

    # Arguments for adding frontmatter
    parser.add_argument('--week_num', type=int, default=1, help='Week number for the course material.')
    parser.add_argument('--epic_num', type=int, default=1, help='Epic number for the project structure.')
    parser.add_argument('--sequence', type=int, default=1, help='Sequence number within the epic or week.')
    parser.add_argument('--type', type=str, default='lecture', help='Type of content (e.g., lecture, project, reading).')
    parser.add_argument('--status', type=str, default='draft', help='Status of the document (e.g., draft, published).')
    parser.add_argument('--tldr', type=str, default='A brief summary of the content.', help='A "too long; didn\'t read" summary.')
    parser.add_argument('--course_name', type=str, default='交互产品综合创作', help='The name of the course.')

    args = parser.parse_args()

    if args.remove:
        remove_frontmatter_from_file(args.file_path)
    else:
        add_frontmatter_to_file(args.file_path, args)

if __name__ == '__main__':
    main()
