import React, { useEffect, useState } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './CustomTextField';
import { commerce } from '../../lib/commerce';

function AddressForm({ checkoutToken }) {
  const methods = useForm();
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
  const [shippingSubDivision, setShippingSubDivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    setShippingCountries(countries);
    //object convert into array
    setShippingCountry(Object.keys(countries)[5]);
  }

  let couu = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [])

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <FormInput required name='firstName' label='First Name' />
            <FormInput required name='LastName' label='Last Name' />
            <FormInput required name='address' label='Address' />
            <FormInput required name='email' label='E mail' />
            <FormInput required name='city' label='City' />
            <FormInput required name='zip' label='ZIP / Postal Code' />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {
                  couu.map((country) => (
                    <MenuItem key={country.id} value={country.id}>{country.label}</MenuItem>
                  ))
                }
              </Select>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value='' fullWidth onChange=''>
                <MenuItem key='' value=''>
                  fghfghfh
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value='' fullWidth onChange=''>
                <MenuItem key='' value=''>
                  fghfghfh
                </MenuItem>
              </Select>
            </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}

export default AddressForm