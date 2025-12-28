#!/bin/bash
# GPT-5.2 Web Search Script
# Usage: ./gpt-search.sh "your search query"

export PYTHONIOENCODING=utf-8
export PYTHONUTF8=1

QUERY="$1"

if [ -z "$QUERY" ]; then
    echo "Usage: ./gpt-search.sh \"your search query\""
    exit 1
fi

if [ -z "$OPENAI_API_KEY" ]; then
    echo "Error: OPENAI_API_KEY not set"
    exit 1
fi

curl -s "https://api.openai.com/v1/responses" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d "{\"model\": \"gpt-5.2\", \"reasoning\": {\"effort\": \"medium\"}, \"tools\": [{\"type\": \"web_search\"}], \"input\": \"$QUERY\"}" \
  | python3 -c "
import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
data = json.load(sys.stdin)
for item in data.get('output', []):
    if item.get('type') == 'message':
        for content in item.get('content', []):
            if content.get('type') == 'output_text':
                print(content.get('text', ''))
"
