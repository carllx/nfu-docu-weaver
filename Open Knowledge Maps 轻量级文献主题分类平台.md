Extract  knowledge map data Online.

(-- `Open Knowledge Maps - A visual interface to the world's scientific knowledge` [openknowledgemaps](https://openknowledgemaps.org/))
![|200](https://openknowledgemaps.org/img/cardfb.png)

## countPaperPublicationsByArea
An array of objects, shown total number of papers published in each area where each object has two properties:
- `area`: The name of the area.
- `paperCount`: The number of papers published in that area.

```javascript
function countPaperPublicationsByArea(data) {
  // Create an object to keep track of the area count
  const areaCounts = {};

  // Iterate over each item in the data array
  data.forEach(item => {
    // Get the area of the current item
    const area = item.area;

    // If the area is already in the areaCounts object, increment the count, otherwise set it to 1
    if (areaCounts[area]) {
      areaCounts[area]++;
    } else {
      areaCounts[area] = 1;
    }
  });

  // Create an array to hold the result objects
  const result = Object.entries(areaCounts).map(([area, count]) => ({
    area: area,
    paperCount: count
  }));

  // Sort the result array based on paperCount in descending order
  result.sort((a, b) => b.paperCount - a.paperCount);

  // Return the sorted array of objects
  return result;
}
```


## countPaperPublicationsByYearAndArea

A array to calculated the number of papers published in each area for every year and sorts the results by year from earliest to latest.
An array where each element is an object with:
- `year`: The year for which the paper counts are reported.
- `areas`: An array of objects, each representing an area with a property for the 'area' name and the 'paperCount' for that year.

```javascript
function countPapersByYearAndArea(data) {
  // Create an object to hold the year, area, and paper count
  const yearAreaCount = {};

  // Iterate over each item in the data array
  data.forEach(item => {
    const year = item.year;
    const area = item.area;

    // Initialize the year object if it doesn't exist
    if (!yearAreaCount[year]) {
      yearAreaCount[year] = {};
    }

    // Increment the count for the area or initialize it
    if (yearAreaCount[year][area]) {
      yearAreaCount[year][area]++;
    } else {
      yearAreaCount[year][area] = 1;
    }
  });

  // Convert the yearAreaCount object into a sorted array of { year, areas } objects
  const result = Object.keys(yearAreaCount).sort().map(year => {
    const areas = Object.entries(yearAreaCount[year]).map(([area, count]) => ({
      area: area,
      paperCount: count
    }));

    return {
      year: year,
      areas: areas
    };
  });

  // Return the sorted array
  return result;
}

// Example usage:
const data = [
  // ... array of objects with the structure provided
];
```



Prompt
```markdown
As you are an expert in data analysis and Accademic Reserch trends. Your expertise in data analysis and academic research trends is ready to assist user in uncovering the hidden story within ${TOPIC}. Let's embark on a journey to dissect research publication data, illuminating the field's evolution and pinpointing its current focal points.

**1. Analyzing Overall Trends and Drawing Insights:**

- **Purpose:** Discover the most researched topics within ${TOPIC}, their evolution over time, and draw insights into the field's key trends and future potential.
- **Data:** `${dataAreasFileName}`, Array containing research areas with paper counts and titles. Array<{ area: string, paperCount: number, papers: Array< string >} >
    
- **Tasks:**
    
    1. Analyze `${dataAreasFileName}` to determine the total number of papers published in each research area.
    2. Identify the top 5 areas with the highest number of papers.
    3. For each of those top areas:
        
        - Extract common keywords and themes from the paper titles.
        - Identify any notable sub-areas or specializations.
        - **Draw insights:**
            
            - Summarize key trends in research focus and applications.
            - Identify potential drivers of innovation and change.
            - Highlight emerging opportunities and challenges.
            
        
    

**2. Yearly Trend Analysis and Insights:**

- **Purpose:** Track shifts in research focus over time and draw insights into factors influencing these trends.
- **Data:**
    
    - `${dataYearsFileName}`: Array containing research areas with paper counts for each year. Array<{ year: string, areas: Array<{ area: string, paperCount: number, }> }>
    
- **Tasks:**
    
    1. Analyze `${dataYearsFileName}` to create a visual representation (e.g., line graph) showing the number of papers published in each area for each year, from ${EarliestYear} to ${_formatTodayDate()}.
    2. Identify areas that have seen significant growth or decline in research activity.
    3. For areas with notable changes:
        
        - Analyze paper titles to identify potential reasons for shifts in focus.
        - **Draw insights:**
            
            - Explain the factors driving changes in research focus.
            - Discuss implications for the future direction of ${TOPIC} research.
            - Anticipate potential areas of growth and innovation.
            

**Additional Considerations:**
- **Data Completeness:** Note that 2023 data is incomplete. Account for this in analyses and interpretations.
- **Data Granularity:** If available, incorporate additional paper details (e.g., abstracts, full content) for deeper insights from data '${dataFileName}'.Array<{ id: string // A unique identifier for the paper; title: string // The title of the paper; pmid: string // PubMed identifier; published_in?: string // The publication where the paper appeared; paper_abstract?: string // A summary of the paper's content; date: string // Publication date; year: string // Publication year; authors: string // The authors of the paper; subject: string //; publication_type: string // The type of publication; url: string // A link to the paper; content: string // The full content of the paper (if available); doi: string //; subject_orig: string //; readers: string //; pmcid: string //; cluster_labels: string // Keywords and cluster labels related to the paper's content; x: string //; y: string //; labels: string //; area_uri: number //; area: string //; }>
- **Visualization:** Use charts, graphs, and other visual aids to effectively communicate findings.
- **Key Questions for Further Exploration:**
    - What specific research areas within ${TOPIC} are showing the most promise for future breakthroughs?
    - Which technological advancements are likely to have the most significant impact on the field in the coming years?
    - What are the potential ethical and societal implications of widespread ${TOPIC} adoption?


```



fetch respond data
The type Data to understand the data structure: 
```javascript
export type Data = Array<{
  id: string // A unique identifier for the paper
  .: string // The title of the paper
  pmid: string // PubMed identifier
  published_in?: string // The publication where the paper appeared
  paper_abstract?: string // A summary of the paper's content
  date: string // Publication date
  year: string // Publication year
  authors: string // The authors of the paper.
  subject: string
  publication_type: string // The type of publication
  url: string // A link to the paper.
  content: string // The full content of the paper (if available).
  doi: string
  subject_orig: string
  readers: string
  pmcid: string
  cluster_labels: string // Keywords and cluster labels related to the paper's content.
  x: string
  y: string
  labels: string
  area_uri: number
  area: string
}>
```