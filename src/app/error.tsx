"use client";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            Error: {error.message}
        </div>
    );
};

export default error;
