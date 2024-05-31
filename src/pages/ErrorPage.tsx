import { FC } from "react";
import PageSection from "../components/PageSection";

const ErrorPage: FC<{ title?:string, message?: string }> = ({ title, message }) => {
    if (!title) title = "Error";
    if (!message) message = "Something went wrong with your last action.";
    return (
        <>
            <PageSection title={title} subtitle={message} hasBottomBorder={false}>
            </PageSection>
        </>
    )
}

export default ErrorPage;