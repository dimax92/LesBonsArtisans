import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'universal-cookie';
import { Button, TextField, FormControlLabel, Checkbox } from '@mui/material';
import Navigation from '../components/Navigation';


function Creation(){
    const cookies = new Cookies();
    const dispatch = useDispatch();

    const nameInputValue = useSelector((state) => state.nameInputValue);
    const isChecked = useSelector((state) => state.isChecked);
    const priceInputValue = useSelector((state) => state.priceInputValue);
    const ratingInputValue = useSelector((state) => state.ratingInputValue);
    const typeInputValue = useSelector((state) => state.typeInputValue);
    const warrantyYearsInputValue = useSelector((state) => state.warrantyYearsInputValue);

    const messageCreation = useSelector((state)=> state.messageCreation);

    return(
        <div>
            <Navigation />
        <form>
            <TextField label="Name" variant="outlined" type="text" value={nameInputValue} onChange={(e) => dispatch({type: "SET_NAME_INPUT_VALUE", payload: e.target.value})} fullWidth />
            <FormControlLabel label="Available" control={<Checkbox checked={isChecked} onChange={(e) => dispatch({type: "SET_IS_CHECKED", payload: e.target.checked})}/>} />
            <TextField label="Price" variant="outlined" type="number" value={priceInputValue} onChange={(e) => dispatch({type: "SET_PRICE_INPUT_VALUE", payload: e.target.value})} fullWidth />
            <TextField label="Rating" variant="outlined" type="number" value={ratingInputValue} onChange={(e) => dispatch({type: "SET_RATING_INPUT_VALUE", payload: e.target.value})} fullWidth />
            <TextField label="Type" variant="outlined" type="text" value={typeInputValue} onChange={(e) => dispatch({type: "SET_TYPE_INPUT_VALUE", payload: e.target.value})} fullWidth />
            <TextField label="Warranty_Years" variant="outlined" type="number" value={warrantyYearsInputValue} onChange={(e) => dispatch({type: "SET_WARRANTY_YEARS_INPUT_VALUE", payload: e.target.value})} fullWidth />
            <Button type="submit" variant="contained" color="primary" onClick={(e)=>{
              e.preventDefault();
              const bodyProduct = {
                name : nameInputValue, 
                type : typeInputValue, 
                price : priceInputValue, 
                rating : ratingInputValue,
                warranty_years : warrantyYearsInputValue, 
                available : isChecked 
              }
              const config = {
                headers: {
                  'Authorization': `Bearer ${cookies.get('auth')}`
                },
              };
              axios.post(`http://localhost:3000/product/`, bodyProduct, config)
              .then((response) => {
                dispatch({type: "SET_MESSAGE_CREATION", payload: <p>Creation Produit OK</p>})
              })
              .catch((error)=>{
                dispatch({type: "SET_MESSAGE_CREATION", payload: <p>Erreur</p>})
              })
            }}>Ajouter</Button>
        </form>
        {messageCreation}
        </div>
    )
}

export default Creation