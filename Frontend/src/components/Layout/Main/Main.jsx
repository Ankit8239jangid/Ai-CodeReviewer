import React, { useEffect, useState } from 'react';
import LeftSection from '../LeftSction';
import RightSection from '../RightSection';
import axios from 'axios';

function Main() {
    const [code, setCode] = useState(`// Start Writing code and Chat from here`);
    const [review, setReview] = useState("");
    const [loding, setLoding] = useState(false)

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/ai/get-review', { code });
            setReview(response.data);
        } catch (error) {
            console.error("Error fetching review:", error);
        }
    };

    return (
        <div className="h-screen w-full flex md:flex-row flex-col items-center justify-center p-2 gap-4">
            <LeftSection code={code} setCode={setCode} handleSubmit={handleSubmit} />
            <RightSection review={review} loding={loding} setLoding={setLoding} />
        </div>
    );
}

export default Main;
