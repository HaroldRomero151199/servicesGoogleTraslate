const express = require('express');

//idProyect de GoogleCloud
const projectId = 'topicos-api-de-traductor';

const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate({ projectId });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/translate', async (req, res) => {
    const { text, target } = req.body;
    try {
        const result = await translateText(text, target);
        return res.json({
            result
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error });
    }
});

const translateText = async (text, target) => {
    let [translations] = await translate.translate(text, target);
    translations = Array.isArray(translations) ? translations : [translations];
    console.log(translations);
    return translations[0];
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
