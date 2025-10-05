#!/bin/bash

# ===================================================================
#           SchemaValidator Test Runner Script
#     Story 2.7 - Schema-Driven Validation Testing
# ===================================================================

set -e  # Exit on error

echo "🧪 ===== SchemaValidator Test Suite ====="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Parse arguments
RUN_MODE=${1:-"quick"}  # quick, full, coverage, all

echo -e "${BLUE}📊 Test Mode: ${RUN_MODE}${NC}"
echo ""

# Function to run tests
run_tests() {
    local test_cmd=$1
    local description=$2
    
    echo -e "${YELLOW}▶ ${description}${NC}"
    echo ""
    
    if eval "$test_cmd"; then
        echo ""
        echo -e "${GREEN}✅ ${description} - PASSED${NC}"
        echo ""
        return 0
    else
        echo ""
        echo -e "${RED}❌ ${description} - FAILED${NC}"
        echo ""
        return 1
    fi
}

# Main test execution
case $RUN_MODE in
    "quick")
        echo "🚀 Running Quick Tests (excludes slow tests)"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        
        run_tests \
            "pytest tests/test_schema_validator.py -m 'not slow' -v" \
            "Quick Unit Tests"
        ;;
    
    "full")
        echo "🔍 Running Full Test Suite"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        
        run_tests \
            "pytest tests/test_schema_validator.py -v" \
            "All Unit Tests (including performance)"
        
        run_tests \
            "pytest tests/integration/test_schema_validation_flow.py -v" \
            "Integration Tests"
        ;;
    
    "coverage")
        echo "📈 Running Tests with Coverage Analysis"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        
        run_tests \
            "pytest tests/ --cov=generate_docs --cov-report=term --cov-report=html -v" \
            "Full Test Suite with Coverage"
        
        echo ""
        echo -e "${GREEN}📊 Coverage report generated: htmlcov/index.html${NC}"
        echo ""
        ;;
    
    "all")
        echo "🎯 Running Complete Test Suite"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        
        # 1. Quick tests
        run_tests \
            "pytest tests/test_schema_validator.py -m 'not slow' -v" \
            "Phase 1: Quick Unit Tests"
        
        # 2. Performance tests
        run_tests \
            "pytest tests/test_schema_validator.py -m 'slow' -v" \
            "Phase 2: Performance Tests"
        
        # 3. Integration tests
        run_tests \
            "pytest tests/integration/test_schema_validation_flow.py -v" \
            "Phase 3: Integration Tests"
        
        # 4. Coverage report
        run_tests \
            "pytest tests/ --cov=generate_docs --cov-report=term --cov-report=html" \
            "Phase 4: Coverage Analysis"
        
        echo ""
        echo -e "${GREEN}📊 Coverage report generated: htmlcov/index.html${NC}"
        echo ""
        ;;
    
    "parallel")
        echo "⚡ Running Tests in Parallel"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        
        run_tests \
            "pytest tests/ -n auto -v" \
            "Parallel Test Execution"
        ;;
    
    "report")
        echo "📄 Running Tests with HTML Report"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        
        run_tests \
            "pytest tests/ --html=test_report.html --self-contained-html -v" \
            "Tests with HTML Report"
        
        echo ""
        echo -e "${GREEN}📄 Test report generated: test_report.html${NC}"
        echo ""
        ;;
    
    *)
        echo -e "${RED}❌ Unknown test mode: ${RUN_MODE}${NC}"
        echo ""
        echo "Usage: $0 [mode]"
        echo ""
        echo "Available modes:"
        echo "  quick     - Run quick tests (excludes slow tests) [DEFAULT]"
        echo "  full      - Run all unit and integration tests"
        echo "  coverage  - Run tests with coverage analysis"
        echo "  all       - Run complete test suite (all phases)"
        echo "  parallel  - Run tests in parallel (faster)"
        echo "  report    - Run tests and generate HTML report"
        echo ""
        echo "Examples:"
        echo "  $0           # Run quick tests (default)"
        echo "  $0 full      # Run full test suite"
        echo "  $0 coverage  # Run with coverage"
        echo "  $0 all       # Run everything"
        echo ""
        exit 1
        ;;
esac

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✅ Test Execution Complete!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Additional info
if [ "$RUN_MODE" = "coverage" ] || [ "$RUN_MODE" = "all" ]; then
    echo -e "${BLUE}📊 To view coverage report:${NC}"
    echo "   open htmlcov/index.html"
    echo ""
fi

if [ "$RUN_MODE" = "report" ]; then
    echo -e "${BLUE}📄 To view test report:${NC}"
    echo "   open test_report.html"
    echo ""
fi

echo -e "${BLUE}💡 Tips:${NC}"
echo "   • Use './run_schema_tests.sh quick' for fast feedback"
echo "   • Use './run_schema_tests.sh coverage' to check test coverage"
echo "   • Use './run_schema_tests.sh all' before submitting PR"
echo ""

