import { Button, TextField } from '@material-ui/core'

import React from 'react'

const login = () => {
    return (
        <div style={{padding:20}}>
            <h1>EMPLOYEE LOGIN</h1>
            <TextField
            fullWidth
            variant="outlined"
            margin="dense"
            label="Name"
            />
            <TextField
            fullWidth
            variant="outlined"
            margin="dense"
            label="Address"
            />
            <TextField 
            fullWidth
            variant="outlined"
            label=" Pin Code"
            type="number"
            margin="dense"
            />
           
             <TextField 
            fullWidth
            variant="outlined"
            label="Phone Number"
            type="number"
            margin="dense"
            />
            <TextField 
            fullWidth
            variant="outlined"
            label="Email-ID"
            type="email"
            margin="dense"
            />
            <TextField 
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            margin="normal"
            />
            <TextField 
            fullWidth
            variant="outlined"
            label="Confirm Password"
            type="password"
            margin="normal"
            />
            <Button
            fullWidth
            color="primary"
            variant="contained"
            property="outline"

            >SUBMIT</Button>
            
            
        </div>
    )
}

export default login
