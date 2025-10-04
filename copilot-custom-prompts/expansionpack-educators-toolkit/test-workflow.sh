#!/bin/bash

# 教育家工具箱工作流程测试脚本
# 版本: 1.1

set -e  # 遇到错误时退出

echo "🎓 教育家工具箱 - 工作流程测试"
echo "================================"

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 测试项目配置
TEST_PROJECT="测试课程项目"
TEST_DIR="test-workflow"

# 清理函数
cleanup() {
    echo -e "\n${YELLOW}正在清理测试环境...${NC}"
    if [ -d "$TEST_DIR" ]; then
        rm -rf "$TEST_DIR"
        echo -e "${GREEN}✅ 测试环境已清理${NC}"
    fi
}

# 设置清理陷阱
trap cleanup EXIT

# 测试函数
test_step() {
    local step_name=$1
    local command=$2
    local expected_file=$3
    
    echo -e "\n${BLUE}📋 测试步骤: $step_name${NC}"
    echo -e "${YELLOW}执行命令: $command${NC}"
    
    if eval "$command"; then
        if [ -n "$expected_file" ] && [ -f "$expected_file" ]; then
            echo -e "${GREEN}✅ 步骤完成 - 文件已生成: $expected_file${NC}"
            return 0
        elif [ -z "$expected_file" ]; then
            echo -e "${GREEN}✅ 步骤完成${NC}"
            return 0
        else
            echo -e "${RED}❌ 步骤失败 - 预期文件未找到: $expected_file${NC}"
            return 1
        fi
    else
        echo -e "${RED}❌ 步骤执行失败${NC}"
        return 1
    fi
}

# 主测试流程
main() {
    echo -e "\n${BLUE}🚀 开始测试工作流程${NC}"
    
    # 步骤1: 创建测试目录
    echo -e "\n${BLUE}📁 创建测试目录${NC}"
    mkdir -p "$TEST_DIR"
    cd "$TEST_DIR"
    echo -e "${GREEN}✅ 测试目录创建完成${NC}"
    
    # 步骤2: 初始化项目
    test_step "项目初始化" \
        "node ../cli/educators-toolkit.js init '$TEST_PROJECT' --force" \
        "docs/brief.md"
    
    # 步骤3: 生成PRD
    test_step "生成项目需求文档" \
        "node ../cli/educators-toolkit.js create-prd" \
        "docs/prd.md"
    
    # 步骤4: 生成教学大纲
    test_step "生成教学大纲" \
        "node ../cli/educators-toolkit.js create-syllabus" \
        "docs/syllabus.md"
    
    # 步骤5: 创建教学任务
    test_step "创建教学任务" \
        "node ../cli/educators-toolkit.js create-stories --weeks 4" \
        "lessons/week-01/story.md"
    
    # 步骤6: 生成详细教案
    test_step "生成详细教案" \
        "node ../cli/educators-toolkit.js create-lesson-plan --week 1" \
        "lessons/week-01/lesson-plan.md"
    
    # 步骤7: 生成幻灯片
    test_step "生成Marpit幻灯片" \
        "node ../cli/educators-toolkit.js create-slides --week 1" \
        "lessons/week-01/slides.md"
    
    # 验证文件内容
    echo -e "\n${BLUE}🔍 验证生成文件的内容质量${NC}"
    
    # 检查PRD文件
    if grep -q "项目需求文档" docs/prd.md; then
        echo -e "${GREEN}✅ PRD文件内容验证通过${NC}"
    else
        echo -e "${RED}❌ PRD文件内容验证失败${NC}"
        return 1
    fi
    
    # 检查教学大纲
    if grep -q "教学大纲" docs/syllabus.md; then
        echo -e "${GREEN}✅ 教学大纲内容验证通过${NC}"
    else
        echo -e "${RED}❌ 教学大纲内容验证失败${NC}"
        return 1
    fi
    
    # 检查教学任务
    if grep -q "教学任务" lessons/week-01/story.md; then
        echo -e "${GREEN}✅ 教学任务内容验证通过${NC}"
    else
        echo -e "${RED}❌ 教学任务内容验证失败${NC}"
        return 1
    fi
    
    # 检查教案
    if grep -q "详细教案" lessons/week-01/lesson-plan.md; then
        echo -e "${GREEN}✅ 详细教案内容验证通过${NC}"
    else
        echo -e "${RED}❌ 详细教案内容验证失败${NC}"
        return 1
    fi
    
    # 检查幻灯片
    if grep -q "marp: true" lessons/week-01/slides.md; then
        echo -e "${GREEN}✅ Marpit幻灯片格式验证通过${NC}"
    else
        echo -e "${RED}❌ Marpit幻灯片格式验证失败${NC}"
        return 1
    fi
    
    # 显示项目结构
    echo -e "\n${BLUE}📂 生成的项目结构:${NC}"
    find . -type f -name "*.md" | sort
    
    # 统计文件数量
    local total_files=$(find . -name "*.md" | wc -l)
    echo -e "\n${GREEN}📊 测试完成统计:${NC}"
    echo -e "${GREEN}✅ 成功生成 $total_files 个Markdown文件${NC}"
    
    return 0
}

# 运行测试
if main; then
    echo -e "\n${GREEN}🎉 所有测试步骤完成！工作流程验证成功！${NC}"
    echo -e "\n${BLUE}💡 使用提示:${NC}"
    echo -e "  1. 安装依赖: cd cli && npm install"
    echo -e "  2. 全局安装: npm install -g educators-toolkit-cli"
    echo -e "  3. 开始使用: educators-toolkit init 我的课程"
    exit 0
else
    echo -e "\n${RED}❌ 测试失败，请检查错误信息${NC}"
    exit 1
fi