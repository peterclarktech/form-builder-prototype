import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'

import { useContext, useState, version } from 'react'
import PageSection from '../components/PageSection';
import Card from '../components/Card';

import useUserDarkMode from '../hooks/useUserDarkMode';
import ColorGroup, { DarkMode } from '../utils/ColorGroup';
import Button, { ButtonType } from '../components/Button';
import AppContext from '../contexts/AppContext';

export default function HomePage() {
    const [count, setCount] = useState(0);
    const appContext = useContext(AppContext);
    const userDarkMode = useUserDarkMode();

    let isDarkMode = appContext.darkmode === DarkMode.on || 
    (appContext.darkmode === DarkMode.auto && userDarkMode.isDarkMode);

    let tailwindsvgpath = isDarkMode ? "/tailwind-dark.svg" : "/tailwind.svg";

    return (
        <>
            <PageSection title="Start Coding" 
                subtitle="Hit the ground running with this React boilerplate project using Vite and Tailwind CSS." 
                colorGroup={ColorGroup.inherit}>
                <Card colorGroup={ColorGroup.positive} image={{ src: "/coding-guy.png", alt: "start coding now!", width: 250 }}>
                    <div className="flex flex-col gap-5">
                        <p className="text-lg">
                            <span className="font-bold">React ({version})</span> lets you build user interfaces out of individual pieces called components. Create your own React components then combine them into entire screens, pages and apps.
                        </p>
                        <p className="text-lg">
                            <span className="font-bold">Vite</span> provides many enhancements over native ESM imports to support various features that are typically seen in bundler-based setups.
                        </p>
                        <p className="text-lg">
                            <span className="font-bold">Tailwind CSS</span> is a utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.
                        </p>
                    </div>
                </Card>
            </PageSection>
            <PageSection title="Vite + React" 
                subtitle="Click on the Vite and React logos to learn more" 
                colorGroup={ColorGroup.dark}>
                <div className="flex my-10">
                    <div className="mx-auto flex flex-row gap-10">
                        <a href="https://vitejs.dev" target="_blank">
                            <img src={viteLogo} className="p-6 h-56 hover:drop-shadow-xl-vite transition filter delay-100" alt="Vite logo" />
                        </a>
                        <a href="https://react.dev" className="" target="_blank">
                            <img src={reactLogo} className="p-6 h-56 hover:drop-shadow-xl-react animate-spin-slow transition filter delay-100" alt="React logo" />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <Button variant={ButtonType.default} onClick={() => setCount((count) => count + 1)}>
                        Count is {count}
                    </Button>
                    <br />
                    <br />
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
            </PageSection>
            <PageSection title="Tailwind CSS" 
                subtitle="Rapidly build modern websites without ever leaving your HTML" 
                colorGroup={ColorGroup.accent}>
                <div className="flex my-10">
                    <div className="mx-auto flex flex-row">
                        <div>
                            Visit their official website to learn more &nbsp;
                        </div>
                        <a href="https://tailwindcss.com" target="_blank">
                            <img src={tailwindsvgpath} width={200} />
                        </a>
                    </div>
                </div>
            </PageSection>
        </>
    )
}