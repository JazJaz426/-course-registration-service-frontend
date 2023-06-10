import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LoginDialog from './LoginDialog';
import cookie from "react-cookies";
import { TOKEN_COOKIE_NAME } from '../constant';

export default function MenuBar() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    if (hasLoggedIn) {
      //已经login，执行logout逻辑 -> remove token from cookie
      cookie.remove(TOKEN_COOKIE_NAME);
      window.location.reload(); //刷新
    } else {
      // 没login，弹出login框
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  // JS Truthy
  let hasLoggedIn = !!cookie.load(TOKEN_COOKIE_NAME); //如果它有value，则用户已经login，如果没有value，则用户没login
  let buttonText = hasLoggedIn ? "Logout" : "Login";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Enrollment System
          </Typography>
          <Button component={Link} to="/" color="inherit">All Courses</Button>
          <Button component={Link} to="/enrolledCourses" color="inherit">Enrolled Courses</Button>
          <Button color="inherit" onClick={handleClickOpen}>{buttonText}</Button>
        </Toolbar>
      </AppBar>
      <LoginDialog open={open} handleClose={handleClose}/>
    </Box>
  );
}