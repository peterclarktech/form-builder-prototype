import { useState } from 'react';
import Button from '../../components/Button';
import PageSection from '../../components/PageSection';
import TextField from '../../components/form/TextField';

interface User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    middleInitial: string;
}

const UserAddPage: React.FC = () => {
    const [user, setUser] = useState<User>({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        middleInitial: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Handle form submission (e.g., send data to server)
    };

    return (
        <PageSection title="Add User">
            <form onSubmit={handleSubmit}>
                <div>
                    
                </div>
                <div className="grid grid-flow-row grid-rows-6">
                    <TextField placeholder="Username is required"
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                        required
                    >Username: </TextField>
                    <TextField isPassword placeholder='********'
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                        required
                    >Password: </TextField>
                    <TextField
                        id="firstName"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleInputChange}
                        required
                    >First Name: </TextField>

                    <TextField
                        id="lastName"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleInputChange}
                        required
                    >Last Name:</TextField>
                    <TextField
                        id="middleInitial"
                        name="middleInitial"
                        value={user.middleInitial}
                        onChange={handleInputChange}
                        maxLength={1}
                    >Middle Initial: </TextField>
                    <div className=""><Button>Add User</Button></div>
                </div>
            </form>
        </PageSection>
    );
};

export default UserAddPage;
