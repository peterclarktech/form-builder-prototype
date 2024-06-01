import Button, { ButtonType } from "./Button";
import { FieldDetails, FieldType } from "./FieldBuilder";
import CheckboxGroup, { CheckboxOption } from "./form/CheckboxGroup";
import Dropdown, { DropdownOption } from "./form/Dropdown";
import RadioGroup, { RadioOption } from "./form/RadioGroup";
import TextAreaField from "./form/TextArea";
import TextField from "./form/TextField";

interface FieldViewerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    fieldDetails: FieldDetails,
    showRemove?: boolean,
    onRemove?: (fieldDetails: FieldDetails) => void,
}
const FieldViewer: React.FC<FieldViewerProps> = (props) => {
    const { fieldDetails, showRemove = false, onRemove = () => { }, ...htmlProps } = props;

    return (
        <div className="flex flex-col text-left" {...htmlProps}>
            <div className="mb-4">
                <h1 className="text-3xl">
                    {fieldDetails.title}
                    {showRemove && <span className="relative float-right">
                        <Button variant={ButtonType.danger} onClick={() => { onRemove(fieldDetails) }}><i className="bi bi-x"></i></Button>
                    </span>}
                </h1>

            </div>
            <div className="mb-4">
                <p className="text-lg">
                    {fieldDetails.description}
                </p>
            </div>

            {fieldDetails.type === FieldType.text &&
                <TextField placeholder="Answer here..."></TextField>
            }

            {fieldDetails.type === FieldType.textarea &&
                <TextAreaField placeholder="Answer here..." />
            }

            {fieldDetails.type === FieldType.dropdown &&
                <Dropdown options={fieldDetails.options.map<DropdownOption>((item) => { return { value: item.text, text: item.text } })}>Please Select One Answer</Dropdown>
            }

            {fieldDetails.type === FieldType.radioButtons &&
                <RadioGroup id={props.id} options={fieldDetails.options.map<RadioOption>((item) => { return { value: item.text, text: item.text } })} />
            }

            {fieldDetails.type === FieldType.checkboxes &&
                <CheckboxGroup id={props.id} options={fieldDetails.options.map<CheckboxOption>((item) => { return { value: item.text, text: item.text } })} />
            }
        </div>
    )
}

export default FieldViewer;