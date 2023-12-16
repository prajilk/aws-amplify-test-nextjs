import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1>NextJS App running successfully!</h1>
            <div className="space-x-5 mt-5">
                <Link href={"/client"} className="text-blue-500 underline">
                    Test Client
                </Link>
                <Link href={"/server"} className="text-blue-500 underline">
                    Test Server
                </Link>
            </div>
        </div>
    );
}
