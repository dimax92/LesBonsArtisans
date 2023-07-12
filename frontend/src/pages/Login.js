import { useDispatch, useSelector } from "react-redux"
import Cookies from 'universal-cookie';
import axios from "axios";
import { Button, TextField } from '@mui/material';
import Navigation from "../components/Navigation";

function Login(){
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const username = useSelector((state)=> state.username);
    const password = useSelector((state)=> state.password);

    const messageLogin = useSelector((state)=> state.messageLogin)
    return (
        <div>
            <Navigation/>
        <form>
            <TextField label="Username" variant="outlined" type="text" value={username} onChange={(e)=>{dispatch({type: "SET_USERNAME", payload: e.target.value})}} fullWidth />
            <TextField label="Password" variant="outlined" type="password" value={password} onChange={(e)=>{dispatch({type:"SET_PASSWORD", payload: e.target.value})}} fullWidth />
            <Button type="submit" variant="contained" color="primary" onClick={(e) => {
                e.preventDefault();
                const data = {
                    username: username,
                    password: password
                }
                axios.post("http://localhost:3000/login", data)
                .then((response)=>{
                    console.log(response)
                    cookies.set('auth', response.data.token);
                    dispatch({type: "SET_MESSAGE_LOGIN", payload: <p>Authentification OK</p>})
                })
                .catch((error)=>{
                    console.log(error)
                    dispatch({type: "SET_MESSAGE_LOGIN", payload: <p>Erreur</p>})
                })
            }}>Se connecter</Button>
        </form>
        {messageLogin}
        </div>
    )
}

export default Login