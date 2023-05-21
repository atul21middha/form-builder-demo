import { Box, Button, Snackbar, Typography } from "@mui/material";
import { useFormContext } from "./FormContext";
import { addFormData } from "./Apis";
import { useState } from "react";
import { formSubmitSuccessMsg, somethingWentWrongMsg } from "./utils/constants";

const Header = () => {
  const { formFields, setFormFields } = useFormContext();
  const [snackBarMsg, setSnackBarMsg] = useState("");

  const onReset = () => {
    setFormFields([]);
  };

  const onSubmit = async () => {
    let fields = formFields.filter((field) => !!field);
    let output = {};
    fields.forEach((field) => {
      output[field.type] = field.values;
    });
    let request = {
      title: output?.title?.title || "",
      body: output?.subTitle?.title || "",
      textBoxText: output?.input?.placeholder || "",
      buttonText: output?.button?.label || "",
      icon: output?.logo?.logoLink || "",
    };
    try {
      await addFormData(request);
      setSnackBarMsg(formSubmitSuccessMsg);
    } catch (e) {
      setSnackBarMsg(somethingWentWrongMsg);
    }
  };

  return (
    <>
      <Snackbar
        open={!!snackBarMsg}
        autoHideDuration={3000}
        onClose={() => setSnackBarMsg("")}
        message={snackBarMsg}
      />
      <Box
        display="flex"
        justifyContent="space-between"
        bgcolor="#222222"
        py={2}
        px={4}
      >
        <Typography color="#fff" variant="h4">
          Form Builder
        </Typography>
        <Box display="flex" gap="24px">
          <Box>
            <Button variant="outlined" onClick={onReset}>
              Reset
            </Button>
          </Box>
          <Box>
            <Button color="primary" variant="contained" onClick={onSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
