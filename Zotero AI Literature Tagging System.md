[[Projects]] 
AI Thematic Tagging System for Literature Management onZotero
文献管理人工智能综合主题标签系统
![150|](https://i.imgur.com/oGJcHqr.png)

## runjs script
```javascript

async function saveFile(directory, result){
    const filename = 'papers.json'
    const filePath = OS.Path.join(directory, filename);
    // const exists = await OS.File.exists(directory)
    await IOUtils.write(filePath, new TextEncoder().encode(result));
}

async function readFile(filePath){
    
    let buf = await IOUtils.read(filePath);
	buf = new Uint8Array(buf).buffer;
	// Convert the ArrayBuffer to a string
    let stringData = new TextDecoder().decode(buf);
    const jsonData = JSON.parse(stringData);
    return jsonData;
}

function generateJSON(items) {
  const jsonItems = items.map(item => ({
    "title": item.getField('title'),
    "id": item.getField('id'),
    "date": item.getField('date'),
    "abstract": item.getField('abstractNote'),
  }));

  return JSON.stringify(jsonItems);
}


async function removeTagsFromZoteroItems(uniqueTags, ZoteroItems) {
    await Promise.all(ZoteroItems.map(async item => {
      const itemTags = item.getTags().map(tag => tag.tag);
      uniqueTags.forEach(async uniqueTag => {
        if (itemTags.includes(`#${uniqueTag}`)) {
          item.removeTag(`#${uniqueTag}`);
          // Optionally, save the item if required
          await item.saveTx();
        }
      });
    }));
    alert('Removed!');
  }


  async function extractUniqueTags(filePath) {
    return await readFile(filePath)
      .then(data => data.reduce((tagGroup, item) => {
        item.tags.forEach(tag => tagGroup.add(tag));
        return tagGroup;
      }, new Set()))
      .then(tagGroup => Array.from(tagGroup));
  }

async function addTagsToZoteroEntries(PathTags) {
    const items = await readFile(PathTags);
  
    return new Promise((resolve, reject) => {
      items.forEach(item => {
        const paperEntry = Zotero.Items.get(item.id);
        item.tags.forEach(tag => {
          paperEntry.addTag("#" + tag);
        });
        paperEntry.saveTx().then(resolve).catch(reject); // Save all entries sequentially within the loop
      });
    });
  }


// // 1.
// // const PathTags = '/Users/yamlam/Downloads/tag_with_topics.json'; 
// const PathExport = 'E:\\Download\\papers.json';
// exportSelectedPapers(PathExport)

// 2.  Analizer groups and generate Tags via GPT ... 'tag_with_topics.json'

// 3. Set Tags on every papers selected. 
const PathTags = "E:\\Download\\tagged_papers.json";
// Call the function asynchronously 
addTagsToZoteroEntries(PathTags).then(() => alert('Sucessed!'));

// // 4. remove
// (async () => {
//     const PathTags = 'E:\\Download\\tag_with_topics.json';
//     const uniqueTags = await extractUniqueTags(PathTags);
//     const ZoteroItems = Zotero.getActiveZoteroPane().getSelectedItems(); // Get selected Zotero items
//     // Call the function asynchronously
//     removeTagsFromZoteroItems(uniqueTags, ZoteroItems).then(() => console.log('Success!'));
//   })();


  
```

## prompt

### generate groups
[[Prompt - Zotero AI Literature Tagging System]]

先分组
```markdown
As you are an expert in information categorization and knowledge synthesis.  You will use thematic analysis to classify {{the papers, which I will provide you with next}} into coherent groups. Show me {{the minimal amount of}} proposed groups based on the common themes observed. Help me to manage a significant amount of paperwork. 

These papers are centered around {{Volumetric Media or cloudpoint  influence on creativity of artists, focusing on the application of volumetric media in recording spatially-oriented courses like sculpture and dance, we'll concentrate on how this technology enhances the learning and viewing experience from multiple perspectives. This specific use case involves aspects of 3D reconstruction, immersive learning, and interactive viewing.}} 
```

## generate tags with Json


```markdown
As you are an expert in information categorization and knowledge synthesis.         

**Your objective:** 

Develop a comprehensive tagging system to categorise a collection of research papers based on thematic analysis. The tagging system should enable nuanced and efficient information retrieval.

**Your tasks:**

1. **Thorough Thematic Analysis:** Perform a rigorous and deep analysis of "papers.json" to identify key themes, concepts, and relevant information within each paper. This might involve techniques like keyword extraction, sentiment analysis, and topic modeling.
2. **Comprehensive Tag Design:** Based on the analysis, design a set of exhaustive and nuanced tags that effectively capture the diverse topics and information present in every paper. Use a combination of specific and general tags to strike a balance between granularity and comprehensiveness.
3. **Accurate Tag Assignment:** Utilize your understanding of the papers and the designed tagging system to meticulously assign relevant tags to each paper. Employ a rule-based or machine learning approach to ensure consistency and accuracy in tag application.
4. **No-Omission Output:** Generate a "tag.json" file in the following format:[ { "id": <paper_id>, "tags": ["<tag_1>", "<tag_2>", ..., "<tag_n>"] }, { "id": <paper_id>, "tags": ["<tag_1>", "<tag_2>", ..., "<tag_n>"] }, ... ], guaranteeing that every entry has at least one tag. If a paper truly lacks discernible themes or lacks sufficient information for clear tagging, consider assigning a generic "uncategorized" tag or indicating the reason for no specific tags in a separate field. ensuring zero omissions.

**Additional Considerations:**

Granularity: Aim for tag sets that are rich enough to facilitate nuanced information retrieval but avoid unnecessary redundancy.
Tag Relevance: Ensure each tag accurately reflects the content of the associated paper.
Adaptability: Design the tagging system to be extensible and adaptable to accommodate new papers or revisions to existing ones.

```


