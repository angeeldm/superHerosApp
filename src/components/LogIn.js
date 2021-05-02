import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as LogoSvg} from '../img/SuperheroLogo.svg';
import Button from '../elements/Button';
import {Container, Title} from '../elements/Header';
import Alert from '../elements/Alert';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tokenId, setTokenId] = useState();
    const [alert, setAlert] = useState({});
    const [alertState, setAlertState] = useState(false);
    const history = useHistory();

    const handleChange = (e) => {
        if(e.target.name === "email"){
            setEmail(e.target.value);
        } else{
            setPassword(e.target.value);
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();

        if(email === '' || password === ''){
            setAlertState(true);
            setAlert({
                type: "error",
                message: "Debes completar los campos"
            });
            return;
        } else{
            try {
                const config = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: 
                        JSON.stringify({
                        email: email,
                        password: password
                    }),
                }
                const resp = await fetch('http://challenge-react.alkemy.org', config);
                const datajson = await resp.json();
                console.log(datajson);

                if(datajson.token){
                    setAlertState(true);
                    setAlert({
                        type:"success",
                        message:"Bienvenido"
                    });
                    setTokenId(datajson.token);
                    history.push('/home');
                } else{
                    setAlertState(true);
                    setAlert({
                        type:"error",
                        message:"Hubo un error al validar los datos"
                    });  
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(()=> {
        if(tokenId){
            localStorage.setItem('tokenId', tokenId);
        }
    },[]);

    return (
        <Container>
            <Title>X Force</Title>
            <Logo />
            <form  onSubmit={handleSubmit}>
                <Input name="email" type="text" value={email} onChange={handleChange} placeholder='Correo' />
                <Input name="password" type="password" value={password} onChange={handleChange} placeholder='Contraseña' />
                <Button login type="submit">Ingresar</Button>
            </form>
            <Alert type={alert.type} message={alert.message} alertState={alertState} setAlertState={setAlertState}  />
        </Container>
     
    );
}

const Logo = styled(LogoSvg)`
    width: 100%;

    @media (min-width: 768px){
        width: 30%;
    }
`;

const Input = styled.input`
    padding: 10px 30px;
    border-radius: 5px;
    border: 0.5px solid #c1c1c1;
    width: 100%;
    margin-bottom: 5px;
    text-align: center;

    @media(min-width: 768px){
        width: 80%;
    }
`;
 
export default LogIn;