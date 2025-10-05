# 🧪 Docu-Weaver Test Suite

Complete test suite for the Docu-Weaver project.

---

## 📁 Test Structure

```
tests/
├── __init__.py                           # Test package init
├── conftest.py                           # Pytest configuration & fixtures
├── pytest.ini                            # Pytest settings (in project root)
│
├── test_cli.py                           # CLI interface tests
├── test_generator.py                     # Document generator tests
├── test_validator.py                     # DataValidator tests (legacy)
├── test_schema_validator.py              # SchemaValidator tests (NEW - Story 2.7)
│
├── integration/                          # Integration tests
│   └── test_schema_validation_flow.py    # E2E validation flow (NEW - Story 2.7)
│
└── fixtures/                             # Test fixtures & data
    ├── test_data.yml                     # Test data scenarios (NEW)
    └── test_schemas.yml                  # Test schema configs (NEW)
```

---

## 🚀 Running Tests

### Quick Start

```bash
# Run all tests
pytest

# Run with verbose output
pytest -v

# Run specific test file
pytest tests/test_schema_validator.py

# Run with coverage
pytest --cov=generate_docs --cov-report=html
```

### SchemaValidator Tests (Story 2.7)

```bash
# Quick tests (excludes slow performance tests)
./run_schema_tests.sh quick

# Full test suite
./run_schema_tests.sh full

# With coverage analysis
./run_schema_tests.sh coverage

# Complete test suite (all phases)
./run_schema_tests.sh all
```

---

## 📊 Test Categories

### Unit Tests

| Test File | Tests | Purpose |
|-----------|-------|---------|
| `test_cli.py` | CLI | Command-line interface |
| `test_generator.py` | Generator | Document generation logic |
| `test_validator.py` | DataValidator | Legacy validation (template-based) |
| `test_schema_validator.py` | **SchemaValidator** | **Schema-driven validation (NEW)** |

### Integration Tests

| Test File | Tests | Purpose |
|-----------|-------|---------|
| `test_schema_validation_flow.py` | **E2E Flow** | **Complete validation workflow (NEW)** |

---

## 🎯 Test Coverage

### Current Coverage Targets

| Module | Target | Status |
|--------|--------|--------|
| `generate_docs.py` | > 80% | ✅ |
| `SchemaValidator` | > 85% | ⏳ (Story 2.7) |
| Overall | > 75% | ✅ |

### Viewing Coverage

```bash
# Generate HTML coverage report
pytest --cov=generate_docs --cov-report=html

# Open in browser
open htmlcov/index.html
```

---

## 📝 Test Markers

Tests can be marked with the following markers:

```python
@pytest.mark.slow           # Slow-running tests (e.g., performance)
@pytest.mark.integration    # Integration tests
@pytest.mark.unit           # Unit tests
```

### Using Markers

```bash
# Skip slow tests
pytest -m "not slow"

# Run only integration tests
pytest -m integration

# Run only unit tests
pytest -m unit
```

---

## 🧩 Fixtures

Common fixtures available in all tests (defined in `conftest.py`):

| Fixture | Type | Description |
|---------|------|-------------|
| `temp_dir` | Path | Temporary directory (auto-cleanup) |
| `fixtures_dir` | Path | Path to test fixtures directory |
| `sample_template` | Path | Sample template file |
| `sample_data_file` | Path | Sample lesson data file |
| `sample_data_dir` | Path | Directory with batch data files |
| `schema_file` | Path | Main schema file |
| `test_schemas_file` | Path | Test schemas fixture |
| `test_data_file` | Path | Test data fixture |

### Using Fixtures

```python
def test_example(temp_dir, sample_data_file):
    """Test using fixtures"""
    # temp_dir is automatically created and cleaned up
    # sample_data_file points to test_data/lesson1.yml
    pass
```

---

## 🐛 Testing Best Practices

### 1. Test Naming

```python
# Good - descriptive and specific
def test_validate_file_missing_required_field():
    pass

# Bad - vague
def test_validate():
    pass
```

### 2. Test Structure (AAA Pattern)

```python
def test_something():
    # Arrange - Setup test data
    validator = SchemaValidator()
    
    # Act - Execute the code under test
    result = validator.validate_file("test.yml")
    
    # Assert - Verify the results
    assert result.is_valid == True
```

### 3. Test Independence

- Each test should be independent
- Use fixtures for setup/teardown
- Don't rely on test execution order

### 4. Use Descriptive Assertions

```python
# Good - clear failure message
assert result.is_valid == True, f"Expected valid, got {result.errors}"

# Better - using pytest's rich comparison
assert result.is_valid
assert len(result.errors) == 0
```

---

## 📚 Test Documentation

### Detailed Test Documentation

- **Test Strategy**: `docs/QA_TEST_PREP_STORY_2.7.md`
- **Quick Start**: `docs/QA_QUICK_START.md`
- **Design Reference**: `docs/architecture/schema-validator-design.md`

### Test Data

- **Test Schemas**: `tests/fixtures/test_schemas.yml`
  - Minimal valid schema
  - Complete schema
  - Schema with optional fields
  - Deeply nested schema
  - Complex list schema
  - Version test schemas
  - Invalid schemas (for error testing)

- **Test Data**: `tests/fixtures/test_data.yml`
  - Valid data scenarios
  - Missing required fields
  - Type mismatches
  - Extra fields
  - Invalid nested structures
  - Edge cases
  - Unicode and special characters
  - Batch test datasets

---

## 🔧 Troubleshooting

### Common Issues

**Tests not found**
```bash
# Make sure you're in project root
cd /path/to/nfu-docu-weaver

# Verify test discovery
pytest --collect-only
```

**Import errors**
```bash
# Ensure project root is in PYTHONPATH
export PYTHONPATH=/path/to/nfu-docu-weaver:$PYTHONPATH

# Or install in development mode
pip install -e .
```

**Fixtures not found**
```bash
# Check conftest.py is in tests/ directory
ls tests/conftest.py

# Verify pytest is loading it
pytest --fixtures
```

---

## 📈 Continuous Integration

Tests are automatically run on:
- Pull requests
- Commits to main branch
- Before releases

### CI Configuration

```yaml
# Example CI command
pytest tests/ \
  --cov=generate_docs \
  --cov-report=xml \
  --cov-report=term \
  -v
```

---

## 🎯 Quality Gates

Before merging code, ensure:

- [ ] All tests pass (100%)
- [ ] Coverage > 75% (overall)
- [ ] Coverage > 85% (new code - SchemaValidator)
- [ ] No P0/P1 bugs
- [ ] Performance benchmarks met

---

## 📞 Support

For testing questions or issues:

1. Check test documentation: `docs/QA_TEST_PREP_STORY_2.7.md`
2. Review quick start: `docs/QA_QUICK_START.md`
3. Contact QA Engineer

---

**Last Updated**: 2025-10-04  
**Test Framework Version**: v1.4.0  
**Status**: ✅ Ready for Story 2.7 Testing

