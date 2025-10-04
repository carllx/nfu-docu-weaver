# Agile Mentorship System for Graduation Projects Brownfield Architecture Document

## Introduction

This document captures the CURRENT STATE of the Agile Mentorship System codebase, including technical debt, workarounds, and real-world patterns. It serves as a reference for AI agents working on enhancements.

### Document Scope

Comprehensive documentation of entire system based on PRD V2.0 and architecture documentation.

### Change Log

| Date | Version | Description | Author |
| ---- | ------- | ----------- | ------ |
| 2026-09-01 | 1.0 | Initial brownfield analysis | BMad Master |

## Quick Reference - Key Files and Entry Points

### Critical Files for Understanding the System

- **Main Configuration**: `config/system_config.md` (defines academic year variables and track requirements)
- **Central Index**: `docs/cohort_registry.md` (maintains all entities and their relationships)
- **Core Documentation**: `docs/prd.md`, `docs/architecture.md`
- **System Integrity**: `docs/system_integrity_checklist.md`
- **Agent Definitions**: `.bmad-core/agents/` (contains agent configurations like bmad-master.md, analyst.md)

## High Level Architecture

### Technical Summary

The system implements an innovative "Docs-as-Database" architecture with no traditional backend or database. All data and state are maintained through AI agents directly reading and writing Markdown files in the project repository. The system is driven by an external configuration file, making it highly reusable and maintainable.

### Actual Tech Stack

| Category | Technology | Version | Notes |
| -------- | ---------- | ------- | ----- |
| Architecture | Docs-as-Database | N/A | No traditional backend or database |
| File Format | Markdown | N/A | All data stored as structured Markdown |
| Agent Framework | BMAD™ Core | N/A | AI agent system for task execution |
| Version Control | Git | N/A | Monorepo structure for all files |

### Repository Structure Reality Check

- Type: Monorepo
- Package Manager: N/A (not a traditional code project)
- Notable: All state maintained through Markdown files, no build process or deployment pipeline

## Source Tree and Module Organization

### Project Structure (Actual)

```text
project-root/
├── .bmad-core/               # BMAD agent framework
│   ├── agents/               # Agent definitions
│   │   ├── analyst.md        # Business Analyst agent
│   │   ├── bmad-master.md    # Master Task Executor agent
│   │   └── ...               # Other agents
│   ├── tasks/                # Executable task workflows
│   ├── templates/            # Document templates
│   └── ...                   # Other BMAD core components
├── config/
│   └── system_config.md      # Academic year configuration
├── docs/
│   ├── prd.md                # Product Requirements Document
│   ├── architecture.md       # System Architecture
│   ├── cohort_registry.md    # Central index of all entities
│   ├── system_integrity_checklist.md # System integrity validation
│   └── ...                   # Other documentation
└── cohort_data/              # Entity data (TO BE CREATED)
    ├── students/             # Student entities
    ├── creative_projects/   # Creative project entities
    └── theses/              # Thesis entities
```

### Key Modules and Their Purpose

- **BMAD Core Framework**: `.bmad-core/` - Provides the agent system and task execution framework
- **System Configuration**: `config/system_config.md` - Defines all academic year variables and track requirements
- **Central Registry**: `docs/cohort_registry.md` - Maintains all entities and their relationships
- **Core Documentation**: `docs/prd.md`, `docs/architecture.md` - Define system requirements and architecture

## Data Models and APIs

### Data Models

The system defines three core entities, each stored as individual Markdown files:

- **Student Entity**
  - ID Format: `S_YYYY_##` (e.g., `S_2026_01`)
  - File Path: `cohort_data/students/[ID_Name].md`
  - Core Attributes: `student_id`, `name`, `contact`, `psychological_analysis`, `status`, `feedback_log`

- **Creative Project Entity**
  - ID Format: `CP_YYYY_A##` (e.g., `CP_2026_A01`)
  - File Path: `cohort_data/creative_projects/[ID_Name].md`
  - Core Attributes: `project_id`, `title`, `track`, `members`, `progress`, `feedback_log`

- **Thesis Entity**
  - ID Format: `T_YYYY_##` (e.g., `T_2026_01`)
  - File Path: `cohort_data/theses/[ID_Name].md`
  - Core Attributes: `thesis_id`, `title`, `author`, `progress`, `feedback_log`

### API Specifications

No traditional APIs. The system uses command-driven interactions through AI agents with format `*agent command --flag value`.

## Technical Debt and Known Issues

### Critical Technical Debt

1. **Missing Entity Data Files**: The `cohort_data/` directory and its subdirectories do not exist yet, meaning no actual entity files have been created despite being registered in the central registry.
2. **No Implementation of Core Workflows**: While the architecture defines workflows like the feedback loop, there's no actual implementation of these automated processes.
3. **Limited Agent Coverage**: Only a few agents (analyst, bmad-master) have been defined, but the system requires additional agents like pm (Product Manager) and po (Product Owner) as referenced in the documentation.
4. **Missing Templates**: The system references templates like `feedback-report.md` but these are not yet implemented.

### Workarounds and Gotchas

- **Manual Registry Updates**: Currently, the central registry must be manually updated as the PO agent commands are not yet implemented.
- **No Automated Integrity Checks**: The system integrity checklist exists but there's no automated process to run it.
- **Configuration-Driven Not Fully Implemented**: While the configuration file exists, the system doesn't fully utilize it to drive behavior yet.

## Integration Points and External Dependencies

### External Services

No external services are currently integrated. The system is entirely self-contained within the repository.

### Internal Integration Points

- **Agent System**: All functionality is implemented through BMAD agents that read and write Markdown files.
- **Central Registry**: The `docs/cohort_registry.md` serves as the integration point between all entities and agents.
- **Configuration System**: The `config/system_config.md` drives system behavior, particularly for academic year-specific variables.

## Development and Deployment

### Local Development Setup

1. No traditional development setup required as this is not a code-based system.
2. All work is done through AI agents in an AI IDE environment.
3. No environment variables or build processes needed.

### Build and Deployment Process

- No build process exists.
- No deployment process exists as the system is entirely file-based.
- All changes are made directly to Markdown files and committed to version control.

## Testing Reality

### Current Test Coverage

- No automated tests exist.
- System integrity is validated manually through `docs/system_integrity_checklist.md`.
- No unit, integration, or E2E tests are implemented.

### Running Tests

No test commands exist. Testing is performed manually by validating the system against the integrity checklist.

## Appendix - Useful Commands and Scripts

### Frequently Used Commands

Based on the PRD and architecture documentation, the following commands should be implemented:

- `*po add-entity --type student` - Register a new student
- `*po add-entity --type creative-project` - Register a new creative project
- `*po add-entity --type thesis` - Register a new thesis
- `*po update-status --entity-id [ID] --status [NewStatus]` - Update entity status
- `*po generate-progress-report` - Generate global progress report
- `*pm create-doc student-feedback --entity-id [ID]` - Create feedback report
- `*analyst brainstorm` - Facilitate structured brainstorming session

### Debugging and Troubleshooting

- **Logs**: No logging system implemented.
- **Debug Mode**: No debug mode available.
- **Common Issues**: 
  - Missing entity data files in `cohort_data/`
  - Incomplete agent implementations
  - Manual registry updates required
