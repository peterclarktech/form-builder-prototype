import { forwardRef } from "react";


interface TextAreaFieldProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    children?: React.ReactNode
}
const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>((props, ref) => {
    const { children, ...htmlprops } = props;

    return (
        <div className="flex flex-col">
            <span className="">
                <label className="float-left" htmlFor={props.id}>{children}</label>
            </span>
            <span className="">
                <textarea {...htmlprops} ref={ref}
                    className="w-full bg-white text-black pt-4 pb-2 focus:outline-none border-b border-b-gray-light"
                    rows={4}
                />
            </span>
        </div>
    )
})

export default TextAreaField;