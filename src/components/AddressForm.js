import  React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addUserData} from '../states/reducers/cartReducer'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {
    const dispatch = useDispatch();
    const userData = useSelector(state=>state.product.userData)
    const array =[];
    const [formData,setFormData] = useState({});
    const [isDone,setIsDone] = useState(true);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };

    const getData = ()=>{
        dispatch(addUserData(formData))
        setIsDone(false);
    }
    
  return (
    
    <React.Fragment>
{isDone ?
<>
         <Typography variant="h6" gutterBottom>Shipping address</Typography>
       
      <Grid container spacing={3}>
    
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            onChange={handleChange}
            value={formData.firstName || ""}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            onChange={handleChange}
            value={formData.lastName || ""}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            onChange={handleChange}
            value={formData.address1 || ""}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            onChange={handleChange}
            value={formData.address2 || ""}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            onChange={handleChange}
            value={formData.city || ""}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            onChange={handleChange}
            value={formData.state || ""}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            onChange={handleChange}
            value={formData.zip || ""}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            onChange={handleChange}
            value={formData.country || ""}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
       
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <div className=' mt-4' style={{marginLeft:'48%',marginRight:'50%'}}>
        <button className=' btn btn-success' onClick={getData}>Save</button>
        </div>

      </Grid>
      </>
:<div className='ThanksBox'>Your Shipping Information Saved...!</div>}
    </React.Fragment>

  );
}
