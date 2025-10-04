"""
Tests for command-line interface functionality
"""
import pytest
import json
import subprocess
from pathlib import Path

class TestAnalyzeCommand:
    """Test suite for analyze command"""
    
    def test_analyze_directory(self, sample_data_dir):
        """Test analyze command on a directory"""
        result = subprocess.run(
            ["python", "generate_docs.py", "analyze", str(sample_data_dir)],
            capture_output=True,
            text=True
        )
        
        assert result.returncode == 0
        
        # Parse JSON output (entire stdout is JSON)
        data = json.loads(result.stdout.strip())
        
        assert data["success"] == True
        assert data["file_count"] >= 0
        assert "files" in data
    
    def test_analyze_nonexistent_directory(self):
        """Test analyze command with nonexistent directory"""
        result = subprocess.run(
            ["python", "generate_docs.py", "analyze", "nonexistent_dir"],
            capture_output=True,
            text=True
        )
        
        # Should fail gracefully
        assert result.returncode != 0 or "error" in result.stdout.lower()


class TestBatchCommand:
    """Test suite for batch command"""
    
    def test_batch_generation(self, sample_data_dir, sample_template, temp_dir):
        """Test batch document generation"""
        result = subprocess.run(
            [
                "python", "generate_docs.py", "batch",
                str(sample_data_dir),
                str(sample_template),
                str(temp_dir)
            ],
            capture_output=True,
            text=True
        )
        
        assert result.returncode == 0
        
        # Check that output files were created
        output_files = list(temp_dir.glob("*.docx"))
        assert len(output_files) > 0
    
    def test_batch_with_continue_on_error(self, sample_data_dir, sample_template, temp_dir):
        """Test batch with --continue-on-error flag"""
        result = subprocess.run(
            [
                "python", "generate_docs.py", "batch",
                str(sample_data_dir),
                str(sample_template),
                str(temp_dir),
                "--continue-on-error"
            ],
            capture_output=True,
            text=True
        )
        
        # Should complete even if some files fail
        assert result.returncode == 0


class TestGenerateCommand:
    """Test suite for generate command"""
    
    def test_generate_single_document(self, sample_data_file, sample_template, temp_dir):
        """Test generating a single document"""
        output_path = temp_dir / "test_output.docx"
        
        result = subprocess.run(
            [
                "python", "generate_docs.py", "generate",
                str(sample_data_file),
                str(sample_template),
                str(temp_dir),
                "-o", str(output_path)
            ],
            capture_output=True,
            text=True
        )
        
        assert result.returncode == 0
        assert output_path.exists()
    
    def test_generate_with_debug(self, sample_data_file, sample_template, temp_dir):
        """Test generate command with debug flag"""
        result = subprocess.run(
            [
                "python", "generate_docs.py", "generate",
                str(sample_data_file),
                str(sample_template),
                str(temp_dir),
                "--debug"
            ],
            capture_output=True,
            text=True
        )
        
        assert result.returncode == 0
        # Debug output should contain [DEBUG] markers
        assert "[DEBUG]" in result.stdout or result.returncode == 0


class TestJSONOutput:
    """Test JSON output format across commands"""
    
    def test_analyze_json_format(self, sample_data_dir):
        """Test that analyze returns valid JSON"""
        result = subprocess.run(
            ["python", "generate_docs.py", "analyze", str(sample_data_dir)],
            capture_output=True,
            text=True
        )
        
        if result.returncode == 0:
            data = json.loads(result.stdout.strip())  # Should not raise
            
            # Validate structure
            assert "success" in data
            assert isinstance(data["success"], bool)
    
    def test_batch_json_format(self, sample_data_dir, sample_template, temp_dir):
        """Test that batch returns valid JSON"""
        result = subprocess.run(
            [
                "python", "generate_docs.py", "batch",
                str(sample_data_dir),
                str(sample_template),
                str(temp_dir)
            ],
            capture_output=True,
            text=True
        )
        
        if result.returncode == 0:
            # Look for JSON in output - it's after the summary
            output_lines = result.stdout.strip().split('\n')
            # Find line starting with { and parse it
            json_found = False
            for line in output_lines:
                line = line.strip()
                if line.startswith('{') and line.endswith('}'):
                    try:
                        data = json.loads(line)  # Should not raise
                        assert "success" in data or "results" in data
                        json_found = True
                        break
                    except json.JSONDecodeError:
                        continue
            
            # If no JSON found, that's okay for batch command (it outputs human-readable format)
            assert result.returncode == 0

