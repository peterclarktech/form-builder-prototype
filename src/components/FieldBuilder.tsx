import { useEffect, useRef, useState } from "react";
import Dropdown, { DropdownOption } from "./form/Dropdown";
import TextAreaField from "./form/TextArea";
import TextField from "./form/TextField";
import Button, { ButtonType } from "./Button";

export enum FieldType {
    text,
    textarea,
    dropdown,
    radioButtons,
    checkboxes
}

const fieldTypeOptions: Array<DropdownOption> = [
    { text: "Text Field", value: FieldType.text },
    { text: "Text Area", value: FieldType.textarea },
    { text: "Dropdown", value: FieldType.dropdown },
    { text: "Radio Buttons", value: FieldType.radioButtons },
    { text: "Check Boxes", value: FieldType.checkboxes },
];

type FieldOption = {
    id: number,
    text: string
}

export type FieldDetails = {
    title?: string,
    description?: string,
    type: FieldType,
    options: Array<FieldOption>
}

interface FieldBuilderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    onCreateField: (fieldDetails: FieldDetails) => void,
    onCancel: (fieldDetails: FieldDetails) => void,
}
const FieldBuilder: React.FC<FieldBuilderProps> = (props) => {
    const { onCreateField, onCancel, ...htmlProps } = props;
    const [selectedFieldType, setSelectedFieldType] = useState<FieldType>(FieldType.text);
    const [options, setOptions] = useState<Array<FieldOption>>(new Array<FieldOption>());

    const titleRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        setOptions(new Array<FieldOption>());
    }, [selectedFieldType]);

    const addNewOption = () => {
        setOptions((prevOptions) =>
            [...prevOptions, { id: prevOptions.length, text: "" }]);
    }

    const removeLastOption = () => {
        if (options.length > 0)
            setOptions((prevOptions) => prevOptions.slice(0, prevOptions.length - 1));
    }

    const createFieldDetails = () => {
        //Create the FieldDetails object to pass to parent
        let fieldDetails: FieldDetails = {
            title: titleRef.current!.value,
            description: descRef.current!.value,
            type: selectedFieldType,
            options: options
        }

        //TODO: validation here

        return fieldDetails;
    }

    const onOptionChange = (index: number, text: string) => {
        setOptions((prevOptions) => {
            let newOptions = [...prevOptions];
            newOptions[index].text = text;
            return prevOptions;
        });
    }

    return (
        <div className="" {...htmlProps}>
            <div className="mb-4"><h1 className="font-bold text-xl">New Question/Survey Item</h1></div>
            <div className="mb-4"><TextField id="title" ref={titleRef}>Title / Heading</TextField></div>
            <div className="mb-4"><TextAreaField id="description" ref={descRef}>Question / Description</TextAreaField></div>
            <div className="mb-4"><Dropdown id="fieldType" options={fieldTypeOptions}
                onChange={(e) => { setSelectedFieldType(parseInt(e.target.value)) }}>Field Type</Dropdown></div>

            {selectedFieldType !== FieldType.text && selectedFieldType !== FieldType.textarea &&
                <div className="">
                    <h3 className="text-lg font-bold">
                        Add/Remove Options&nbsp;&nbsp;
                        <Button variant={ButtonType.danger} onClick={removeLastOption}><i className="bi bi-dash"></i></Button>
                        &nbsp;&nbsp;
                        <Button variant={ButtonType.primary} onClick={addNewOption}><i className="bi bi-plus"></i></Button>
                    </h3>
                    <ul className="">
                        {options.map((item, index) => <li className="mb-4" key={item.id}><TextField id={item.id + ""} onChange={(e) => { onOptionChange(index, e.target.value) }}>Option {item.id + 1}</TextField></li>)}
                    </ul>
                </div>
            }

            <div className="my-4">
                <span className="float-right">
                    <Button variant={ButtonType.default} onClick={() => { onCancel(createFieldDetails()) }}>
                        &nbsp;&nbsp;Cancel&nbsp;&nbsp;
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant={ButtonType.primary} onClick={() => { onCreateField(createFieldDetails()) }}>
                        &nbsp;&nbsp;Confirm&nbsp;&nbsp;
                    </Button>
                </span>
            </div>
        </div>
    )
}

export default FieldBuilder;