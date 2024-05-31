import { FC } from "react";

const Loader: FC<{ isLoading: boolean, loadingText?: string }> = ({ isLoading, loadingText = "Loading" }) => {
    return (
        <>
            {isLoading && (
                <div className="flex my-10">
                    <div className="w-10 h-10 z-50 border-8 border-solid border-r-accent border-l-accent border-t-white border-b-white rounded-full animate-spin"></div>
                    <div className="ml-5 font-semibold self-center">{loadingText}...</div>
                </div>)}
        </>
    )
}

export default Loader;