import { forwardRef } from "react";

export type DropdownOption = {
    text: string,
    value: string | number
}
interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode,
    options: Array<DropdownOption>
}
const Dropdown: React.FC<DropdownProps> = forwardRef<HTMLSelectElement, DropdownProps>((props, ref) => {
    const { children, options, ...htmlprops } = props;

    return (
        <div className="flex flex-col">
            <span className="">
                <label className="float-left" htmlFor={htmlprops.id}>{children}</label>
            </span>
            <span className="">
                <select ref={ref} className="w-full bg-white text-black pt-4 pb-4 px-2 focus:outline-none border border-gray-light hover:cursor-pointer"
                    {...htmlprops}>
                    {options.map((option) => <option value={option.value} key={htmlprops.id+"_"+option.value}>{option.text}</option>)}
                </select>
            </span>
        </div>
    )
});

export default Dropdown;