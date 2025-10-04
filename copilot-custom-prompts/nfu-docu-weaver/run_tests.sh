#!/bin/bash
# Test runner script for Docu-Weaver

echo "🧪 Running Docu-Weaver Test Suite"
echo "=================================="

# Run tests with pytest
python -m pytest tests/ -v --tb=short

# Check exit code
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ All tests passed!"
else
    echo ""
    echo "❌ Some tests failed. Please check the output above."
    exit 1
fi

