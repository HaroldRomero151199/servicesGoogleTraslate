# servicesGoogleTraslate

curl --location 'localhost:3000/translate' \
--header 'Content-Type: application/json' \
--data '{
    "text": "yo compro una soda",
    "target": "pt"
} '