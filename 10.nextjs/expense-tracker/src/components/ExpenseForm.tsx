"use client";
import { createExpense } from "@/actions/client/expense";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
const initialExpense: BaseExpenseI = {
  title: "",
  amount: 0,
  categoryId: "",
  notes: "",
  date: new Date(),
};
export default function ExpenseForm({
  categories,
}: {
  categories: CategoryI[];
}) {
  const { mutate, isPending } = useMutation({
    mutationKey: ["AddExpense"],
    mutationFn: createExpense,
    onSuccess(data) {
      toast.success(data);
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return (
    <Formik
      initialValues={initialExpense}
      onSubmit={(values) => mutate(values)}
    >
      <Form className="card bg-base-200 p-4">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Title</legend>
          <Field className="input" name="title" placeholder="Title" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Amount</legend>
          <Field
            className="input"
            name="amount"
            type="number"
            placeholder="Amount"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Notes</legend>
          <Field
            className="textarea"
            name="notes"
            as="textarea"
            placeholder="Notes"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Date</legend>
          <Field
            className="input"
            name="date"
            placeholder="Date"
            type="datetime-local"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Category</legend>
          <Field className="select" name="categoryId" as="select">
            <option value="" disabled>
              -please select category-
            </option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </Field>
        </fieldset>
        <button type="submit" className="btn btn-primary" disabled={isPending}>
          {isPending ? <span className="loading w-4 h-4" /> : "Submit"}
        </button>
      </Form>
    </Formik>
  );
}
