```bash
input='/Users/yamlam/Downloads/hq6SNMU - Imgur.mp4'
palette="${input%.mp4}_palette.png"
output="${input%.mp4}.gif"

ffmpeg -i "$input" -vf "fps=30,scale=320:-1:flags=lanczos,palettegen" "$palette"
ffmpeg -i "$input" -i "$palette" -filter_complex "fps=30,scale=320:-1:flags=lanczos[x];[x][1:v]paletteuse" "$output"

```