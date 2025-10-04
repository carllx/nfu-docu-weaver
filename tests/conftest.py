"""
pytest configuration and fixtures for Docu-Weaver tests
"""
import pytest
from pathlib import Path
import shutil
import tempfile

@pytest.fixture
def temp_dir():
    """Create a temporary directory for test output"""
    temp_path = Path(tempfile.mkdtemp())
    yield temp_path
    # Cleanup
    shutil.rmtree(temp_path)

@pytest.fixture
def fixtures_dir():
    """Return path to test fixtures directory"""
    return Path(__file__).parent / "fixtures"

@pytest.fixture
def sample_template(fixtures_dir):
    """Return path to sample template file"""
    # Use the existing test template
    template_path = Path(__file__).parent.parent / "test_data" / "template.docx"
    if template_path.exists():
        return template_path
    # Fallback to main template
    return Path(__file__).parent.parent / "template" / "template.docx"

@pytest.fixture
def sample_data_file(fixtures_dir):
    """Return path to sample data file"""
    data_path = Path(__file__).parent.parent / "test_data" / "lesson1.yml"
    return data_path

@pytest.fixture
def sample_data_dir():
    """Return path to directory with sample data files"""
    return Path(__file__).parent.parent / "test_data" / "batch"

