import {
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import SettingsContent from "./SettingsContent";
import { useFormContext } from "./FormContext";

const FormField = ({ formField }) => {
  const { setFormFields } = useFormContext();
  const [showButtons, setShowButtons] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleShowButtons = () => setShowButtons((old) => !old);

  const handleDrawer = () => setOpenDrawer((old) => !old);

  const { type, values } = formField || {};

  const getFormField = () => {
    const { label, ...rest } = values || {};
    let fields = {
      title: {
        component: (
          <Typography
            variant="h3"
            sx={{ overflowWrap: "anywhere" }}
            textAlign="center"
          >
            {values?.title || "Title here"}
          </Typography>
        ),
      },
      subTitle: {
        component: (
          <Typography
            variant="h6"
            sx={{ overflowWrap: "anywhere" }}
            textAlign="center"
          >
            {values?.title || "Subtitle here"}
          </Typography>
        ),
      },
      logo: {
        component: (
          <Avatar
            sx={{ height: 54, width: 54 }}
            src={values?.logoLink}
            alt="logo"
          />
        ),
      },
      input: {
        component: (
          <Box width={1}>
            <TextField
              size="small"
              fullWidth
              {...rest}
              placeholder={rest.placeholder || "Enter placeholder"}
            />
          </Box>
        ),
      },
      button: {
        component: (
          <Button fullWidth variant="contained">
            {values?.label || "Button Label"}
          </Button>
        ),
      },
    };
    return fields[type].component;
  };

  const deleteField = () => {
    setFormFields((old) =>
      old.map((field) => (field?.type === formField?.type ? undefined : field))
    );
  };

  return (
    <>
      <Box
        onMouseEnter={handleShowButtons}
        onMouseLeave={handleShowButtons}
        width="100%"
        display="flex"
        justifyContent="center"
        sx={{ wordWrap: "break-word" }}
        position="relative"
      >
        <Box width="350px" display="flex" justifyContent="center">
          {getFormField()}
        </Box>
        {showButtons && (
          <Box position="absolute" right="0px" top="0px">
            <IconButton size="small" onClick={handleDrawer}>
              <SettingsIcon size="small" />
            </IconButton>
            <IconButton size="small" onClick={deleteField}>
              <DeleteIcon size="small" />
            </IconButton>
          </Box>
        )}
      </Box>
      <Drawer anchor="right" open={openDrawer} onClose={handleDrawer}>
        <SettingsContent formField={formField} />
      </Drawer>
    </>
  );
};

export default FormField;
