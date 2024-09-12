
export const FullLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex cursor-not-allowed items-center justify-center bg-black bg-opacity-50">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-green-500"></div>
        </div>
    );
};