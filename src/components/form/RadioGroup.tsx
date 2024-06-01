
export type RadioOption = {
    text: string,
    value: string | number
}
interface RadioGroupProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    options: Array<RadioOption>
}
const RadioGroup: React.FC<RadioGroupProps> = (props) => {
    const { children, options, ...htmlprops } = props;

    return (
        <div className="flex items-center space-x-4" {...htmlprops}>
            {options.map((option, index) => {
                return <label key={props.id + "_radiobtn" + index} className="inline-flex items-center">
                    <input type="radio" name={props.id} value={option.value} />
                    <span className="ml-2">{option.text}</span>
                </label>
            })}
        </div>

    )
}

export default RadioGroup;