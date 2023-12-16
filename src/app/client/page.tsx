"use client";

import Link from "next/link";
import { useState } from "react";

async function callServer() {
    try {
        const response = await fetch(`/api/test-client`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const Client = () => {
    const [response, setResponse] = useState<string | null>(null);

    async function testServer() {
        const result = await callServer();
        setResponse(JSON.stringify(result));
    }

    return (
        <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
            <h1>Client Side Rendering</h1>
            <div className="flex flex-col items-center gap-2">
                <button
                    onClick={testServer}
                    className="bg-green-500 rounded-lg px-3 py-2 text-white flex-grow-0 max-w-fit"
                >
                    Test server
                </button>
                <p>{response && `Server Response: ${response}`}</p>
            </div>
            <Link href={"/"} className="text-blue-500 underline">
                Go Home
            </Link>
        </div>
    );
};

export default Client;
