import { create } from "zustand";

export const useMessageStore = create((set) => ({
    message: [],
    setMessage: (message) => set({ message }),
    sendMessage: async (message) => {

        if (!message.name || !message.email || !message.phone || !message.message) {
            return alert("Please fill all fields");
        
        }




        const res = await fetch("http://localhost:3000/api/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( message ),
        });
        if (res.ok) {
            const data = await res.json();
            set((state) => ({ message: [...state.message, data.data] }));

            return { success: true, message: "Message sent successfully" };
        }
    }


}));