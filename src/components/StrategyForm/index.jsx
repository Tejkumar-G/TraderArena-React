import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import { createStrategySchema } from "../../shared/constants";
import ErrorElement from "../ErrorElement";
import "./strategyForm.scss";

const StrategyForm = ({ handleSubmit, editMode = false, editData }) => {
  const initialValues = editMode
    ? { name: "name", description: "description" }
    : { name: "", description: "" };
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography textAlign="center" variant="h5">
          New Strategy
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={createStrategySchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleChange, handleBlur, values, resetForm }) => (
            <Form className="strategy-form">
              <TextField
                required
                label="Name"
                variant="outlined"
                name="name"
                size="small"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <ErrorMessage
                name="name"
                render={ErrorElement}
                className="error"
              />
              <TextField
                required
                label="Description"
                name="description"
                placeholder="Type something..."
                size="small"
                rows={6}
                multiline
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <ErrorMessage name="description" render={ErrorElement} />
              <Stack direction="row-reverse" spacing={2}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {editMode ? "Save" : "Create"}
                </Button>
                <Button variant="outlined" onClick={resetForm}>
                  Reset
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default StrategyForm;
