3D model materials apply the brand color system

To apply a brand color system to 3D model materials, 

==you must first establish a brand color palette and then use a 3D modeling or texturing application to assign those specific colors to your model's materials==. The process varies slightly depending on your software and the complexity of your model. 

Step 1: Define your brand color system

Before you begin in 3D software, you must have your brand's specific color values ready. This typically includes HEX codes, RGB, or HSL values. A complete color system goes beyond a single color to ensure brand consistency in all contexts. 

A common strategy is the **60-30-10 rule**: 

- **60%** for your primary brand color.
- **30%** for your secondary brand color.
- **10%** for a distinctive accent color. 

---

Step 2: Prepare your 3D model

Your 3D model must be properly prepared for texturing and material application. 

- **UV Unwrapping**: Your model's UV map must be well-organized and free of distortions. This ensures textures and colors are applied accurately to the surface.
- **Material Slots**: Organize your model into distinct "material slots" based on the parts you want to color differently. For example, a car model might have separate slots for the body, windows, and wheels. 

---

Step 3: Apply the colors in 3D software 

Most 3D software provides a "materials" or "textures" panel to manage the look of a model. The general workflow is as follows: 

**Method 1: Solid color materials**  
This method is best for simple, low-poly models or for coloring different parts of a complex model with solid brand colors. 

1. **Create new materials**: In the material properties tab of your 3D software (e.g., Blender, Autodesk), create a new material for each unique brand color you plan to use.
2. **Input color values**: Select a material and enter your brand's specific HEX or RGB color code into the "Base Color" or "Albedo" slot. This ensures color accuracy.
3. **Assign materials to faces**: In edit mode, select the specific faces or parts of the mesh that should receive a certain color, and then click "Assign" to apply the corresponding material.
4. **Adjust properties**: Refine the look by adjusting material properties like **Roughness** (for matte vs. glossy surfaces) and **Metallic** (for metallic vs. plastic surfaces). 

**Method 2: Texture mapping with a color palette**  
For more complex or artistic shading, you can create a texture map from your brand colors. This is especially useful for stylized, low-poly art. 

1. **Create a color palette image**: Use an image editor to create a small, simple image containing only your brand's colors.
2. **UV map the model**: Unwrap your model's UVs and place them directly over the color swatches on your palette image. Each UV island will be colored according to the swatch it overlaps.
3. **Apply the image as a texture**: In your 3D software, create a new material and use the color palette image as its texture.
4. **Connect to texture coordinates**: Connect the "UV" output from your texture coordinate node to the image texture node, applying the colors based on your UV layout. 

**Method 3: Advanced PBR texturing**  
For realistic, high-detail models, use PBR (Physically-Based Rendering) texturing with brand colors. Tools like Adobe Substance 3D Painter offer advanced workflows. 

1. **Export the model**: Create your model in a 3D application and export it to a format like OBJ or FBX.
2. **Open in Substance 3D Painter**: Import your model into a specialized texturing application.
3. **Import brand assets**: Create a new project and import your brand's color palette, logo, and any other relevant assets.
4. **Paint with precision**: Use the software's painting tools to apply brand colors and textures directly onto the 3D model in real-time. This method gives you fine-tuned control over details and material effects.
5. **Export texture maps**: Export the final texture maps (e.g., Albedo, Roughness, Metallic) to apply to your model in a game engine or renderer. 

---

Software-specific tips

- **Blender**: Use the Shader Editor for complex materials or the Material Properties panel for simple color assignments. In Edit Mode, you can select specific faces and "Assign" materials.
- **Adobe Dimension**: Apply materials directly from the asset panel and adjust their properties, such as color, gloss, and metallic finish.
- **Autodesk**: Use triggers or the Visuals tab in the properties panel to set object colors.
- **Figma with Material Theme Builder**: For UI mockups or simple 3D illustrations, this plugin allows you to define brand color roles and automatically apply them to components.


The 60-30-10 rule is ==a design principle for creating a balanced and harmonious color scheme by using a specific ratio of three colors==. It is widely applied across different fields, including interior design, graphic design, and fashion. 

![Decorating With The 60 30 10 Rule: An Easy Way To Choose Colors](http://t1.gstatic.com/images?q=tbn:ANd9GcRBKfOlMVHq8Q_wLLId8yWl96yBW6HUcqd8e1lLHp8oXuGnTfTSB5bB6qi54lm7ikfDbHBrlFh4)

![The 60–30–10 rule of colour. The 60–30–10 rule is a ...](http://t0.gstatic.com/images?q=tbn:ANd9GcSUXgYl_gZZZoKfyf0PvDKlf5vLlhZq6o6QkxQ37mI1nTaTuaYq_6jhx-GMxyjzIh_0c8h93hSm)

How the rule works

The rule breaks down color usage into three percentages: 

- **60%—The dominant color:** This is the primary hue that sets the overall tone and anchors the design. In a room, this is typically used for large surfaces like walls, flooring, and major furniture. In web design, it's the main background color.
- **30%—The secondary color:** This color provides contrast and visual interest while supporting the dominant hue. It's used on about half the amount of space as the main color. Examples include furniture, curtains, or an accent wall in a room, or cards and navigation bars in a user interface (UI).
- **10%—The accent color:** This is a bold, contrasting color used sparingly to add a "pop" of personality and draw attention to specific elements. This percentage is reserved for small details, like throw pillows, artwork, or call-to-action buttons. 

---

How to apply the rule in different contexts

Interior design

- **Neutral and calm:** For a restful living room, use soft gray walls (60%), white curtains and furniture (30%), and blue throw pillows and art (10%).
- **Bold and modern:** To create a sophisticated look, choose shades of beige or greige for walls and cabinets (60%), black for countertops and fixtures (30%), and gold for hardware and decor (10%).
- **Play with texture:** You can also apply the rule to patterns and textures. A large-scale pattern can be 60% of the space, smaller patterns can be 30%, and a single pop of texture can be 10%. 

User interface (UI) design

- **Light mode:** A dominant white or light gray provides a clean background (60%), a darker gray or a muted brand color can be used for cards and sidebars (30%), and a vibrant brand color is perfect for "buy now" buttons and links (10%).
- **Dark mode:** An interface like Spotify uses a dark color palette with black as the dominant color (60%), a dark gray for secondary elements (30%), and its iconic bright green for accents and interactive elements (10%). 

Fashion and personal styling

- **Office attire:** A beige trench coat (60%) can be paired with a black trouser suit (30%) and a blue striped blouse (10%).
- **Evening outfit:** Use a black top and blazer (60%), a burgundy skirt (30%), and a metallic gold clutch as a standout accent (10%). 

---

Key takeaways

- The 60-30-10 rule is a flexible guideline, not a strict law. You can adjust the proportions or even slightly break the rule by adding a fourth color as a secondary accent.
- The formula helps create a visual hierarchy and prevents a design from becoming overwhelming or visually chaotic.
- Neutral colors often work best for the 60% and 30% proportions, providing a versatile backdrop for more expressive accent colors. 

What are common mistakes using the 60-30-10 rule?

Give examples of how to apply the 60-30-10 rule in web design

What other color combination rules or guidelines can enhance visual appeal?

![undefined](https://encrypted-tbn1.gstatic.com/faviconV2?url=https://blog.logrocket.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

![undefined](https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.elephantstock.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

![undefined](https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.realsimple.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

13 sites

- [](https://blog.logrocket.com/ux-design/60-30-10-rule/#:~:text=Spotify,enhances%20usability%20and%20user%20experience.)
    
    Master UI design: Enhance aesthetics with the 60-30-10 rule
    
    Oct 9, 2023 — Understanding the 60-30-10 rule * 60 percent for the dominant color: This color sets the overall tone of your design, o...
    
    ![favicon](https://encrypted-tbn1.gstatic.com/faviconV2?url=https://blog.logrocket.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)
    
    LogRocket Blog
    
    ![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2UnKlKNbuk9bHvbqCZKgFLzI_FmLI5axhrIJ8xFBN_M6gEdo)
    
- [](https://www.elephantstock.com/blogs/inspiration/choosing-a-color-scheme-60-30-10-rule#:~:text=Inspiring%2060%2D30%2D10%20Ideas,decor\)%2C%22%20Yoko%20explains.)
    
    Choosing a Color Scheme: 60-30-10 Rule - Elephant Stock
    
    So, What is the 60-30-10 Rule? 60-30-10 is a simple decorating rule to help you choose the best color scheme for your home. Color ...
    
    ![favicon](https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.elephantstock.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)
    
    Elephant Stock
    
    ![](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_64mn7VW9HCJc_5MvronW1rxUTFpob-ZEZVnVD-XbXwwUo9l9)
    
- [](https://www.realsimple.com/60-30-10-rule-11712302#:~:text=What%20Is%20the%2060%2D30,just%20fill%20in%20the%20blanks.)
    
    The '60-30-10' Rule Is the Easiest Way to Choose a Color Palette for ...
    
    Apr 10, 2025 — What Is the 60-30-10 Rule? Don't be intimidated by the numbers here—we promise the 60-30-10 rule is just a simple way ...
    
    ![favicon](https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.realsimple.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)
    
    Real Simple
    
    ![](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSN9bnQHxIguHxnEFCWez8XDh9NHwrnVfVzbyyucbzGFuMBt6hi)
    

Show all

60-30-10 rule also work for 3d interior design? what difference?

Yes, the 60-30-10 rule is fully applicable to 3D interior design. However, 

==a 3D space introduces extra layers of complexity and opportunity compared to a 2D visualization==. The core ratios remain the same, but factors like light, shadow, and texture become just as important as the colors themselves. 

Key differences when applying the rule in 3D

|Aspect|2D Interior Design (e.g., floor plans, flat mood boards)|3D Interior Design (e.g., a real room, a virtual space)|
|---|---|---|
|**Color distribution**|The proportions are conceptual, based on a surface area estimate. The designer imagines the ratio for walls, floors, and key furniture.|The proportions are more literally implemented throughout the space. The designer must account for how colors interact on different planes and surfaces that can be viewed from multiple angles.|
|**Light and shadow**|Illumination is not a factor. A color is typically represented in one flat shade.|This is a major factor. The color of a surface will change depending on how light hits it. The 60% dominant color can appear as a range of shades depending on shadows and the light source.|
|**Materials and textures**|Textures are represented visually but not tactilely. They can be counted within the color ratio (e.g., a patterned rug).|Materials like wood, metal, glass, and fabric are integral. A material's texture and sheen can alter the perceived color. The 60-30-10 rule should be applied to materials as well as color.|
|**Perspective and volume**|The view is static from a single, 2D vantage point. The proportions are fixed.|The design is viewed from multiple angles and positions. What appears as 60% from one perspective might shift from another. The designer must ensure balance holds up from different points in the room.|
|**Atmosphere and psychology**|Mood is conveyed through static colors and imagery.|Light and shadow add drama and depth, which can intensify the psychological effect of colors. A color's temperature (warm or cool) and saturation become more impactful.|

Example application in 3D

Imagine a modern living room design based on the 60-30-10 rule using a neutral, a cool tone, and a bold accent.

- **60% dominant (Light Gray):** The main color could be used for the largest surfaces, like the walls, flooring, and a large area rug.
- **30% secondary (Navy Blue):** The secondary color would be used for major furniture, such as a sofa, window treatments, and an accent wall. The texture of the upholstery and drapes will add richness to the color.
- **10% accent (Burnt Orange):** A bold accent color is applied sparingly to decorative items like throw pillows, vases, and pieces of art. Their placement can be used to draw the eye and guide focus within the room. 

[](https://etchinteriordesign.com/how-color-and-light-is-used-to-enhance-interior-design/#:~:text=Based%20on%20your%20personal%20preferences,10%20percent%20of%20each%20room.)

How color and light is used to enhance interior design

* Accent Lighting. The primary use of accent lighting is to accentuate something. It could be a design feature, an artwork, stairs...

![Favicon](https://encrypted-tbn0.gstatic.com/faviconV2?url=https://etchinteriordesign.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

Etch Design Group

![](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGOKTDrmHhecnDChOy21expeIF2LR1RZXjJOa6PbHJRwS13kxo)

[](https://www.thespruce.com/timeless-color-rule-797859#:~:text=What%20is%20the%2060%2D30,the%20colors%20in%20a%20room.)

Perfecting the 60-30-10 Rule in Your Living Space - The Spruce

Apr 22, 2024Perfecting the 60-30-10 Rule in Your Living Space. ... Diana Hathaway Timmons is a color and design expert with over 1...

![Favicon](https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.thespruce.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

The Spruce

![](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbCfCYulSHwcMEAO0TMEM1HwC-zWiP4fu5XYv-IifEBm00Jifg)

The differences in a 3D application come from how these elements interact:

- The light gray walls will appear lighter and darker throughout the day as natural light shifts.
- The texture of the navy sofa will catch the light, creating subtle variations in its 30% area.
- The strategically placed 10% orange accents can be highlighted with focused accent lighting to create focal points.
  
  
  ### The 60-30-10 Rule: A Principle for Balanced Color Schemes

The 60-30-10 rule is a design principle for creating a harmonious and balanced color palette.  
It achieves this by distributing three colors in a specific 60%, 30%, and 10% ratio.  
This rule is widely applied in fields like interior design, graphic design, and fashion.  
Its primary function is to create a clear visual hierarchy and prevent the design from becoming visually chaotic.

### Core Ratio Breakdown

The rule divides the color palette into three distinct roles based on their percentage.

**60% — The Dominant Color:**  
This is the primary hue that anchors the design and sets the overall tone.  
It typically covers the largest surface areas.  
Examples include walls and flooring in interior design, or the main background color in UI design.

**30% — The Secondary Color:**  
This color supports the dominant hue while providing contrast and visual interest.  
It is used in roughly half the amount as the dominant color.  
Examples include furniture and curtains in a room, or cards and navigation bars in a UI.

**10% — The Accent Color:**  
This is a bold, contrasting color used sparingly to add a "pop" of personality.  
It serves to draw attention to specific details and create focal points.  
Examples include throw pillows, artwork, or call-to-action buttons.

### Application Across Different Fields

The rule's versatility allows it to be adapted to various creative contexts.

**Interior Design:**

- **Neutral and Calm:** A living room could use soft gray walls (60%), white furniture (30%), and blue pillows or art (10%).
    
- **Bold and Modern:** A kitchen might feature beige cabinets (60%), black countertops (30%), and gold hardware (10%).
    
- **Texture and Patterns:** The rule can also apply to non-color elements, such as a large-scale pattern (60%), smaller patterns (30%), and a single pop of texture (10%).
    

**User Interface (UI) Design:**

- **Light Mode:** A clean white background (60%) can be paired with muted brand colors for cards (30%) and a vibrant brand color for buttons (10%).
    
- **Dark Mode:** The Spotify interface uses black as the dominant color (60%), dark gray for secondary elements (30%), and its iconic bright green for interactive accents (10%).
    

**Fashion and Personal Styling:**

- **Office Attire:** A beige trench coat (60%) combined with a black trouser suit (30%) and a blue striped blouse (10%).
    
- **Evening Outfit:** A black top and blazer (60%) paired with a burgundy skirt (30%) and a metallic gold clutch (10%).
    
### The 60-30-10 Rule: A Principle for Balanced Color Schemes

The 60-30-10 rule is a design principle for creating a harmonious and balanced color palette.  
It achieves this by distributing three colors in a specific 60%, 30%, and 10% ratio.  
This rule is widely applied in fields like interior design, graphic design, and fashion.  
Its primary function is to create a clear visual hierarchy and prevent the design from becoming visually chaotic.

### Core Ratio Breakdown

The rule divides the color palette into three distinct roles based on their percentage.

**60% — The Dominant Color:**  
This is the primary hue that anchors the design and sets the overall tone.  
It typically covers the largest surface areas.  
Examples include walls and flooring in interior design, or the main background color in UI design.

**30% — The Secondary Color:**  
This color supports the dominant hue while providing contrast and visual interest.  
It is used in roughly half the amount as the dominant color.  
Examples include furniture and curtains in a room, or cards and navigation bars in a UI.

**10% — The Accent Color:**  
This is a bold, contrasting color used sparingly to add a "pop" of personality.  
It serves to draw attention to specific details and create focal points.  
Examples include throw pillows, artwork, or call-to-action buttons.

### Application Across Different Fields

The rule's versatility allows it to be adapted to various creative contexts.

**Interior Design:**

- **Neutral and Calm:** A living room could use soft gray walls (60%), white furniture (30%), and blue pillows or art (10%).
    
- **Bold and Modern:** A kitchen might feature beige cabinets (60%), black countertops (30%), and gold hardware (10%).
    
- **Texture and Patterns:** The rule can also apply to non-color elements, such as a large-scale pattern (60%), smaller patterns (30%), and a single pop of texture (10%).
    

**User Interface (UI) Design:**

- **Light Mode:** A clean white background (60%) can be paired with muted brand colors for cards (30%) and a vibrant brand color for buttons (10%).
    
- **Dark Mode:** The Spotify interface uses black as the dominant color (60%), dark gray for secondary elements (30%), and its iconic bright green for interactive accents (10%).
    

**Fashion and Personal Styling:**

- **Office Attire:** A beige trench coat (60%) combined with a black trouser suit (30%) and a blue striped blouse (10%).
    
- **Evening Outfit:** A black top and blazer (60%) paired with a burgundy skirt (30%) and a metallic gold clutch (10%).
    

### Applying the Rule in 3D Interior Design

While fully applicable, applying the rule in a 3D space introduces greater complexity compared to 2D.  
Factors like light, shadow, texture, and perspective become as crucial as the colors themselves.

**Key Differences from 2D Design:**

- **Light and Shadow:** In 3D, a single color can appear as a range of shades depending on how light hits it, altering its perceived dominance.
    
- **Materials and Textures:** A material's sheen and texture (wood, metal, fabric) can change the appearance of a color and should be considered within the ratio.
    
- **Perspective and Volume:** The color balance must hold up when viewed from multiple angles, as proportions can appear to shift as one moves through the space.
    
- **Atmosphere and Psychology:** Light and shadow add depth and drama, which can intensify the psychological impact of the chosen color palette.
    

### Key Principles and Flexibility

The 60-30-10 rule should be treated as a flexible guideline, not a strict law.

- **Adaptability:** The proportions can be adjusted, and a fourth color can even be introduced as a secondary accent.
    
- **Hierarchy:** The formula is a tool to establish clear visual hierarchy and guide the viewer's eye.
    
- **Use of Neutrals:** Neutral colors often work best for the 60% and 30% roles, creating a versatile backdrop for more expressive accent colors.
### Applying the Rule in 3D Interior Design

While fully applicable, applying the rule in a 3D space introduces greater complexity compared to 2D.  
Factors like light, shadow, texture, and perspective become as crucial as the colors themselves.

**Key Differences from 2D Design:**

- **Light and Shadow:** In 3D, a single color can appear as a range of shades depending on how light hits it, altering its perceived dominance.
    
- **Materials and Textures:** A material's sheen and texture (wood, metal, fabric) can change the appearance of a color and should be considered within the ratio.
    
- **Perspective and Volume:** The color balance must hold up when viewed from multiple angles, as proportions can appear to shift as one moves through the space.
    
- **Atmosphere and Psychology:** Light and shadow add depth and drama, which can intensify the psychological impact of the chosen color palette.
    

### Key Principles and Flexibility

The 60-30-10 rule should be treated as a flexible guideline, not a strict law.

- **Adaptability:** The proportions can be adjusted, and a fourth color can even be introduced as a secondary accent.
    
- **Hierarchy:** The formula is a tool to establish clear visual hierarchy and guide the viewer's eye.
    
- **Use of Neutrals:** Neutral colors often work best for the 60% and 30% roles, creating a versatile backdrop for more expressive accent colors.


### 60-30-10 配色法则的核心定义

60-30-10 法则是一项设计原则，旨在创造平衡、和谐且视觉上令人愉悦的调色板。  
它通过使用 60%、30% 和 10% 的色彩比例来实现这一目标。  
该法则被广泛应用于室内设计、平面设计和用户界面 (UI) 设计等领域。

### 法则构成：三色比例的角色与应用

**60% - 主导色 (Dominant Color)**  
这是空间或设计中的主要颜色，用于固定整体基调并设定氛围。  
在**室内设计**中，它通常用于墙壁、地板或沙发等大面积表面。  
在 **UI 和平面设计**中，它通常作为中性背景色，为其他元素提供画布。

**30% - 次要色 (Secondary Color)**  
该颜色的使用量是主导色的一半，用于提供对比和深度，同时与主导色互补。  
在**室内设计**中，它可以应用于窗帘、点缀椅或床上用品。  
在 **UI 设计**中，它可用于导航菜单、卡片或正文文本等辅助元素。

**10% - 点缀色 (Accent Color)**  
这是一种大胆、通常充满活力的颜色，用于少量添加视觉趣味并创造焦点。  
在**室内设计**中，它可以通过抱枕、艺术品、花瓶或灯具等小饰品引入。  
在 **UI 设计**中，它用于吸引用户对 "Call to Action" 按钮或关键标题等重要交互元素的注意。

### 如何有效运用 60-30-10 法则

**首先确定主导色**  
主导色是整个调色板的基础。  
米白、灰色等中性色是常见选择，但也可以使用更饱和的颜色来营造大胆、精致的外观。

**选择辅助色与点缀色**  
确定主导色后，使用色轮为其寻找互补色或类似色作为次要色和点缀色。  
若要获得**高对比度**效果，请从色轮的相对侧选择颜色。  
若要获得**更柔和、微妙**的效果，请选择在色轮上与主导色相近的颜色。

**运用纹理与图案**  
该法则同样适用于材质和纹理。  
例如，如果 60% 的主导色是平静的中性色，可以为 30% 的次要色搭配天鹅绒等丰富纹理，以增加复杂性而不过度。

**考虑可访问性 (Accessibility)**  
在设计数字界面时，确保颜色选择符合可访问性标准，尤其是对比度。  
使用颜色对比度检查工具可以验证颜色组合对所有用户是否都清晰可读。

### 何时及如何打破配色法则

60-30-10 法则是一个有用的起点，但它是一个**指导方针，而非严格的定律**。  
设计师可以根据需求调整它以创造独特的效果。

**使用两种点缀色**  
可以向方案中添加第四种颜色，将点缀色拆分为两个 10% 的部分，形成 **60-30-10-10** 的比例以增加多样性。

**采用单色配色方案 (Monochromatic)**  
可以使用单一颜色的不同色调、色度和纹理来构建调色板。  
例如，60% 浅灰色，30% 炭灰色，以及 10% 的白色作为点缀。

**创建自定义比例**  
根据特定的创意构想调整比例。  
例如，使用 **75-15-10** 的比例打造更微妙的外观，或使用 **40-30-20-10** 的比例打造更具活力的极繁主义空间。