```javascript
async function selectTextInZoteroPDF(selectionObject) {
    
    const { unique_id, coordinates, selected_text, color_code } = selectionObject;
    
    // Check if the document is a PDF
    if (!unique_id || !coordinates) {
        console.error("Invalid selection object for a PDF document.");
        return;
    }
    
    
    const ztoolkit = Zotero.ZoteroGPT.data.ztoolkit
    const reader = await ztoolkit.Reader.getReader();
    
    if (!reader || !reader._iframeWindow) {
        console.error("Cannot access the PDF reader.");
        return;
    }
    
    const { pageNumber, selectionOffset } = coordinates;
    const { left, top } = selectionOffset;
    
    // Scroll to the page and highlight the text
    reader._iframeWindow.wrappedJSObject.eval(`
        PDFViewerApplication.pdfViewer.scrollPageIntoView({
            pageNumber: ${pageNumber},
            destArray: [null, { name: "XYZ" }, ${left}, ${top}, 0.8],
            allowNegativeOffset: false,
            ignoreDestinationZoom: false
        });

        // Add additional code here to highlight the selected text if necessary
        // This can be complex as it involves interacting with the PDF rendering and selection mechanisms
    `);
}

async function createPDFAnnotation(selectionObject) {
    const { unique_id, coordinates, selected_text, color_code, created_at, updated_at } = selectionObject;

    // Validate the input object
    if (!unique_id || !coordinates || !selected_text) {
        console.error("Invalid selection object for creating an annotation.");
        return;
    }

    // Access Zotero's PDF reader
    const ztoolkit = Zotero.ZoteroGPT.data.ztoolkit;
    const reader = await ztoolkit.Reader.getReader();

    if (!reader || !reader._iframeWindow) {
        console.error("Cannot access the PDF reader.");
        return;
    }

    const { pageNumber, selectionOffset } = coordinates;
    const { left, top } = selectionOffset;
    alert(left)
    // Code to create an annotation at the specified location
    reader._iframeWindow.wrappedJSObject.eval(`
        // Insert code here to interact with the PDF viewer's annotation capabilities
        // This might involve creating a new annotation object and setting its properties
        // such as page number, coordinates, text, color, etc.

        // Example (pseudocode):
        const newAnnotation = new PDFAnnotation({
            page: ${pageNumber},
            x: ${left},
            y: ${top},
            text: "${selected_text}",
            color: "${color_code}"
        });
        PDFViewerApplication.addAnnotation(newAnnotation);
    `);
}

// Example usage
const selectionObject = {
    "unique_id": "1bgwj9uu",
    "coordinates": {
        "xpath": {
            "endMeta": {
                "textOffset": 4,
                "parentContainer": "/span[232]/text()[1]"
            },
            "startMeta": {
                "textOffset": 0,
                "parentContainer": "/span[132]/text()[1]"
            }
        },
        "pageNumber": 10,
        "selectionData": {
            "selectedText": "We share 98 percent of our genetic makeup withchimpanzees. What makes us different—our language, values,artistic expression, scientific understanding, and technology—is theresult of individual ingenuity that was recognized, rewarded, andtransmitted through learning. Without creativity, it would be difficultindeed to distinguish humans from apes"
        },
        "selectionOffset": {
            "top": 22.400197858472996,
            "left": 34.39853162650602
        },
        "simplifiedXpath": {
            "endMeta": {
                "textOffset": 4,
                "parentIndex": 231,
                "parentTagName": "SPAN"
            },
            "startMeta": {
                "textOffset": 0,
                "parentIndex": 131,
                "parentTagName": "SPAN"
            }
        }
    },
    "selected_text": "We share 98 percent of our genetic makeup withchimpanzees. What makes us different—our language, values,artistic expression, scientific understanding, and technology—is theresult of individual ingenuity that was recognized, rewarded, andtransmitted through learning. Without creativity, it would be difficultindeed to distinguish humans from apes",
    "color_code": "YELLOW",
    "created_by": {
        "name": "Yam Lam",
        "first_name": "Yam",
        "last_name": "Lam",
        "profile_image": null,
        "email": null
    },
    "created_at": "2023-12-09T07:59:35.444Z",
    "updated_at": "2023-12-09T07:59:35.444Z"
}

// selectTextInZoteroPDF(selectionObject);
createPDFAnnotation(selectionObject);
```


```javascript
async function createAnnotationFromScispace(notesObject, selectedItem) {
    try {
        var annotation = new Zotero.Item('annotation');
        annotation.libraryID = selectedItem.libraryID; // Assuming selectedItem is provided
        annotation.parentID = selectedItem.id;
        annotation.annotationType = 'highlight'; // Assuming a highlight type annotation
        annotation.annotationText = notesObject.selected_text;
        annotation.annotationComment = notesObject.selected_text; // You can modify this as needed
        annotation.annotationColor = notesObject.color_code === "YELLOW" ? '#ffd400' : '#000000'; // Defaulting to black if not yellow
        
        // Define page based on notesObject
        var page = notesObject.coordinates.pageNumber;
        annotation.annotationPageLabel = (page +1 ).toString();
        // https://github.com/zotero/pdf-worker/blob/85d3c0ed13f128400e7e54243eacebf349b88fc5/src/annotations/common.js#L13
        // const LETTER_SIZE_MEDIABOX = [0, 0, 612, 792];
        
        // Get the dimension of the PDF page of the PDF but nowadays we only get the first five page data.
        const RawPageView = await Zotero.PDFWorker.getRecognizerData(selectedItem.id,true)
        const width = RawPageView.pages[0][0];
		const heigh = RawPageView.pages[0][1];
		const startx = notesObject.coordinates.selectionOffset.left/100*width;
		const starty = heigh - notesObject.coordinates.selectionOffset.top/100*heigh;

        // Set the annotation position
        var position = {
            pageIndex: page , // Adjusting page index if necessary
            rects: [
                [
                    startx, 
                    starty, 
                    startx+10, // Width placeholder calculate from bottom left
                    starty-10  // Height placeholder calculate from bottom left
                ]
            ]
        };
        annotation.annotationPosition = JSON.stringify(position);

        // Additional metadata (if required)
        if (notesObject.created_at) {
            annotation.dateAdded = notesObject.created_at;
        }
        if (notesObject.updated_at) {
            annotation.dateModified = notesObject.updated_at;
        }

        // Set sortIndex
        var pos = Zotero.Utilities.rand(1, 10000).toString().padStart(6, '0');
        annotation.annotationSortIndex = `${(page+1).toString().padStart(5, '0')}|${pos}|00000`;
        console.log(annotation.annotationSortIndex)
        await annotation.saveTx({
            skipEditCheck: true
        });

        console.log("Annotation created successfully.");
        return annotation;
    } catch (error) {
        console.error("Error creating annotation:", error);
    }
}


// Example usage
const notesObject = {
    "unique_id": "1bgwj9uu",
    "coordinates": {
        "xpath": {
            "endMeta": {
                "textOffset": 4,
                "parentContainer": "/span[232]/text()[1]"
            },
            "startMeta": {
                "textOffset": 0,
                "parentContainer": "/span[132]/text()[1]"
            }
        },
        "pageNumber": 10,
        "selectionData": {
            "selectedText": "We share 98 percent of our genetic makeup withchimpanzees. What makes us different—our language, values,artistic expression, scientific understanding, and technology—is theresult of individual ingenuity that was recognized, rewarded, andtransmitted through learning. Without creativity, it would be difficultindeed to distinguish humans from apes"
        },
        "selectionOffset": {
            "top": 22.400197858472996,
            "left": 34.39853162650602
        },
        "simplifiedXpath": {
            "endMeta": {
                "textOffset": 4,
                "parentIndex": 231,
                "parentTagName": "SPAN"
            },
            "startMeta": {
                "textOffset": 0,
                "parentIndex": 131,
                "parentTagName": "SPAN"
            }
        }
    },
    "selected_text": "We share 98 percent of our genetic makeup withchimpanzees. What makes us different—our language, values,artistic expression, scientific understanding, and technology—is theresult of individual ingenuity that was recognized, rewarded, andtransmitted through learning. Without creativity, it would be difficultindeed to distinguish humans from apes",
    "color_code": "YELLOW",
    "created_by": {
        "name": "Yam Lam",
        "first_name": "Yam",
        "last_name": "Lam",
        "profile_image": null,
        "email": null
    },
    "created_at": "2023-12-09T07:59:35.444Z",
    "updated_at": "2023-12-09T07:59:35.444Z"
}

// selectTextInZoteroPDF(notesObject);

var ITEMS = Zotero.getActiveZoteroPane().getSelectedItems();
createAnnotationFromScispace(notesObject, ITEMS[0])
    .then(() => console.log("Annotation created successfully"))
    .catch(error => console.error("Error creating annotation:", error));
```


```javascript
var ITEMS = Zotero.getActiveZoteroPane().getSelectedItems()[0];
console.log(Zotero.PDFRenderer)
const itemId = ITEMS.id
// const fulltext = await Zotero.PDFWorker.getFullText(itemId);
// console.log(fulltext)
const key = ITEMS._key
const RawPageView = await Zotero.PDFWorker.getRecognizerData

console.log(RawPageView)
/**
 * Init paths for PDF tools and data
 */
// var db = Zotero.DataDirectory.getDatabase();

// var page = Zotero.Fulltext.getPages(itemId).then((p)=>{console.log(p)})


console.log(ITEMS._pdfData)


```