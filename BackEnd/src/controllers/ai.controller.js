import generateContent from "../services/ai.service.js";

export const getReview = async (req, res) => {
    const code= req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    try {
        const response = await generateContent(code);
        res.send(response);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
};
