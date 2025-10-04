[ 🌐 cctv [中国国宝大会]已知的秦俑色彩，以哪几种颜色为主？](@https://tv.cctv.com/2021/11/13/VIDEiXKLOfNa1WCVFw2SVuRo211113.shtml)

![bg fit left:50% vertical](https://i.imgur.com/JprEPHx.webp)


[ 🌐 bajanthings The Terracotta Warriors - Xi'an, China - BajanThings](@https://www.bajanthings.com/the-terracotta-warriors-xian-china/)
![bg fit left:50% vertical](https://i.imgur.com/yJ4WOD5.webp)


[ 🌐 kenaitken Trip 8 CHINA HOLIDAY in 2011: Day 7…. Factory for the Terracotta Warriors | Ken Aitken](@https://www.kenaitken.net/3-our-travels-around-the-world-2/trip-8-china-holiday-in-2011-october-shanghai-lunch-as-a-group/2011-china-trip-day-15-10th-28th-october-19-days/trip-8-china-holiday-in-2011-day-7-16th-october/)
![bg fit left:50% vertical](https://i.imgur.com/bVkK0qK.webp)


[ 🌐 lmarena LMArena](@https://lmarena.ai/c/711d72bc-5a2a-4520-b5be-4f9f527bfc5e?chat-modality=image)


```
task:reference_view_generation;input:single_image;output:image_only;

pose:mode:${POSE[T_POSE|A_POSE]};normalize_from_input:enabled;input_pose:auto_detect;retarget:canonical;ik_reconstruction:enabled;kneeling_to_standing:extend_legs_maintain_proportions;foot_placement:flat;ground_contact:enforce;spine:straight;pelvis:level;shoulders:neutral;head:neutral;palms:down;hands:relaxed;t_pose_arm_angle:90deg;a_pose_arm_angle:20deg;

proportion:source:reference_image_analysis;maintain_original_proportions:strict;preserve_input_anatomy:100%;limb_length_from_source:locked;torso_ratio_from_source:locked;head_size_from_source:locked;bone_length_lock:source_based;joint_alignment:anatomical;side_symmetry:strict;

view_specs:core_views:front_view,left_side_view,back_view,right_side_view,3_4_front_left,3_4_front_right;view_labels:enabled;label_position:bottom_center;label_text:angle_name;

projection:orthographic;distortion:0%;focal_length:infinite;camera_height:body_midline;rotation_axis:global_y;

alignment:global_grid_aligned;centerline:spine_aligned;footing:shared_ground_line;scale_lock:height_match;mirror_consistency:left_right_symmetry;

composition_layout:subject_fill_ratio:92%;panel_margin:1%;gutter:6px;background:solid_flat;bg_color_hex:#2E2E2E;bg_shadows:disabled;bg_projections:disabled;bg_texture:none;

layout_detection:input_aspect:auto_detect;
layout_rules:
- condition:detected_aspect>=1.4;output_resolution:auto_width_x_4096;layout:single_row_6_panels;
- condition:detected_aspect<=1.2;output_resolution:4096x4096;layout:double_row_3x2_panels;
- default:output_resolution:4096x4096;layout:double_row_3x2_panels;

output_specs:format:PNG;bit_depth:8;color_profile:sRGB;compression:lossless;dpi:300;file_naming:{timestamp}_reference_sheet;

style_constraint:source_preservation:100%;lighting:flat_ambient_only;shadows:disabled;reflections:disabled;contrast:neutral;

consistency_rules:scale_tolerance:<0.1%;pose_variation:<0.1deg;proportion_guard:source_locked;symmetry:>99%;

qa_checks:layout_verification:enabled;subject_size_check:enabled;background_purity:enabled;angle_labeling:enabled;proportion_drift:disabled;

```

![bg fit left:50% vertical](https://i.imgur.com/mXcYjoa.webp)

![bg fit left:50% vertical](https://i.imgur.com/dRtdCwU.webp)
