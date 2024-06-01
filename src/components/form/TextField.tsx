import { forwardRef } from "react";


interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode,
    isPassword?: boolean
}
const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const { children, isPassword = false, ...htmlprops } = props;

    return (
        <div className="flex flex-col">
            <span className="">
                <label className="float-left" htmlFor={props.id}>{children}</label>
            </span>
            <span className="">
                <input {...htmlprops} ref={ref} type={isPassword ? "password" : "text"}
                    className="w-full bg-white text-black px-2 pt-4 pb-2 focus:outline-none border-b border-b-gray-light"
                />
            </span>
        </div>
    )
})

export default TextField;