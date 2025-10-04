import os
import sqlite3
from datetime import datetime

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
    conn = sqlite3.connect(dbpath, uri=True, detect_types=True)
    cursor = conn.cursor()

     # 执行SQL命令以获取所有集合的名称
    sql_query = """
SELECT collectionID, collectionName, parentCollectionID, clientDateModified, libraryID, key, version, synced FROM collections;
    """
    cursor.execute(sql_query)
    # 初始化一个空列表来存储所有集合的字典
    collections_list = []

    # 遍历结果并创建字典，然后将字典添加到列表中
    for row in cursor.fetchall():
        # 将每列的数据转换为指定的类型
        collection_dict = {
            'collectionID': row[0],
            'collectionName': str(row[1]),
            'parentCollectionID': row[2] if row[2] is not None else None,
            'clientDateModified': datetime.strptime(row[3], '%Y-%m-%d %H:%M:%S') if isinstance(row[3], str) else row[3],
            'libraryID': row[4],
            'key': str(row[5]),
            'version': row[6],
            'synced': row[7]
        }
        
        # 将字典添加到列表中
        collections_list.append(collection_dict)

    # 关闭Cursor和连接
    cursor.close()
    conn.close()

# 使用示例
# 假设你已经知道文献的 ID 和 Zotero 数据目录的路径
entry_id = 1446  # 替换为实际的文献 ID
zotero_datadir = '/Users/yamlam/Zotero'  # 替换为你的 Zotero 数据目录路径
pdf_path = get_zotero_pdf_attachment(entry_id, zotero_datadir)
if pdf_path:
    print(f"PDF attachment found at: {pdf_path}")
else:
    print("Could not find PDF attachment.")