import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useFormContext } from "./FormContext";

const SettingsContent = ({ formField }) => {
  const { setFormFields } = useFormContext();
  const [values, setValues] = useState(formField.values || {});

  useEffect(() => {
    setFormFields((old) =>
      old.map((item) =>
        item?.type === formField?.type ? { ...item, values } : item
      )
    );
  }, [values]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((old) => ({ ...old, [name]: value }));
  };

  const getInputField = (key, textLabel, placeholder) => (
    <Box>
      <Box mb={1}>
        <label>{textLabel}</label>
      </Box>
      <TextField
        name={key}
        onChange={handleChange}
        placeholder={placeholder}
        size="small"
        fullWidth
        value={values[key] || ""}
      />
    </Box>
  );

  const getSettingsContent = () => {
    let fields = {
      title: {
        component: getInputField("title", "Title", "Update title"),
      },
      subTitle: {
        component: getInputField("title", "Subtitle", "Update Subtitle"),
      },
      logo: {
        component: getInputField("logoLink", "Logo Link", "Update Logo Link"),
      },
      input: {
        component:
          // <Box display="flex" flexDirection="column" gap="16px">
          // {getInputField("label", "Input Label", "Update input label")}
          getInputField("placeholder", "Placeholder", "Update placeholder"),
        //   <FormControlLabel
        //     control={
        //       <Switch
        //         checked={values.required}
        //         onChange={(e) =>
        //           handleChange({
        //             target: { name: "required", value: e.target.checked },
        //           })
        //         }
        //       />
        //     }
        //     label="Required"
        //   />
        // </Box>
      },
      button: {
        component: getInputField(
          "label",
          "Button Label",
          "Update button label"
        ),
      },
    };
    return fields[formField.type].component;
  };
  return (
    <Box width="250px" p={4}>
      <Box mb={6}>
        <Typography variant="h6">Update Field Parameters</Typography>
      </Box>
      {getSettingsContent()}
    </Box>
  );
};

export default SettingsContent;
