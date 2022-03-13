import {
    Button,
    Container,
    Fab,
    FormControlLabel,
    FormLabel,
    makeStyles,
    MenuItem,
    Modal,
    Radio,
    RadioGroup,
    Snackbar,
    TextField,
    Tooltip,
  } from "@material-ui/core";
  import { Add as AddIcon } from "@material-ui/icons";
  import { useState } from "react";
  import MuiAlert from "@material-ui/lab/Alert";
  import Select, { SelectChangeEvent } from '@mui/material/Select';
  import InputLabel from '@mui/material/InputLabel';
  
  const useStyles = makeStyles((theme) => ({
    fab: {
      position: "fixed",
      bottom: 20,
      right: 20,
    },
    container: {
      width: 500,
      height: 550,
      backgroundColor: "white",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
        height: "100vh",
      },
    },
    form: {
      padding: theme.spacing(2),
    },
    item: {
      marginBottom: theme.spacing(3),
    },
  }));
  
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const AddPub = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
  
      setOpenAlert(false);
    };
    const [share, setshare] = useState('Public');
    const handleChange = (event: SelectChangeEvent) => {
        setshare(event.target.value );
      };

      const handleAffiche = () => {
        setOpen(false)
        setOpenAlert(true)
      };

    return (
      <>
        <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
          <Fab color="theme.main" className={classes.fab} sx={{zindex:1 }}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <Modal open={open}>
          <Container className={classes.container}>
            <form className={classes.form} autoComplete="off">
              <div className={classes.item}>
                <TextField
                  id="standard-basic"
                  label="Title"
                  size="small"
                  style={{ width: "100%" }}
                />
              </div>
              <div className={classes.item}>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  defaultValue="Tell your story..."
                  variant="outlined"
                  label="Description"
                  size="small"
                  style={{ width: "100%" }}
                />
              </div>
              <div className={classes.item}>
              <InputLabel id="demo-simple-select-standard-label">Share</InputLabel>

              <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select"
          value={share}
          label="share"
          onChange={handleChange}
        >
                  <MenuItem value="Public">Public</MenuItem>
                  <MenuItem value="Private">Private</MenuItem>
                  <MenuItem value="PublicA">Public (without having shared my identity)</MenuItem>
                </Select>
              </div>
              <div className={classes.item}>
                <FormLabel component="legend">Do you want to add a photo/vedio ?</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="Song"
                    control={<Radio size="small" />}
                    label="Song"
                  />
                  <FormControlLabel
                    value="Photo"
                    control={<Radio size="small" />}
                    label="Photo"
                  />
                  <FormControlLabel
                    value="Vedio"
                    control={<Radio size="small" />}
                    label="Vedio"
                  />
                </RadioGroup>
                <TextField
                  id="standard-basic"
                  label="URL"
                  size="small"
                  style={{ width: "100%" }}
                />
              </div>
              <div className={classes.item}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginRight: 20 }}
                  onClick={handleAffiche}
                >
                  Create
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Container>
        </Modal>
        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      </>
    );
  };
  
  export default AddPub;
  