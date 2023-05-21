import { Box, Typography } from "@mui/material";
import FormField from "./FormField";
import { useFormContext } from "./FormContext";

const FormPreview = () => {
  const { formFields } = useFormContext();

  return (
    <Box>
      <Typography variant="h6">Form Preview</Typography>
      <Box
        width="500px"
        border="1px solid #222"
        p={4}
        display="flex"
        flexDirection="column"
        gap="24px"
        alignItems="center"
        mt={4}
        minHeight="300px"
        px="32px"
        mx="32px"
      >
        {formFields.length ? (
          formFields
            .filter((field) => !!field)
            .map((formField) => (
              <FormField formField={formField} key={formField?.type} />
            ))
        ) : (
          <Box>No fields Added</Box>
        )}
      </Box>
    </Box>
  );
};

export default FormPreview;
