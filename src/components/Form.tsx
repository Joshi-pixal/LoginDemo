import { Button, TextField, Typography, Link } from '@mui/material'
import { Box } from '@mui/system'
// import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div className="App">
    <Box sx={{ mt: 20, ml: 70, justifyContent: "center" }}>
      <Typography sx={{ml:8}}>Login Form</Typography>
      <br />
      <TextField id="User" type="text" label="User ID">
        Email or Phone
      </TextField>
      <br />
      <TextField
        sx={{ mt: 2 }}
        id="password-input"
        label="Id"
        type="password"
        autoComplete="current-password"
      />
      <br />
      <Button sx={{ mt: 2, ml: 8 }} variant="contained">
        Login
      </Button>
      <br />
      <Typography sx={{ mt: 2 }}>
        Not a member? Sign up
        <Link sx={{ ml: 1 }} href="#" underline="none">
          {"Now"}
        </Link>
      </Typography>
    </Box>
  </div>
  )
}

export default Form