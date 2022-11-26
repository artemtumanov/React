
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {

  return (
    <div>      
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Регистрация</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>          
          <Button onClick={props.handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
