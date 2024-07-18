const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const setupSwagger = require('./swagger');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

setupSwagger(app);

/**
 * @swagger
 * components:
 *   schemas:
 *     DetectionRequest:
 *       type: object
 *       required:
 *         - text
 *       properties:
 *         text:
 *           type: string
 *           description: The text to analyze
 *       example:
 *         text: "This is sample text"
 *     DetectionResponse:
 *       type: object
 *       properties:
 *         score:
 *           type: number
 *           description: Overall score indicating the probability of AI-generated text
 *         sentence_scores:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               score:
 *                 type: number
 *                 description: Score for each sentence
 *               sentence:
 *                 type: string
 *                 description: The analyzed sentence
 *         text:
 *           type: string
 *           description: The analyzed text
 *       example:
 *         score: 0.9998242085867214
 *         sentence_scores:
 *           - score: 0.0006048416698468673
 *             sentence: "This is sample text"
 *         text: "This is sample text"
 */

/**
 * @swagger
 * /detect:
 *   post:
 *     summary: Detect if the text is AI-generated
 *     tags: [Detection]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DetectionRequest'
 *     responses:
 *       200:
 *         description: Detection result
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetectionResponse'
 *       500:
 *         description: Server error
 */
app.post('/detect', async (req, res) => {
    const { text } = req.body;
    try {
        const response = await axios.post('https://api.sapling.ai/api/v1/aidetect', {
            key: process.env.SAPLING_API_KEY,
            text,
        });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.response ? err.response.data.msg : 'Something went wrong!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
