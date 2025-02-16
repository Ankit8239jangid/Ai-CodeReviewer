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

    // Get backend URL properly
    const backendPort = import.meta.env.VITE_BACKEND_URL_PORT?.trim() || import.meta.env.VITE_BACKEND_URL_PORT_2?.trim();
    const backendUrl = `${backendPort}/ai/get-review`;

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const response = await axios.post(backendUrl, { code });
            setReview(response.data);
        } catch (error) {
            console.error("Error fetching review:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen w-full flex md:flex-row flex-col items-center justify-center p-2 gap-4">
            <LeftSection code={code} setCode={setCode} handleSubmit={handleSubmit} />
            <RightSection review={review} loading={loading} />
        </div>
    );
}

export default Main;
