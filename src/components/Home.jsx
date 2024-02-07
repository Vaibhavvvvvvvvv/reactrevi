import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import About from './About'; 

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        
        const hardcodedEmail = 'vaibhav@gmail.com';
        const hardcodedPassword = 'vaibhav1122';

        if (email === hardcodedEmail && password === hardcodedPassword) {
            setLoggedIn(true);
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            {!loggedIn ? (
                <>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <Button variant="contained" onClick={handleLogin}>
                        Login
                    </Button>
                </>
            ) : (

                <About />
            )}
        </Box>
    );
};

export default Home;
