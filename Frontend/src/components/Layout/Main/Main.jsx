import React, { useState } from 'react';
import LeftSection from '../LeftSction';
import RightSection from '../RightSection';
import axios from 'axios';

function Main() {
    const [code, setCode] = useState(` const welcome = () => {
        console.log("Welcome to the CodeReviewAI!");
    };

 welcome();`);
    const [review, setReview] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:3000/ai/get-review', { code });
            setReview(response.data);
        } catch (error) {
            console.error("Error fetching review:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" h-screen w-full flex md:flex-row flex-col items-center justify-center p-2 gap-4">
            <LeftSection code={code} setCode={setCode} handleSubmit={handleSubmit} />
            <RightSection review={review} loading={loading} />
        </div>
    );
}

export default Main;