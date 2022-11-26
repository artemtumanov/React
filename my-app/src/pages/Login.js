import { useState } from "react";
import { Button, Box, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from "react-router-dom";
import useAuth from "../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth =useAuth();
    const navigate  = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const handleEMailInput = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }
    const submitLogin = async (e) => {
        e.preventDefault(); 
        setError('');
        try{
            await auth.signin({email, password}, () => {
                setTimeout(()=> navigate(from, {replace: true}), 2000);
            });

        }catch(er){
            setError(er);
            console.log(er);
        }

    }



    return (
    <Box
        component="form"
        sx={{
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            marginTop: 2,           
            '& .MuiTextField-root': { m: 1, width: '25ch' },              
        }}
        noValidate
        //autoComplete="off"
    >
        <div>
        <TextField
            id="outlined-textarea"
            label="E-Mail"
            placeholder="E-mail"
            onChange={handleEMailInput}
            value={email}
            type='email'
            name='email'
        />
        </div><div>
        <TextField
            id="outlined-textarea"
            label="Пароль"
            placeholder="Password"           
            onChange={handlePasswordInput}
            value={password}           
        />
        </div>
        {error && <p>{error}</p>}
        <Button variant="contained" onClick={submitLogin} endIcon={<SendIcon />}>
            Вход
        </Button>
        <p>Нет учетной записи? <Link to='/registration'>Регистрация</Link></p>
    </Box>)
}
export default Login;