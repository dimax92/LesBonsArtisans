import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
          <Link to={`/`}>Accueil</Link>
          </Typography>
          <Typography variant="h6">
          <Link to={`/SignUp`}>SignUp</Link>
          </Typography>
          <Typography variant="h6">
          <Link to={`/Login`}>Login</Link>
          </Typography>
          <Typography variant="h6">
          <Link to={`/Creation`}>Creation</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  export default Navigation
  
  
  
  
  
  