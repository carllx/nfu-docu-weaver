# 🧪 QA Quick Start Guide - Story 2.7

**Quick Reference for Testing SchemaValidator**

---

## ⚡ Quick Commands

```bash
# Run quick tests (5 min)
./run_schema_tests.sh quick

# Run full test suite (15 min)
./run_schema_tests.sh full

# Run with coverage (20 min)
./run_schema_tests.sh coverage

# Run everything (30 min)
./run_schema_tests.sh all
```

---

## 📁 Test Files

| File | Purpose | Tests |
|------|---------|-------|
| `tests/test_schema_validator.py` | Unit tests | 40+ |
| `tests/integration/test_schema_validation_flow.py` | Integration tests | 17+ |
| `tests/fixtures/test_data.yml` | Test data | 20+ scenarios |
| `tests/fixtures/test_schemas.yml` | Test schemas | 10+ configs |

---

## ✅ Test Checklist

### Before Testing
- [ ] Developer has completed implementation
- [ ] Remove `pass` and `TODO` from test functions
- [ ] Update test imports if needed

### During Testing
- [ ] Run quick tests first
- [ ] Fix any failing tests
- [ ] Run full test suite
- [ ] Check coverage (> 85%)
- [ ] Run performance tests

### After Testing
- [ ] Document any bugs found
- [ ] Update test report
- [ ] Verify all P0 tests pass
- [ ] Sign off on quality

---

## 🎯 Success Criteria

| Metric | Target | Status |
|--------|--------|--------|
| Unit tests passed | 100% | ⏳ |
| Integration tests passed | 100% | ⏳ |
| Code coverage | > 85% | ⏳ |
| Performance tests | All meet targets | ⏳ |
| P0 tests | 100% pass | ⏳ |

---

## 📊 Coverage Targets

```python
SchemaValidator.__init__          → 100%
SchemaValidator.load_schema       → > 90%
SchemaValidator.extract_rules     → > 90%
SchemaValidator.validate_file     → > 85%
SchemaValidator.validate_batch    → > 85%
ValidationResult/ValidationError  → 100%
```

---

## 🐛 Bug Reporting Template

```markdown
**Bug Title**: [Concise description]

**Priority**: P0 / P1 / P2 / P3

**Test Case**: `test_xxx`

**Steps to Reproduce**:
1. ...
2. ...

**Expected**: ...
**Actual**: ...

**Environment**:
- Python: 3.x
- OS: ...

**Logs**:
```
[paste error logs]
```
```

---

## 💡 Tips

1. **Start with quick tests** - Fast feedback loop
2. **Use verbose mode** - `pytest -v` for detailed output
3. **Check one file at a time** - Easier to debug
4. **Use markers** - `-m "not slow"` to skip slow tests
5. **Run parallel** - Use `-n auto` for speed

---

## 📞 Contact

- **Full Documentation**: `docs/QA_TEST_PREP_STORY_2.7.md`
- **Design Reference**: `docs/architecture/schema-validator-design.md`
- **Help**: Ask QA Engineer

---

**Last Updated**: 2025-10-04  
**Status**: ✅ Ready for Testing

