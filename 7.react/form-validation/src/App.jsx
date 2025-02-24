import "./App.css";
import { Field, Form, Formik, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

const nameSchema = Yup.string()
  .required("name is required")
  .min(3, "the name must be at least 3 characters")
  .max(42, "the name must be at most 42 characters");
const issueReportValidationSchema = Yup.object({
  name: nameSchema,
  subjects: Yup.array(Yup.string("subjects must be string"))
    .required()
    .min(1, "At least 1 subject must be specified")
    .max(4, "At most 4 subjects must be specified"),
  email: Yup.string().email().required("email is required"),
  message: Yup.string().max(400, "The message must be at most 400 characters"),
  serverDetails: Yup.object({
    name: nameSchema,
    badgeNumber: Yup.number().test({
      message: "The badge number must be in four digits",
      test: (val) => {
        if (val.toString().length <= 4) return true;
        return false;
      },
    }),
  }),
});
function App() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          subjects: [""],
          email: "",
          message: "",
          serverDetails: {
            name: "",
            badgeNumber: 0,
          },
        }}
        validationSchema={issueReportValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="form">
          <Field className="" placeholder="name" name="name" type="text" />
          <ErrorMessage component="p" name="name" className="error-message" />
          <FieldArray
            name="subjects"
            render={({ form, push, remove }) => {
              return (
                <>
                  {form.values.subjects.map((_, i) => (
                    <div className="subjects" key={i}>
                      <Field
                        className=""
                        placeholder={"Subjects number " + i}
                        name={"subjects." + i}
                        type="text"
                      />
                      <button type="button" onClick={() => remove(i)}>
                        -
                      </button>
                    </div>
                  ))}
                  {form.values.subjects.length < 4 && (
                    <button type="button" onClick={() => push("")}>
                      +
                    </button>
                  )}
                </>
              );
            }}
          />
          <Field className="" placeholder="email" name="email" type="email" />
          <ErrorMessage component="p" name="email" className="error-message" />

          <Field
            className=""
            placeholder="message"
            name="message"
            component="textarea"
            type="text"
          />
          <ErrorMessage
            component="p"
            name="message"
            className="error-message"
          />

          <Field
            className=""
            placeholder="Server name"
            name="serverDetails.name"
            type="text"
          />
          <ErrorMessage
            component="p"
            name="serverDetails.name"
            className="error-message"
          />
          <Field
            className=""
            placeholder="Server badge"
            name="serverDetails.badgeNumber"
            type="number"
          />
          <ErrorMessage
            component="p"
            name="serverDetails.badgeNumber"
            className="error-message"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default App;
