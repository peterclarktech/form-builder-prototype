import FieldBuilder from '../components/FieldBuilder';
import FormPreview from '../components/FormPreview';
import PageSection from '../components/PageSection';

import ColorGroup from '../utils/ColorGroup';

export default function HomePage() {
    // const appContext = useContext(AppContext);
    // const userDarkMode = useUserDarkMode();

    // let isDarkMode = appContext.darkmode === DarkMode.on || 
    // (appContext.darkmode === DarkMode.auto && userDarkMode.isDarkMode);

    return (
        <div className="flex flex-1 w-full">
            <div className='w-full text-center'>
            <PageSection title="Start Creating your Form" 
                subtitle="" 
                colorGroup={ColorGroup.inherit}
                hasBottomBorder>
                <FieldBuilder>
                    
                </FieldBuilder>
            </PageSection>
            <PageSection title="Form Preview" colorGroup={ColorGroup.inherit}>
                <FormPreview />
            </PageSection>
            </div>
        </div>
    )
}