import TextField from "./form/TextField";

interface FieldBuilderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
}
const FieldBuilder: React.FC<FieldBuilderProps> = (props) => {
    return (
        <div className="" {...props}>
            <TextField >Name: </TextField>
            
        </div>
    )
}

export default FieldBuilder;