import { AppBar, Toolbar, Typography } from '@material-ui/core'

import React from 'react'

const header = () => {
    return (
        <div style={{padding:20}}>
          <AppBar position="fixed" >
              <Toolbar>
                  <Typography>
                      EMPLOYEE REGISTRATION 
                  </Typography>
              </Toolbar>
          </AppBar>
        </div>
    )
}

export default header
