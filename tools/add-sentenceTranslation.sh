for file in *.mp4; do
    grammar_point=$(echo "$file" | cut -d'-' -f2)
    game_title=$(echo "$file" | cut -d'-' -f3)
    japanese_phrase=$(echo "$file" | cut -d'-' -f4 | cut -d'.' -f1)
    grammar_translation=$(trans "$grammar_point" -s ja -brief -to en | sed 's/[[:punct:]]$//')
    grammar_translation="$(echo ${grammar_translation^})"
    sentence_translation=$(trans "$japanese_phrase" -s ja -brief to en | sed 's/[[:punct:]]$//')
    sentence_translation="$(echo ${sentence_translation^})"
    new_filename=$(echo "$file" | sed "s/\(.*\)-\([^\.]*\)-$game_title-\([^\.]*\).mp4/\1-\2-$grammar_translation-\3-$sentence_translation.mp4/")
    mv "$file" "$new_filename"
done

