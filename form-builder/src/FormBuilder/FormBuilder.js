import { Box } from "@mui/material";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import Header from "./Header";
import FormPreview from "./FormPreview";
import { FormContext } from "./FormContext";
import { getFormData } from "./Apis";

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getFormData();
        if (response.data) {
          const { data } = response;
          let fields = [];
          fields.push(
            data.icon
              ? { type: "logo", values: { logoLink: data.icon } }
              : undefined
          );
          fields.push(
            data.title
              ? { type: "title", values: { title: data.title } }
              : undefined
          );
          fields.push(
            data.body
              ? {
                  type: "subTitle",
                  values: { title: data.body },
                }
              : undefined
          );
          fields.push(
            data.textBoxText
              ? {
                  type: "input",
                  values: { placeholder: data.textBoxText },
                }
              : undefined
          );
          fields.push(
            data.buttonText
              ? {
                  type: "button",
                  values: { label: data.buttonText },
                }
              : undefined
          );
          setFormFields(fields);
        }
      } catch (e) {}
    };
    getData();
  }, []);

  const value = {
    formFields,
    setFormFields,
  };

  return (
    <>
      <FormContext.Provider value={value}>
        <Box height="100vh" width={1} display="flex" flexDirection="column">
          <Header />
          <Box flex={1} display="flex">
            <SideBar />
            <Box flex={1} display="flex" justifyContent="center" mt={6}>
              <FormPreview />
            </Box>
          </Box>
        </Box>
      </FormContext.Provider>
    </>
  );
};

export default FormBuilder;
