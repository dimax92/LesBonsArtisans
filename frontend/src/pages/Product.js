import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { Button, Card } from '@mui/material';
import Navigation from '../components/Navigation';

function Product(){
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const messageProduct = useSelector((state)=> state.messageProduct)
    const {id} = useParams();
    useEffect(()=>{
      const cookies = new Cookies();
      axios
      .get(`http://localhost:3000/product/${id}`)
      .then((response) => {
        dispatch({type: "SET_PRODUCT", payload: <div>
            <h1>{response.data.name}</h1>
            <h2>Available</h2>
            <p>{response.data.available}</p>
            <h2>Price</h2>
            <p>{response.data.price}</p>
            <h2>Rating</h2>
            <p>{response.data.reting}</p>
            <h2>Type</h2>
            <p>{response.data.type}</p>
            <h2>Warranty_years</h2>
            <p>{response.data.warranty_years}</p>
            <Button type="submit" variant="contained" color="primary">
            <Link to={`/Modification/${id}`}>Modifier</Link>
            </Button>
            <Button type="submit" variant="contained" color="primary" onClick={(e)=>{
              e.preventDefault();
              const config = {
                headers: {
                  'Authorization': `Bearer ${cookies.get('auth')}`
                },
              };
              axios.delete(`http://localhost:3000/product/${id}`, config)
              .then((response) => {
                console.log(response)
                dispatch({type: "SET_MESSAGE_PRODUCT", payload: <p>Suppression Produit OK</p>})
              })
              .catch((error)=>{
                console.log(error)
                dispatch({type: "SET_MESSAGE_PRODUCT", payload: <p>Erreur</p>})
              })
            }}>Supprimer</Button>
        </div>})
      })
      .catch((error)=>{console.log(error)})
    }, [dispatch, id])

    return(
      <div>
        <Navigation/>
        <Card variant="outlined">
            {product}
            {messageProduct}
        </Card>
      </div>
    )
}

export default Product