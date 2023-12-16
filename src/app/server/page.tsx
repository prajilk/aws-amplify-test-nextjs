import Link from "next/link";

const Server = async () => {
    // const response = await fetch("/api/test-client");
    // const result = await response.json();

    return (
        <div className="flex justify-center gap-3 flex-col items-center min-h-screen">
            <h1>Server Side Rendering</h1>
            {/* <p>Server Response: {JSON.stringify(result)}</p> */}
            <Link href={"/"} className="text-blue-500 underline">
                Go Home
            </Link>
        </div>
    );
};

export default Server;
