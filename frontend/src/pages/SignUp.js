import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
import { Button, TextField } from '@mui/material';
import Navigation from "../components/Navigation";

function SignUp(){
    const dispatch = useDispatch();
    const username = useSelector((state)=> state.username);
    const password = useSelector((state)=> state.password);

    const messageSignUp = useSelector((state)=> state.messageSignUp)
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
                axios.post("http://localhost:3000/signup", data)
                .then((response)=>{
                    console.log(response)
                    dispatch({type: "SET_MESSAGE_SIGNUP", payload: <p>Creation Compte OK</p>})
                })
                .catch((error)=>{
                    console.log(error)
                    dispatch({type: "SET_MESSAGE_SIGNUP", payload: <p>Erreur</p>})
                })
            }}>S'inscrire</Button>
        </form>
        {messageSignUp}
        </div>
    )
}

export default SignUp
