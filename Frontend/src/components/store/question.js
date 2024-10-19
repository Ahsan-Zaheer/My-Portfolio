
import { create } from "zustand";


export const useQAStore = create((set) => ({
    question: "",
    setQuestion: (question) => set({ question }),
    askQuestion: async (question) => {
        if (question === "") {
            return alert("Please ask a question");
        }

        console.log(JSON.stringify({ question }));
        
        const res = await fetch("http://localhost:3000/api/question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",  // Ensure the request is JSON
            },
            body: JSON.stringify({ question }),
        });
        if (res.ok) {
            const data = await res.json();
            set(() => ({ question: [data.data] }));
            return { success: true, message: "Question sent successfully", answer: data.data };
        }
        else {
            throw new Error('Failed to resolve the question');
        }  
    }
}));



