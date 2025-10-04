---
Type: "{{itemType}}" 
{%- for type, creators in creators | groupby("creatorType") -%}{% if loop.first %}
{% endif -%}{{type | replace("interviewee", "Author") | replace("director", "Author") | replace("presenter", "Author") | replace("podcaster", "Author") | replace("programmer", "Author") | replace("cartographer", "Author") | replace("inventor", "Author") | replace("sponsor", "Author")  | replace("performer", "Author") | replace("artist", "Author")}| replace("author", "Author")}}: "{%- for creator in creators -%}{%- if creator.name -%}{{creator.name}}{%- else -%}{{creator.lastName}}, {{creator.firstName}}{%- endif -%}{% if not loop.last -%}; {% endif -%}{% endfor -%}" {% if not loop.last -%}
{% endif %}{% endfor %}

{%- if title %}
Title: "{{title}}" {% endif -%}{% if publicationTitle %}
Publication: "{{publicationTitle}}" {% endif %}

{%- if date %}
Created: {{date | format("YYYY-MM-DD")}}{% endif %}

{%- if archive %}
Archive: "{{archive}}" {% endif %}

{%- if archiveLocation %}
ArchiveLocation: "{{archiveLocation}}" 
{% endif %}

Citekey: {{citekey}}
{% if tags.length > 0 %}
Tags: {%- for t in tags -%} {%- set replaced_tag = t.tag -%} {% if t.tag == "secondary" -%} {% set replaced_tag = "source/secondary" -%} {% elif t.tag == "primary" -%} {% set replaced_tag = "source/primary" -%} {%- elif "-project" in t.tag -%} {%- set replaced_tag = "project/" ~ t.tag | lower | replace(" ", "-") | replace("-project", "") -%} {%- else -%} {%- set replaced_tag = "subject/" ~ t.tag | lower | replace(" ", "-") -%} {%- endif -%} {{ "\n  - " ~ replaced_tag }} {%- endfor -%} {%- endif %}
Cite: "{{bibliography}}"
Citekey: {{citekey}}
{%- if place %}
Location:  {{place}} {% endif %}
{%- if DOI %}
DOI: "{{DOI}}" {%- endif %}

{%- if volume %}
Volume: {{volume}} {% endif %}
{%- if issue %}
Issue: {{issue}} {% endif %}
{%- if itemType == "bookSection" %}
Book: {{publicationTitle}} {% endif %}
{%- if publisher %}
Publisher: {{publisher}} {% endif %}
{%- if pages %}
Pages: {{pages}} {% endif %}

aliases:
 - "{{title}}"
 - "{{citeky}}"
---


## {{title}}



## Abstract

{%- if abstractNote %}
{{abstractNote}}
{%- endif %}

{%- set important = annotations | filterby("comment", "startswith", "important") -%}
{%- if important.length > 0 %}
[!important] Callouts
{% for annotation in important %}
{% if annotation.annotatedText %}

- {{annotation.annotatedText | replace("\\n\\n", "")}}
{% endif %}
{%- if annotation.imageRelativePath %}
- ![[{{annotation.imageRelativePath}}]]
{%- endif %}
[page {{annotation.page}}](file://{{annotation.attachment.path | replace(" ", "%20")}})
{%- endfor %}
{%- endif %}
{{"\n\n"}}


{%- if annotations.length -%}
## Annotations

[[Color-Coded Highlighting System by TJC]] 
Exported: `{{exportDate | format("YYYY-MM-DD h:mm a")}}`

{% macro calloutHeader(type, color) -%} {#- Define a macro for formatting annotation callouts -#}
{%- if type == "highlight" -%}
{%- if color == "#ffd400" -%} <mark style="background-color: {{color}}"> Intriguing </mark>
{%- elif color == "#5fb236" -%} <mark style="background-color: {{color}}"> Read </mark>
{%- elif color == "#2ea8e5" -%} <mark style="background-color: {{color}}"> Key </mark>
{%- elif color == "#a28ae5" -%} <mark style="background-color: {{color}}"> Critique </mark>
{%- elif color == "#ff6666" -%} <mark style="background-color: {{color}}"> Disagree </mark>
{%- elif color == "#f19837" -%} <mark style="background-color: {{color}}"> Revision </mark>
{%- else -%} <mark style="background-color: {{color}}">Highlight</mark>
{% endif %}
{%- elif type == "text" -%} {{"Note"}}
{% endif %}
{%- endmacro %}
{#- Filter annotations based on date -#}
{% set annots = annotations | filterby("date", "dateafter", lastExportDate) %}
{%- if annots.length > 0 -%}
{% for annot in annots -%}
{% if annot.annotatedText %}{{"\n"}} {#- 这个注释用于去除额外的换行 -#}
{{calloutHeader(annot.type, annot.color)}} {#- 这个注释用于去除额外的换行 -#}
[{{date | format("YYYY")}}, p. {{annot.pageLabel}}]({{annot.attachment.desktopURI.replace("select", "open-pdf")}}?page={{annot.page}}&annotation={{annot.id}}) `{{annot.date | format("YYYY-MM-DD#h:mm a")}}` 
{{"```\n"}}{{annot.annotatedText | replace("\n\n", "\n")}}{{"\n```"}}
{% endif %}{#- 这个注释用于去除额外的换行 -#}

{%- if annot.imageRelativePath -%} ![[{{annot.imageRelativePath}}]]{#- 这个注释用于去除额外的换行 -#}
{%- endif %}
{% if annot.comment %}{{"Comment: \n\t"}}{{annot.comment | replace("<b>", "**") | replace("</b>", "**") | replace("\n\n\n", "\n") | replace("\n\n", "\n") | replace("\n", "\n\t")}}
{% endif %}

{{"---\n"}}
{%- endfor %}
{% endif %}
{#- Other template content -#}
{% endif %}

## Attachments

{% for attachment in attachments | filterby("path", "endswith", ".pdf") %} {#- List PDF attachments -#}
 - [{{attachment.title}}](file://{{attachment.path | replace(" ", "%20")}})
{% endfor %}

{{"\n\n"}}

## Contribution
