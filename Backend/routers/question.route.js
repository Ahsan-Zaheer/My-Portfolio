import express from "express";
import { ChatOpenAI } from "@langchain/openai";
import { loadQARefineChain } from "langchain/chains";
import { Document } from '@langchain/core/documents';
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from '@langchain/openai';

const router = express.Router();

const qa = async (question) => {
    // Ensure that the question is valid
    if (!question || typeof question !== "string") {
        throw new Error("Invalid question provided.");
    }
    
    const content = `
        My Name is Ahsan Zaheer.
        I am a boy currently in the 5th semester of a Bachelor of Science in Computer Science, born on December 15, 2004. 
        I am a passionate and creative web developer, committed to delivering exceptional work that merges innovation with elegance. 
        I am highly skilled in React.js and Next.js, with a strong background in both Front-End and Full-Stack development. 
        I have 2 years of professional experience, specializing in leveraging the MERN stack to build top-notch websites and applications.

        In my professional journey:
        - I have done 30+ projects, including websites, web applications, and mobile applications, for clients across various industries.
        - I have developed and launched high-performance, user-friendly websites for local clients like Hilray, Aethon, Gadgetland, and Smartpack, which increased their online traffic by an average of 40%.
        - I worked as a Full Stack Developer at Digital Energy AU (2023-2024), where I developed a company website using the MERN stack, boosting site traffic by over 30% within three months of its launch.
        I also worked as a WordPress Developer at Code Notice (2022-2023), where I redesigned the UX/UI of the company website, which led to a 50% increase in user retention.

        My educational background:
        - I completed my Matriculation from Central Model School Lahore in 2020.
        - I completed Intermediate from Punjab College in 2022.
        - Currently, I am pursuing a BSCS degree from Virtual University, Pakistan.

        I learned web development through platforms like Frontend Masters, CodeWithHarry, FreeCodeCamp, and Udemy, which helped me gain proficiency in the field.

        My Social Media:
        - Instagram: https://www.instagram.com/btw_me_ahsan/
        - Github: https://github.com/Ahsan-Zaheer
        - LinkedIn: https://www.linkedin.com/in/ahsan-zaheer-55101b280/
        - Email: dev.ahsan18@gmail.com
        - Phone: +923244695160
        - Facebook: https://www.facebook.com/SlasherWolf47
    `;

    const docs = [new Document({
        pageContent: content,
    })];

    const model = new ChatOpenAI({
        temperature: 0,
        modelName: 'gpt-4o-mini',
        apiKey: process.env.OPEN_AI_KEY
    });

    const chain = loadQARefineChain(model);
    
    // Embeddings creation
    const embeddings = new OpenAIEmbeddings({
        openAIApiKey: process.env.OPEN_AI_KEY
    });

    try {
        // MemoryVectorStore expects an array of documents
        const store = await MemoryVectorStore.fromDocuments(docs, embeddings);

        // Perform similarity search using the question
        const relevantDocs = await store.similaritySearch(question);

        if (relevantDocs.length === 0) {
            return "No relevant documents found to answer the question.";
        }

        const res = await chain.invoke({
            input_documents: relevantDocs,
            question,
        });

        return res.output_text;

    } catch (error) {
        console.error("Error during QA processing:", error);
        throw new Error("Failed to process the question. Please try again.");
    }
};

router.post("/", async (req, res) => {
    const { question } = req.body;

    try {
        if (!question) {
            throw new Error("Question is required.");
        }
        
        const answer = await qa(question);
        res.status(201).json({
            success: true,
            data: answer,
            message: "Question resolved successfully"
        });
    } catch (error) {
        console.error("Error in route:", error.message);
        res.status(500).json({
            success: false,
            message: error.message || "Question not resolved"
        });
    }
});

export default router;
