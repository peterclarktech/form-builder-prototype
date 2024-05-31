import { forwardRef } from "react";


interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode,
    isPassword?: boolean
}
const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const { children, isPassword = false, ...htmlprops } = props;

    return (
        <div className="grid grid-flow-col grid-cols-2 items-center gap-5 my-5">
            <span>
                <label className="float-right" htmlFor={props.id}>{children}</label>
            </span>
            <span className="">
                <input {...htmlprops} ref={ref} type={isPassword ? "password" : "text"}
                    className="border border-gray-light bg-white text-black rounded-lg py-2 px-4"
                />
            </span>
        </div>
    )
})

export default TextField;