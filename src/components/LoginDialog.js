import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContentText, TextField } from '@mui/material';
import { AuthService } from '../service/AuthService';
import cookie from "react-cookies";
import { TOKEN_COOKIE_NAME } from '../constant';

export default function LoginDialog(props) {
  const [errorMsg, setErrorMsg] = React.useState("");

  let username;
  let password;

  const login = () => {
    // Login logic
    AuthService.getJWTToken(username, password)
        .then(response => {
            // 成功的回调函数
            const token = response.data.id_token;
            cookie.save(TOKEN_COOKIE_NAME, token);
            window.location.reload(); //refresh the whole page to activate JWT token
        }).catch(error => {
            // 失败的回调函数
            console.error(error);
            setErrorMsg(error);
        });
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Enter Username & Password"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            fullWidth
            variant="standard"
            onChange={(event => username = event.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(event => password = event.target.value)}
          />
          <DialogContentText id="alert-dialog-description" style={{"color": "red"}}>
            {errorMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={login}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}