https://unix.stackexchange.com/a/164056  
https://stackoverflow.com/a/40313706
```bash
find -name "*.flac" -exec bash -c 'ffmpeg -y -i "{}" -codec:a libmp3lame -q:a 0 -map_metadata 0 -id3v2_version 3 -write_id3v1 1 "${0/.flac}.mp3"' {} \;
```
