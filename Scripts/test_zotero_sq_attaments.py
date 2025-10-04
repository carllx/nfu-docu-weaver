import os
import sqlite3

def get_zotero_pdf_attachment(entry_id, zotero_datadir):
    """
    获取 Zotero 文献的 PDF 附件路径。

    参数:
    - entry_id: 文献的 ID。
    - zotero_datadir: Zotero 数据目录的路径。

    返回:
    - PDF 文件的路径，如果附件不存在则返回 None。
    """
    # Zotero 数据库文件路径
    dbpath = os.path.join(zotero_datadir, 'zotero.sqlite')

    # 连接到 Zotero 数据库
    conn = sqlite3.connect(dbpath)
    cursor = conn.cursor()

    # 查询附件信息
    sql_query = """
    SELECT
    items.key AS key,
    itemAttachments.path AS path,
    (SELECT  itemDataValues.value
        FROM itemData
        LEFT JOIN fields
            ON itemData.fieldID = fields.fieldID
        LEFT JOIN itemDataValues
            ON itemData.valueID = itemDataValues.valueID
    WHERE itemData.itemID = items.itemID AND fields.fieldName = 'title')
    title,
    (SELECT  itemDataValues.value
        FROM itemData
        LEFT JOIN fields
            ON itemData.fieldID = fields.fieldID
        LEFT JOIN itemDataValues
            ON itemData.valueID = itemDataValues.valueID
    WHERE itemData.itemID = items.itemID AND fields.fieldName = 'url')
    url
FROM itemAttachments
    LEFT JOIN items
        ON itemAttachments.itemID = items.itemID
WHERE itemAttachments.parentItemID = ?
    """
    cursor.execute(sql_query, (entry_id,))
    result = cursor.fetchone()

    if result:
        # 解析附件路径
        path, key = result
        # 假设附件存储在 Zotero 的 'storage' 目录下
        storage_dir = os.path.join(zotero_datadir, 'storage')
        # 构建 PDF 文件的完整路径
        pdf_path = os.path.join(storage_dir, key, path)
        if os.path.exists(pdf_path):
            return pdf_path  # 返回 PDF 文件的路径
        else:
            print(f"PDF attachment path does not exist: {pdf_path}")
    else:
        print("No PDF attachment found for this entry.")

    conn.close()
    return None

# 使用示例
# 假设你已经知道文献的 ID 和 Zotero 数据目录的路径
entry_id = 1446  # 替换为实际的文献 ID
zotero_datadir = '/Users/yamlam/Zotero'  # 替换为你的 Zotero 数据目录路径
pdf_path = get_zotero_pdf_attachment(entry_id, zotero_datadir)
if pdf_path:
    print(f"PDF attachment found at: {pdf_path}")
else:
    print("Could not find PDF attachment.")