
export type CheckboxOption = {
    text: string,
    value: string | number
}
interface CheckboxGroupProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    options: Array<CheckboxOption>
}
const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
    const { children, options, ...htmlprops } = props;

    return (
        <div className="flex items-center space-x-4" {...htmlprops}>
            {options.map((option, index) => {
                return <label key={props.id + "_chkbox" + index} className="inline-flex items-center">
                    <input type="checkbox" name={props.id} value={option.value} />
                    <span className="ml-2">{option.text}</span>
                </label>
            })}
        </div>

    )
}

export default CheckboxGroup;