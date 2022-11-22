import { useState } from "react";
import { Button, Box, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from "react-router-dom";
import firebase from "../services/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import FormDialog from "../components/Dialog";



const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    let message = "Вы успешно зарегестрированы"

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleEMailInput = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }
    const submitReg = async (e) => {
        e.preventDefault();
        setError(''); 
        try {
            const auth = getAuth(firebase);
            await createUserWithEmailAndPassword(auth, email, password);
            handleOpen();
            setEmail('');
            setPassword(''); 
        } catch (e) {
            setError(e);
            console.log(e);
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
        autoComplete="off"
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
        <Button variant="contained" onClick={submitReg} endIcon={<SendIcon />}>
            Регистрация
        </Button>
        <p>Уже зарегистрирован? <Link to='/login'>Вход</Link></p>
        <FormDialog handleClose={handleClose} open={open} message={message}/>
    </Box>)
}
export default Registration;