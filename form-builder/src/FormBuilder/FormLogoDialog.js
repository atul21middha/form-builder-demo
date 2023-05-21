import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import { useState } from "react";

const FormLogoDialog = (props) => {
  const { onClose, open, onSubmit } = props;
  const [link, setLink] = useState("");

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Enter Logo Link</DialogTitle>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(link);
        }}
      >
        <DialogContent>
          <DialogContentText mb={2}>
            To set the logo in the form, enter the logo link in the textfield
            below.
          </DialogContentText>
          <TextField
            autoFocus
            label="Logo Link"
            fullWidth
            variant="outlined"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FormLogoDialog;
