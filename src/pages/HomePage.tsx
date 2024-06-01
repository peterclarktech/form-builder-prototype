import { useState } from 'react';
import FieldBuilder, { FieldDetails } from '../components/FieldBuilder';
import PageSection from '../components/PageSection';
import Panel from '../components/Panel';

import ColorGroup from '../utils/ColorGroup';
import Button, { ButtonType } from '../components/Button';
import FieldViewer from '../components/FieldViewer';

export default function HomePage() {
    const [fields, setFields] = useState<Array<FieldDetails>>([]);
    const [creatingField, setCreatingField] = useState<boolean>(true);

    const onCreateField = (fieldDetails: FieldDetails) => {
        setFields((prevFields) => [...prevFields, fieldDetails]);

        setCreatingField(false);
    }

    const onCancelField = () => {
        setCreatingField(false);
    };

    const removeField = (i: number) => {
        setFields((prevFields => prevFields.filter((_item, index) => index !== i)));
    }

    return (
        <div className="flex flex-1 w-full">
            <div className='w-full text-center'>
                <PageSection title="Sample Form"
                    subtitle="Create a customized questionnaire or survey"
                    colorGroup={ColorGroup.inherit}
                    hasBottomBorder>

                    {fields.length == 0 &&
                        <h3 className="text-gray-dark text-xl font-light mb-4">
                            Add your first Question or Survey Item to begin...
                        </h3>
                    }

                    {fields.length > 0 &&
                        fields.map((field, index) => {
                            return <Panel key={`formpanel_${field.title}`} colorGroup={ColorGroup.normal}>
                                <FieldViewer id={index + "" + field.title} key={"formfield_" + index + field.title} fieldDetails={field} showRemove onRemove={() => removeField(index)}/>
                            </Panel>
                        })
                    }

                    {creatingField &&
                        <Panel colorGroup={ColorGroup.normal}>
                            <FieldBuilder onCreateField={onCreateField} onCancel={onCancelField} />
                        </Panel>
                    }

                    {!creatingField &&
                        <>
                            <div className="w-full mt-10">
                                <Button variant={ButtonType.default} onClick={() => setCreatingField(true)}>
                                    <i className="bi bi-plus"></i> New Question / Survey Item
                                </Button>
                            </div>
                            <div className="w-full mt-20">
                                <Button variant={ButtonType.danger} onClick={() => setFields([])}>RESET</Button>
                                <Button variant={ButtonType.primary} onClick={() => {/*TODO: Save Form to Backend*/}}>FINISH FORM</Button>
                            </div>
                        </>
                    }

                </PageSection>
                
            </div>
        </div>
    )
}