import { Field, Form, FormikProvider, useFormik } from "formik";

export default function ProductForm({
  mutate,
  isPending,
  initialValues,
  title,
  buttonTitle,
}: {
  mutate: (product: BaseProductI) => void;
  isPending: boolean;
  initialValues: BaseProductI;
  title: string;
  buttonTitle: string;
}) {
  const formik = useFormik<BaseProductI>({
    initialValues,
    onSubmit: (values) => {
      mutate(values);
    },
    enableReinitialize: true,
  });

  return (
    <FormikProvider value={formik}>
      <Form className="p-4 flex flex-col gap-4">
        <h2 className="text-4xl font-bold">{title}</h2>
        <fieldset className="fieldset">
          <label className="fieldset-legend" htmlFor="name">
            Name
          </label>
          <Field type="text" id="name" name="name" className="input w-full" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend" htmlFor="description">
            Description
          </label>
          <Field
            as="textarea"
            id="description"
            rows={4}
            name="description"
            className="input w-full"
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-label">
            Activate original price
            <input
              type="checkbox"
              className="toggle ml-auto"
              checked={formik.values.price.original !== undefined}
              onChange={(e) => {
                formik.setFieldValue(
                  "price.original",
                  e.target.checked ? 0 : undefined
                );
              }}
            />
          </label>

          {formik.values.price.original !== undefined ? (
            <>
              <label className="fieldset-legend" htmlFor="price-original">
                Original price
              </label>
              <Field
                type="number"
                className="input w-full"
                name="price.original"
              />
            </>
          ) : null}
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend" htmlFor="price-current">
            Current price
          </label>
          <Field
            type="number"
            id="price-current"
            name="price.current"
            className="input w-full"
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend" htmlFor="stock">
            Stock
          </label>
          <Field
            type="number"
            id="stock"
            name="stock"
            className="input w-full"
          />
        </fieldset>
        <button
          disabled={isPending}
          type="submit"
          className="btn btn-secondary w-full"
        >
          {buttonTitle}
        </button>
      </Form>
    </FormikProvider>
  );
}
