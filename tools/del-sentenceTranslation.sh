for file in *-*.mp4; do
    new_filename=$(echo "$file" | cut -d'-' -f1-4).mp4
    mv "$file" "$new_filename"
done


