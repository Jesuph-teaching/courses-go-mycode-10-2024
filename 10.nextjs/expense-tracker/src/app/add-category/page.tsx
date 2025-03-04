"use client";
import { createCategory } from "@/actions/client/category";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
const initialCategory: BaseCategoryI = {
  name: "",
  type: "income",
};
export default function AddCategory() {
  const { mutate, isPending } = useMutation({
    mutationKey: ["addCategory"],
    mutationFn: createCategory,
    onSuccess(data) {
      toast.success(data);
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return (
    <div>
      <h1>Add Category</h1>
      <Formik
        initialValues={initialCategory}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        <Form className="card bg-base-200 p-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <Field name="name" placeholder="Title" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Type</legend>
            <Field name="type" as="select" placeholder="Type">
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </Field>
          </fieldset>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isPending}
          >
            {isPending ? <span className="loading w-4 h-4" /> : "Submit"}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
