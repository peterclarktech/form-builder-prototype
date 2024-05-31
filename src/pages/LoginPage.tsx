
import { KeyboardEventHandler, useContext, useRef } from 'react';
import AppContext from '../contexts/AppContext';
import PageSection from '../components/PageSection';
import TextField from '../components/form/TextField';
import Button, { ButtonType } from '../components/Button';
import ColorGroup from '../utils/ColorGroup';
import Panel from '../components/Panel';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC<{}> = () => {
    const appContext = useContext(AppContext);
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleLogin = () => {
        if(!usernameRef.current?.value! || !passwordRef.current?.value!) return;
        //note: below is just a sample code to simulate login, 
        //replace with server login code for real applications
        appContext.setUser({ username: usernameRef.current?.value!, firstname: usernameRef.current?.value! });
        navigate("/crudsample/users");
    };

    const handleKeyDown: KeyboardEventHandler = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <div className='flex-1'>
            <PageSection hasBottomBorder={false}>
                <Panel colorGroup={ColorGroup.accent}>
                        <h1 className="text-center mb-2 text-5xl font-bold">Welcome to React Boilerplate!</h1>
                        <h1 className="text-center mb-14 text-2xl">Please login to proceed</h1>
                        <div className="mb-5">
                            <TextField
                                ref={usernameRef}
                                id="username"
                                placeholder="Username/email" 
                                onKeyDown={handleKeyDown}>Username</TextField>
                        </div>
                        <div className="mb-5">
                            <TextField
                                id="password"
                                isPassword
                                ref={passwordRef}
                                placeholder="********" 
                                onKeyDown={handleKeyDown}>Password</TextField>
                        </div>
                        <div className="mb-5 text-center">
                            <Button variant={ButtonType.positive} onClick={handleLogin}>Login</Button>
                        </div>
                </Panel>
            </PageSection>
        </div>
    );
};

export default LoginPage;
