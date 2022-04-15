import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import MenuItem from "@mui/material/MenuItem";

const noSpaceRegExp = /^\S*$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup.string().required(),
  username: yup
    .string()
    .matches(noSpaceRegExp, "Enter valid username")
    .required(),
  email: yup.string().email("Enter a valid email").required(),
  phone: yup
    .string()
    .matches(phoneRegExp, "Enter a valid phone number")
    .required(),
  website: yup.string().url().required(),
  city: yup.string().required(),
  zipcode: yup.string().required(),
});

interface IUserFormProps {
  isEdit?: boolean;
  submitAction: (user: User) => void;
  user?: User;
  onOpen?: () => void;
}

const UserForm: React.FC<IUserFormProps> = ({
  isEdit,
  submitAction,
  user,
  onOpen,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    typeof onOpen !== "undefined" && onOpen();
  };

  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: !user
      ? {
          name: "",
          username: "",
          email: "",
          phone: "",
          website: "",
          city: "",
          zipcode: "",
        }
      : {
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
          city: user.address?.city || "",
          zipcode: user.address?.zipcode || "",
        },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const user: User = {
        name: values.name,
        username: values.username,
        email: values.email,
        phone: values.phone,
        website: values.website,
        address: {
          city: values.city,
          zipcode: values.zipcode,
        },
      };
      submitAction(user);
      handleClose();
    },
  });

  return (
    <>
      {!isEdit ? (
        <Button
          variant="contained"
          onClick={handleClickOpen}
          startIcon={<AddIcon />}
        >
          Add User
        </Button>
      ) : (
        <MenuItem onClick={handleClickOpen}>Edit</MenuItem>
      )}
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle sx={{ pb: 0 }}>User Form</DialogTitle>
        <DialogContent sx={{ pt: "20px !important" }}>
          <Box component="form">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  autoFocus
                  size="small"
                  id="name"
                  label="Name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  id="username"
                  label="Username"
                  type="text"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  id="email"
                  label="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  id="phone"
                  label="Phone"
                  name="phone"
                  type="text"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  id="website"
                  label="Website"
                  name="website"
                  type="url"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.website && Boolean(formik.errors.website)
                  }
                  helperText={formik.touched.website && formik.errors.website}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  id="city"
                  label="City"
                  name="city"
                  type="text"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  id="zipcode"
                  label="zipcode"
                  name="zipcode"
                  type="text"
                  value={formik.values.zipcode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.zipcode && Boolean(formik.errors.zipcode)
                  }
                  helperText={formik.touched.zipcode && formik.errors.zipcode}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2.5 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={() => formik.handleSubmit()}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserForm;
