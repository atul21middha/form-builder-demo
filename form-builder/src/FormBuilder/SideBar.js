import { Box, Button, Typography } from "@mui/material";
import { formOptions } from "./utils/formOptions";
import { useFormContext } from "./FormContext";
import FormLogoDialog from "./FormLogoDialog";
import { useState } from "react";

const SideBar = () => {
  const { formFields, setFormFields } = useFormContext();
  const [openFormLogoDialog, setFormLogoDialog] = useState(false);

  const handleFormLogoDialog = () => setFormLogoDialog((old) => !old);

  const onAddLogoLink = (link) => {
    setFormFields((old) => [
      { type: "logo", values: { logoLink: link } },
      ...old,
    ]);
    handleFormLogoDialog();
  };

  const onAddFormField = (fieldType, position) => {
    let isFieldPresent = !!formFields.find(
      (field) => field?.type === fieldType
    );
    if (isFieldPresent) return alert("field is already present in the form");
    if (fieldType === "logo") {
      return handleFormLogoDialog();
    }
    let fields = [...formFields];
    fields[position] = { type: fieldType };
    setFormFields(fields);
  };

  return (
    <>
      <Box
        bgcolor="#222222"
        height={1}
        width="250px"
        px={4}
        py={6}
        display="flex"
        flexDirection="column"
        gap={4}
      >
        <Typography variant="h6" color="#fff">
          Form Options
        </Typography>
        {formOptions.map((option) => (
          <Box key={option.id}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => onAddFormField(option.type, option.position)}
            >
              {option.name}
            </Button>
          </Box>
        ))}
      </Box>
      {openFormLogoDialog && (
        <FormLogoDialog
          open={openFormLogoDialog}
          onClose={handleFormLogoDialog}
          onSubmit={onAddLogoLink}
        />
      )}
    </>
  );
};

export default SideBar;
