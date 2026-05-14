#!/bin/bash
# Generate all 4 audio files from the 4 scripts
# Splits each script into ~50% chunks for faster parallel generation

BASE="/root/.openclaw/workspace/agent-c1b6de5a"
SCRIPTS_DIR="$BASE/scripts"
AUDIO_DIR="$BASE/public/audio"
mkdir -p "$AUDIO_DIR"

# Function to split a file into N roughly equal parts by line count
split_into_n() {
  local file="$1"
  local n="$2"
  local prefix="$3"
  local total_lines=$(wc -l < "$file")
  local lines_per_part=$(( (total_lines + n - 1) / n ))
  split -l "$lines_per_part" "$file" "$prefix"
}

# Generate audio for a text chunk
gen_chunk() {
  local text_file="$1"
  local output="$2"
  local voice="${3:-zh-CN-XiaoxiaoNeural}"
  edge-tts -f "$text_file" -v "$voice" --write-media "$output" 2>/dev/null
}

# Concatenate mp3 files
concat_mp3() {
  local input_list="$1"
  local output="$2"
  # Create concat file list
  > /tmp/concat_list.txt
  for f in $(cat "$input_list"); do
    echo "file '$f'" >> /tmp/concat_list.txt
  done
  ffmpeg -y -f concat -safe 0 -i /tmp/concat_list.txt -c copy "$output" 2>/dev/null
}

echo "=== Starting audio generation ==="

# === SCRIPT 1: fund-intro ===
echo "[1/4] Generating fund-intro..."
split_into_n "$SCRIPTS_DIR/script-1-intro.txt" 2 /tmp/s1_
gen_chunk /tmp/s1_aa /tmp/s1a.mp3 &
gen_chunk /tmp/s1_ab /tmp/s1b.mp3 &
wait
echo "/tmp/s1a.mp3" > /tmp/s1_list.txt
echo "/tmp/s1b.mp3" >> /tmp/s1_list.txt
concat_mp3 /tmp/s1_list.txt "$AUDIO_DIR/fund-intro.mp3"
echo "  -> fund-intro.mp3 done"

# === SCRIPT 2: fund-principles ===
echo "[2/4] Generating fund-principles..."
split_into_n "$SCRIPTS_DIR/script-2-principles.txt" 2 /tmp/s2_
gen_chunk /tmp/s2_aa /tmp/s2a.mp3 &
gen_chunk /tmp/s2_ab /tmp/s2b.mp3 &
wait
echo "/tmp/s2a.mp3" > /tmp/s2_list.txt
echo "/tmp/s2b.mp3" >> /tmp/s2_list.txt
concat_mp3 /tmp/s2_list.txt "$AUDIO_DIR/fund-principles.mp3"
echo "  -> fund-principles.mp3 done"

# === SCRIPT 3: fund-allocation ===
echo "[3/4] Generating fund-allocation..."
split_into_n "$SCRIPTS_DIR/script-3-allocation.txt" 2 /tmp/s3_
gen_chunk /tmp/s3_aa /tmp/s3a.mp3 &
gen_chunk /tmp/s3_ab /tmp/s3b.mp3 &
wait
echo "/tmp/s3a.mp3" > /tmp/s3_list.txt
echo "/tmp/s3b.mp3" >> /tmp/s3_list.txt
concat_mp3 /tmp/s3_list.txt "$AUDIO_DIR/fund-allocation.mp3"
echo "  -> fund-allocation.mp3 done"

# === SCRIPT 4: fund-companies ===
echo "[4/4] Generating fund-companies..."
split_into_n "$SCRIPTS_DIR/script-4-companies.txt" 3 /tmp/s4_
gen_chunk /tmp/s4_aa /tmp/s4a.mp3 &
gen_chunk /tmp/s4_ab /tmp/s4b.mp3 &
gen_chunk /tmp/s4_ac /tmp/s4c.mp3 &
wait
echo "/tmp/s4a.mp3" > /tmp/s4_list.txt
echo "/tmp/s4b.mp3" >> /tmp/s4_list.txt
echo "/tmp/s4c.mp3" >> /tmp/s4_list.txt
concat_mp3 /tmp/s4_list.txt "$AUDIO_DIR/fund-companies.mp3"
echo "  -> fund-companies.mp3 done"

echo ""
echo "=== All done! Output files ==="
ls -lh "$AUDIO_DIR"/fund-*.mp3

# Show durations
echo ""
echo "=== Durations ==="
for f in "$AUDIO_DIR"/fund-*.mp3; do
  dur=$(ffprobe -i "$f" -show_entries format=duration -v quiet -of csv=p=0 2>/dev/null)
  min=$(echo "scale=1; $dur/60" | bc)
  echo "$(basename $f): ${min}min (${dur}s)"
done
