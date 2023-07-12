import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import Navigation from "../components/Navigation";

function Accueil(){
    const dispatch = useDispatch();
    const listProducts = useSelector((state) => state.listProducts);
    //const messageAccueil = useSelector((state)=> state.messageAccueil);
    useEffect(()=>{
        axios
      .get("http://localhost:3000/product")
      .then((response) => {
            const reponse = response.data.products.map((data) => {
                return (
                    <ListItem>
        <Link to={`/Product/${data._id}`}><ListItemText primary={data.name} /></Link>
      </ListItem>
                )
            });
            dispatch({type: "SET_LIST_PRODUCTS", payload: reponse})
      })
      .catch((error) => {
        dispatch({type: "SET_MESSAGE_ACCUEIL", payload: <p>Erreur</p>})
      });
    }, [dispatch])
    return (
        <div>
            <Navigation/>
            <List>
                {listProducts}
            </List>
        </div>
    )
}

export default Accueil