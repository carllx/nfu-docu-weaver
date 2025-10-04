
# Emerging MPEG Standards for Point Cloud Compression  
[Zotero](https://www.zotero.org/users/8931831/items/S69ILLRG)


Abstract:

因为现在人们越来越喜欢增强现实和虚拟现实这样的体验 所以大家对于捕捉现实世界、再以能够让人沉浸其中的方式呈现出来的兴趣空前高涨。这种呈现让大家可以自由地在带有多种感官体验的三维媒体世界里移动。但不幸的是 这种呈现需要大量的数据 现在的网络还传输不了。因此 非常需要一些能够有效压缩数据的技术 来在内容传播过程中使用，这对于让更多的人能够使用增强现实和虚拟现实的应用非常关键。负责多媒体标准制定的主要组织之一移动图像专家组（Moving Picture Experts Group (MPEG)）注意到了这个趋势 不久前开始建立一个开放标准 意在更紧凑地表示三维点云。而三维点云就是我们都很熟悉的二维像素点在三维空间中的对应物。这篇文章介绍了这个正在进行中的标准化工作的主要进展和技术内容。

[[idea💡]]  用视频格式储存与传输传视觉或红外线以外感数据.



Moving Picture Experts Group, MPEG, as one of the main standardization groups dealing with multimedia, identified the trend and started recently the process of building an open standard for compactly representing 3D point clouds, which are the 3D equivalent of the very well-known 2D pixels.  
  
Volumetric visual data describes a 3D scene and objects with its geometry and respective attributes , plus any temporal changes. Such data is typically computer-generated from 3D models, or is captured from real-world scenes using a variety of solutions such as.  
  
Because volumetric video describes a complete 3D scene or object, such data can be visualized from any viewpoint. Therefore, volumetric video is a key enabling technology for any AR, VR, or MR applications, especially for providing Six Degrees of Freedom viewing capabilities. While MPEG in prior standards has already addressed the coding of 3D worlds , specifically computer-generated worlds, recently it launched an ambitious road map of technologies for coding representations of real 3D scenes . One of these technologies is called Point Cloud Compression and is expected to be delivered as an ISO standard in the beginning of 2020.  
  
Such point cloud data presents new challenges to the signal processing and compression research community. Previous compression solutions for volumetric visual representations either focused on computer-generated content , or suffered from low spatial and temporal compression performance , when dealing with captured natural content. 3D sensor signals, scene geometry needs an efficient representation that is scalable in level of detail and efficient in compression, while its photometric attributes are a new class of signal that is not sampled on an uniform Euclidean grid and therefore needs new sampling, filtering, and transform tools to represent and compress. Many emerging applications including immersive VR/MR video, automotive/robotic navigation, and medical imaging require the capture and processing of 3D scene/object geometry data.  
  
This data, in its most primitive form, consists of a collection of points called a point cloud. This section will introduce some of the aspects of point cloud data. Such polygonal meshes are well suited for compact representation of dense surfaces, but they have problems representing non-manifold structures. Key advantages of a point cloud representation over polygonal meshes are its flexibility to represent non-manifold geometry and its real-time processing potential as there is no need to store, maintain, or process surface topological information.  
  
For efficient processing of point cloud data, each point is quantized into a cubic grid composed of 2−d 2−d 2−d size voxels which are formed from volumetric subdivision, up to d levels of detail , of a 1 1 1 cubic root voxel. Resulting voxels may be mapped into an octree data structure to create a voxelized octree, which facilitates, in turn, the traversal, search, and access of the neighboring voxels ,. 3D point cloud data finds applications in many fields, including cultural heritage/museums, 3D free viewpoint video, real-time immersive telepresence, content VR viewing with interactive parallax, mobile mapping, and autonomous navigation , . Regarding cultural heritage applications, point cloud data scans are used to archive and visualize objects in museums including historical statues and buildings , .  
  
The goal of immersive video is to go beyond higher image quality and to provide a higher sense of 3D user experience and interactivity. Real-time 3D telepresence is one of the key applications of immersive video and 3D point clouds, for which a collection of random and unrelated points is a preferred data representation format because of its simplicity for visualization, filtering and editing. Holoportation and 8i’s volumetric video technology . Variations of immersive video include HMD based VR and 3D free viewpoint sports replay and broadcasting , which may not require real time processing and may in addition contain mesh based graphical data content.  
  
Such media-related use cases may usually contain between 100,000 and 10,000,000 point locations and color attributes with 8-10 bits per color component , along with as some sort of temporal information, similar to frames in a video sequence. LIDAR, camera captured images and localization data measured with GPS and an inertial measurement unit .  
  
**To address this wide range of applications, the MPEG**  
  
There already exist many standards to compress images, video, and LIDAR sensor data, so the objective of this emerging PCC standard is not to compress the raw sensor data, but to compress the point cloud representations of the objects or scenes captured by the sensors. The coding techniques developed here are generally designed to be agnostic of the specific sensors used to create the point cloud data, so it is assumed that prior to compression, 3D data from different sensors was fused to generate the point cloud representation to be compressed. An example of a sensor system used to dynamically acquire data for mobile mapping and autonomous navigation purposes is shown in Fig. By combining the relative LIDAR-captured point locations along with the location of the vehicle, the point locations can be converted to absolute coordinates relative to a fixed origin of a geographic coordinate system.  
  
Fixed RGB cameras mounted on the vehicle capture image sequences or video. These data are fused in a post-capture processing operation so that each point, in addition to having a LIDAR-captured reflectance attribute, can have a single RGB color attribute associated with it. The fusing process can also clean the data, e. To capture high-resolution real-time point clouds of moving objects such as people for applications such as AR/VR/MR, Fig.  
  
An example of a method for capturing voxelized point clouds using only cameras is described in . The same types of sensors described here can also be used to acquire data for generating point clouds of static objects such as buildings and their interiors, objects and assemblies for industrial and cultural heritage applications, and terrain features. By fusing data from aerial images and LIDAR scans along with ground based LIDAR and imaging data, point cloud models of cities can be generated, as demonstrated in . Capturing point clouds of cultural and historical objects or archeological sites can also be done with these kinds of sensors.  
  
A high-level overview of various methods for acquiring point cloud representations of cultural objects can be found in . There has been plenty of work on point cloud compression in the past, but most works aim only at the compression of static point clouds, instead of time-varying point clouds as needed for AR/VR/MR applications. For example, a point cloud codec was introduced in based on octree composition. This method could operate in real time, as the XOR prediction is simple and fast.  
  
In , an extension to this framework was introduced, combining the octree-based codec with a common image codec for color attribute coding. Introduced a time-varying point cloud codec that can predict graph-encoded octree structures between adjacent frames. The method uses spectral wavelet-based features to achieve this and an encoding of differences to achieve a lossless encoding. This method also includes the color coding method from , which defines small subgraphs based on the octree of the point cloud.

In comparison to point clouds, 3D objects are often coded as 3D meshes, for which a significant number of compression methods were developed. Early work on mesh compression includes , , . While these methods are promising, it seems that methods based on 3D point clouds can result in coding with even less overhead and more flexible progressive rendering capabilities, as the point cloud format is simpler to acquire and process. There are international standards for mesh compression , defined, which are greatly beneficial for interoperability between devices and services.  
  
Static dynamic augmented reality. Therefore, these formats are not directly applicable to immersive and augmented 3D object-based video combining real and virtual content. These applications typically deal with photo-realistic meshes and point clouds of millions of points acquired from 3D scanners and/or computer vision algorithms.  
  
**3D meshes and point cloud content were contributed, and a practical streaming prototype was developed as part of the**  
  
The block diagram of the data flow in immersive communications is shown in Fig. In such systems real-time communication processing is important as is the resilience to noisy data and handling of dense point clouds. The advantage of this approach is that composite rendering in scenes facilitates AR, VR, and free view point functionalities. However, for this use case, existing MPEG standards for 3D graphics were found to be less suitable due to the fact that several requirements like noise resilience and low encoder latency were not fully addressed.  
  
During the CfP development period, evaluation metrics were developed in a series of experiments, requirements, and use case assessments. To have a baseline for determining target bitrates and distortions, a recent hybrid octree-image point cloud codec for tele-immersive video was chosen as anchor. Quality metrics described in , were selected for the objective quality assessment. These metrics are referred as point-to-point and point to plane geometry distortion metrics.  
  
In the first geometry metric , the comparison is such that the Mean Square Error between the reconstructed point and the closest corresponding points in the reference point cloud is calculated. In the second geometry metric , the MSE is calculated between the reconstructed point and the surface plane in the given reference test data. Surface normals are provided with the reference test data to facilitate the computation of the surface planes. Peak signal-tonoise-ratios are obtained based on the 3D volume resolution for geometry, and respectively for color depths for each color channel.  
  
Bjontegaard-delta metrics are derived comparing the distortions against the anchor implementation at predefined target bitrates . The results of the subjective assessment were almost in line with the objective evaluations . The average confidence interval for the subjective evaluation of static content was 0.48 MOS values, while that of dynamic content was 0.34 MOS values. Interpolationbased prediction occupancy symbols reconstructed residuals Inv.  
  
  
  
MBit/s, representing 0.2% to 5% of the original uncompressed data. In addition to using objective metrics, a subjective evaluation methodology was defined that consisted of rendering the point clouds using a virtual camera path and then performing the quality assessment via techniques similar to those used to evaluate video quality. For the subjective assessment only three static objects and three dynamic scenes were considered among the total of 30 test objects considered in the overall CfP. The entire set of 19 static objects, five dynamic objects and six dynamic acquisition scenes were considered for the objective evaluation.  
  
This reduced subjective test set was due to the need to minimize the effort required to complete the tests and because dynamic acquisition scenes are typically processed by a computer and are not directly viewed as a final product. The subjective visual quality assessment of the static and dynamic scenes was made possible by using a point cloud renderer designed by Technicolor . This software allows specifying a camera view path, displaying a static representation of a point cloud, rotating it on three axes, and zooming. When rotating and zooming a static object, it is possible to record a track of all the movements.  
  
The recorded tracks are used to create video clips. The same process is applied on dynamic sequences, where the video clips were produced by rotating the object while playing it out.  
  
**The L-PCC codec was designed to efficiently compress**  
  
Because of such characteristics, L-PCC compresses first the point cloud geometry information by exploiting an octree-based encoding strategy. Section V-A describes the octree-based coding process for the geometry information.  
  
Finally, an interpolation-based prediction module that is used to further improve the coding efficiency of the attribute values by exploiting spatial correlations as well as the quantization and dequantization steps that are applied on the residuals are described in Section V-D. Generating octree structure by recursive subdivision. Let Xi = i=1...N be the set of 3D positions associated with the points of the input point cloud.  
  
**X̃i =**  
  
After quantization, an optional process that removes duplicate points may be applied. It consists of merging points sharing the same quantized positions into a single point.  
  
**An octree structure is then built by recursively subdividing**  
  
On the decoder side, the decoding process starts by reading from the bitstream the bounding box B. The same octree structure is then built by subdividing B according to the subdivision codes read from the bitstream.

**However, a practical encoder implementation could be designed by considering different computational complexity and**  
  
The S-PCC architecture comprises an encoder and decoder, which in turn comprise various modules, as shown in Fig. Communication between modules is done by passing lists of point locations and/or point attributes. The input to the S-PCC encoder is the original, uncompressed point cloud.  
  
**Upsample original**  
  
Block diagram of the S-PCC geometry encoder and decoder. Furthermore, the original point colors are typically expressed in an RGB color space.  
  
**The transformation from world to frame coordinates may be specified by using the parameters translation =**  
  
Specifically, the locations of all points within a voxel are quantized to the voxel center, and the attributes of all points within the voxel are averaged and assigned to the voxel. A voxel is said to be occupied if it contains any point of the point cloud. The blockwidth is constant, W = 2depth−` , where ` = level is a parameter to the encoder and is passed to the decoder in the bitstream header. The use of blocks to represent geometry is important for spatial random access, view-dependent coding and rendering, parallel processing, out-of-core processing for large datasets, and the formation of "slices" and other units for network packetization and error resilience.  
  
Entropy encoding of blocks. Currently, the occupancy bytes are entropy-coded. If the depth of the tree is large enough, then there is at most one point in each voxel, and thus the geometry of the original point cloud can be represented losslessly, up to depth bits of precision for each spatial component.  
  
**If ` = level is less than depth, then the blocks are**  
  
S-PCC represents the geometry within each block as a surface that intersects each edge of the block at most once. The collection of vertices is a list , k = 1, . Although there are other surfaces that can be parametrized by such a set of vertices, for example, as an implicit surface of a Bézier Volume, S-PCC uses triangles as they are particularly friendly to standard graphics processing. Entropy encoding of vertices.  
  
Vertices, nominally being intersections of a surface with edges of a block, are shared across neighboring blocks, not only guaranteeing continuity across blocks of the reconstructed surface, but also reducing the number of bits required to code the collection of vertices. The set of vertices is coded in two blocks is computed, and a bit vector determines which edges contain a vertex and which do not.  
  
Entropy encoding. The quantized, transformed coefficients are entropy-encoded using RLGR . The output from the S-PCC encoder and the input to the decoder is a bitstream that comprises a geometry bitstream, a color bitstream, and a bitstream header. The bitstream header contains parameters needed to decode the geometry and color bitstreams, namely depth, level, geomStepsize, colorStepsize, translation, and scale.  
  
Block diagram of S-PCC color encoder and decoder. The S-PCC encoder contains an instantiation of the geometry decoder. Details of the geometry decoder module are described in Section VI-C. The output of the geometry decoder is a list of refined vertices , r = 1, .  
  
, Nref , of the re-colored points, using information from the already-available locations , r = 1, . All the refined vertices within a voxel are quantized to the voxel center, and the attributes of the refined vertices within the voxel are averaged and assigned to the voxel. This produces a list of voxel colors, n = 1, . , Nvox , along with a list of the associated voxel locations , n = 1, .  
  
, Nvox , are transform-coded, analogously to a color image, by a spatial transform, quantizer, and entropy coder. Details of the geometry decoder are shown in Fig. The occupancy bytes of the octree are entropy-decoded and the octree is reconstructed. If the level of the octree is equal to the depth as indicated in the bitstream header, then this is a lossless representation of the geometry at that level of precision.  
  
Entropy decoding of vertices. If the level of the octree is smaller than the depth, then this is a lossy representation of the geometry, and vertices are entropy-decoded, in two blocks is computed, and a bit vector is entropy-decoded to indicate which edges contain a vertex and which do not. Secondly, for each edge that contains a vertex, the position of the vertex along the edge is entropy-decoded and dequantized, resulting in a list of vertices , k = 1, . Vertex reconstruction.  
  
For each block, the vertices on the block edges determine a surface through the block. The method of triangulation is defined so that the triangulation is unique given the vertices on the block edges.

The purpose of the refined vertices is to create geometry at a spatial resolution greater than or equal to the spatial resolution of the color information. The list of these refined vertices is the output of the geometry decoder.  
  
**The color decoder module decompresses the color bitstream into decoded color components , n =**  
  
, Nref , as side information. The main philosophy behind V-PCC is to leverage existing video codecs for compressing the geometry and texture information of a dynamic point cloud. , an occupancy map and auxiliary patch information, are also generated and compressed separately. It should be noted that the metadata information represents a relatively small amount of the overall bitstream.  
  
The bulk of the information is handled by the video codec. Subsection VII-B details the image generation and padding processes, which transform the point cloud geometry and texture information into temporally correlated, piecewise smooth, 2D images suited for coding using traditional video codecs. The processes of generating the auxiliary patch information and occupancy map are described in subsections VII-C and VII-D, respectively. Subsection VII-E describes the smoothing module and the geometry and texture reconstruction processes.  
  
**Packing smoothed**  
  
, Nvox . The inverse transform uses, as side information, the list of decoded voxel locations , n = 1, .  
  
Leveraging traditional video codecs to encode point clouds requires mapping the input point cloud to a regular 2D grid. The objective is to find a temporally-coherent low-distortion injective mapping that would assign each point of the 3D point cloud to a cell of the 2D grid. Maximizing the temporal coherency and minimizing the distance/angle distortions enables the video encoder to take full advantage of the temporal and spatial correlations of the point cloud geometry and attributes signals. An injective mapping guarantees that all the input points are captured by the geometry and attributes images and could be reconstructed without loss.  
  
**Iterative refinement procedure refined final patches**  
  
The padding process aims at filling the empty space between patches in an attempt to generate a piecewise smooth image that may be better suited for video coding. V-PCC uses a simple padding strategy, which processes each block of T T pixels independently. If the block has both empty and filled pixels, then the empty pixels are iteratively filled with the average value of their non-empty neighbors. Example of geometry and texture images.  
  
The packing process aims at mapping the extracted patches onto a 2D grid, while trying to minimize the unused space and to guarantee that every T T block of the grid is associated with a unique patch. V-PCC uses a simple packing strategy that iteratively tries to insert patches into a W H grid. W and H are user defined parameters, which correspond to the resolution of the geometry/texture images that will be encoded. The patch location is determined through an exhaustive search that is performed in raster scan order.  
  
The first location that can guarantee an overlapping-free insertion of the patch is selected and the grid cells covered by the patch are marked as used. If no empty space in the current resolution image can fit a patch then the height H of the grid is temporarily doubled and the search is performed again. At the end of the process, H is reduced so as to account only for the used grid cells. The image generation process exploits the 3D to 2D mapping computed during the packing process to store the geometry and texture of the point cloud as images.  
  
14 shows an example of generated geometry and texture images.  
  
**In order for the decoder to be able to reconstruct the**  
  
The patch metadata is predicted and arithmetically encoded. Instead of explicitly encoding the index I, its position J is arithmetically encoded. This can lead to better coding efficiency. The occupancy map consists of a binary map that indicates for each cell of the grid whether it belongs to the empty space or to the point cloud.  
  
The occupancy map compression leverages the auxiliary information described in the previous subsection, in order to detect the empty T T blocks . The remaining blocks are encoded using the following process.  
  
**The occupancy map could be encoded with a precision of**  
  
B0 = 2 or B0 = 4 result in visually acceptable results, while significantly reducing the number of bits required to encode the occupancy map.  
  
**S ELECTION**  
  
The occupancy map compression module first associates binary values with all B0 B0 sub-blocks belonging to the same T T block. If the block is non-full, additional information indicating the location of the full/empty sub-blocks is encoded by using the following strategy. The smoothing procedure aims at alleviating potential discontinuities that may arise at the patch boundaries due to compression artifacts. The point cloud geometry reconstruction process exploits the occupancy map information in order to detect the non-empty pixels in the geometry/texture images/layers.  
  
The 3D positions of the points associated with those pixels are computed by leveraging the auxiliary block/patch information and the geometry images. More precisely, let P be the point associated with the pixel, let be the 3D location of the patch to which it belongs, and let be its 2D bounding box. OF OBJECTIVE EVALUATION RESULTS.  
  
  
  
The full sets of objective and subjective results, including RD-curves, are available in and , where S-PCC is denoted as "P02" and V-PCC as "P07". Only one solution was submitted as proposal for LIDAR point cloud compression. No subjective evaluation was carried out for L-PCC. Out of these, the proposal described in Section VI scored the highest in the objective and subjective evaluations.  
  
BDBR, and 15% Luma BDBR bit savings were achieved, compared to the anchor. The subjective evaluation showed conclusive results, as seen in the example shown in Fig.

The benefits of V-PCC over the anchor in terms of visual quality are clearly visible and in line with the objective evaluation results, e. as where g is the luma component of the geometry image.  
  
Steinbach, "Real-time compression of point cloud streams," in Int. Conf. Mekuria, K. Chou, "Motion-compensated compression of dynamic voxelized point clouds," IEEE Trans. Mekuria, Z. Mekuria, C. Zhang, "Real-time high-resolution sparse voxelization with application to image-based modeling," in Proceedings of the 5th High-Performance Graphics Conference, 2013.  
  
Gopi, "A generic scheme for progressive point cloud coding," IEEE Trans. Computer Graphics, vol. Proceedings of the 3rd Eurographics / IEEE VGTC Conference on PointBased Graphics, ser. Frossard, "Graph-based compression of dynamic 3D point cloud sequences," IEEE Trans.  
  
Rossignac, "Geometric compression through topological surgery," ACM Trans. Mekuria, P. Cesar, and D. Bulterman, "Low complexity connectivity driven dynamic geometry compression for 3D tele-immersion," in Int. Cesar, "A basic geometry driven mesh coding scheme with surface simplification for 3DTI," in IEEE COMSOC MMTC ELetter, vol. Daras, "On human time-varying mesh compression exploiting activity-related characteristics," in Int. Magnenat-Thalmann, "A novel compression framework for 3D time-varying meshes," in Int.  
  
Mekuria, M. Mekuria, P. Cesar, and D. Conf. Mekuria, S. International Telecommunication Union, "Subjective video quality assessment methods for multimedia applications," Rec. Cesar, E. Chou, "Compression of 3D point clouds using a region-adaptive hierarchical transform," IEEE Trans. Malvar, "Adaptive run-length/Golomb-Rice encoding of quantized generalized gaussian sources with unknown statistics," in Data Compression Conference , 2006.  
  
Research Leader of the Volumetric Video Coding team at Nokia Technologies in Tampere, Finland.  
  
**Before joining Nokia, he held a Marie SkłodowskaCurie fellowship as Experienced Researcher with**  
  
He is currently an editor of the ISO/IEC committee draft for video-based point cloud compression and co-chair of the MPEG Ad hoc group on System Technologies for V-PCC.  
  
He leads a research team with focus on Augmented Reality, Cloud Computing, Games and Interactive Media and regularly presents results in journals and at speaking engagements worldwide.  
  
**Vittorio Baroncini received his Bacca Laurea in**  
  
Since 2004, he is Chairman of MPEG Test Group. Expert in objective and subjective video quality assessment and is currently acting as consultant in the area of visual quality assessment. Maja Krivokuća received her Bachelor of Engineering degree in Computer Systems Engineering and her Ph.  
  
He is cochair of the MPEG Ad hoc group on Point Cloud Coding.  
  
From 2004 to 2006, he was Monbusho Research fellow at the Institute for Laser Engineering, Osaka, Japan. Research Scientist at Canon Research Centre France.

**Pablo Cesar leads the Distributed and Interactive**  
  
Transactions on Multimedia and IEEE Transactions of Multimedia.  
  
Engineering from Northwestern University in 2004. Staff Researcher/Sr. Manager with Samsung Research America’s Multimedia Standards Research. His research interests include point cloud and light field compression, graph signal processing and deep learning.  
  
**Bell Laboratories, the Xerox Palo Alto Research**  
  
Washington, the Chinese University of Hong Kong, Joan Llach received his M. Technicolor R&I France, where he leads a research team working on compression, transmission and interactive applications for video. Llach has actively participated in several standardization efforts and is an editor of the ISO/IEC committee draft for video-based point cloud compression . Group Committee since 2005, especially focusing on 3D graphics compression. 3D mesh compression.  
  
Compression Ah-Hoc Group and editor of the ISO/IEC committee draft for video-based point cloud compression and the working draft for geometry-based point cloud compression .  
  
**Rufael Mekuria received his MSc in 2011 from**  
  
in 2017 from VU University.  
  
**Informatica from 2011 to 2016 and joined Unified**  
  
Streaming/CodeShop in 2016, where he is leading standardisation and research efforts.  
  
**Point Cloud Coding Ad Hoc group in 2014 and continues work on PCC at Point Cloud Compression**  
  
He has been with Sony Corporation, Tokyo, Japan, since 2004. Coding Experts Group and ISO/IEC Moving Pictures Experts Group since 2011. Multimedia Computing Group of Delft University of Technology, The Netherlands, in 2018.  
  
**Ali Tabatabai is currently a consultant and technical advisor to Sony US Research Center and Sony**  
  
Tokyo R&D Center. In his last position as a VP at Sony US Research Center he was responsible for research activities related to VR/AR capture and next generation video compression. Tourapis is a Software Standards Engineer with Apple Inc. and represents Apple in several standardization activities including MPEG, ITU, and SMPTE. Labs, and Dolby Laboratories, among others, and has made several key contributions to standards such as MPEG-4 AVC and HEVC.