import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label }) {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            {/* you tube way comes error */}
            {/* <Controller
                as={TextField}
                control={control}
                fullWidth
                name={name}
                label={label}
                required={required}
            /> */}

            {/* this is my way */}
            <Controller
                render={
                    ({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label={label}
                        />
                    )}
                control={control}
                name={name}
            />
        </Grid>
    )
}

export default FormInput