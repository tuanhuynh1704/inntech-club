"use client";

import { useId, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import type { FormField } from "@/data/types";
import { ArrowUpRight } from "@/components/icons";

import shared from "./hub-ui.module.css";
import styles from "./request-form.module.css";

type RequestFormProps = {
  fields: FormField[];
  to: string;
  subject: string;
  successMessage: string;
  submitLabel?: string;
  note?: string;
  aside?: ReactNode;
};

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export default function RequestForm({
  fields,
  to,
  subject,
  successMessage,
  submitLabel,
  note,
  aside,
}: RequestFormProps) {
  const uid = useId().replace(/:/g, "");
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const fieldId = (name: string) => `${uid}-${name}`;
  const errorId = (name: string) => `${uid}-${name}-error`;

  const handleChange = (name: string, value: string) => {
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => {
      if (!previous[name]) {
        return previous;
      }
      const next = { ...previous };
      delete next[name];
      return next;
    });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    for (const field of fields) {
      const value = (values[field.name] ?? "").trim();
      if (field.required && value === "") {
        next[field.name] = "Vui lòng nhập thông tin này.";
        continue;
      }
      if (field.type === "email" && value !== "" && !EMAIL_PATTERN.test(value)) {
        next[field.name] = "Email chưa đúng định dạng.";
      }
    }
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    const firstInvalid = fields.find((field) => nextErrors[field.name]);
    if (firstInvalid) {
      setErrors(nextErrors);
      document.getElementById(fieldId(firstInvalid.name))?.focus();
      return;
    }

    const lines = fields.map(
      (field) => `${field.label}: ${(values[field.name] ?? "").trim()}`
    );
    lines.push("", `Gửi từ website INNTECH CLUB — ${subject}`);
    const body = lines.join("\n");
    const mailto = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
    setValues({});
    setErrors({});
  };

  const renderField = (field: FormField) => {
    const id = fieldId(field.name);
    const error = errors[field.name];
    const describedBy = error ? errorId(field.name) : undefined;
    const sharedProps = {
      id,
      name: field.name,
      required: field.required,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": describedBy,
    };

    return (
      <div
        key={field.name}
        className={`${shared.field}${
          field.type === "textarea" ? ` ${styles.fieldFull}` : ""
        }`}
      >
        <label htmlFor={id} className={shared.fieldLabel}>
          {field.label}
          {field.required ? (
            <>
              <span aria-hidden="true" className={styles.requiredMark}>
                {" "}
                *
              </span>
              <span className={shared.srOnly}> (bắt buộc)</span>
            </>
          ) : null}
        </label>

        {field.type === "textarea" ? (
          <textarea
            {...sharedProps}
            className={shared.textarea}
            rows={4}
            placeholder={field.placeholder}
            value={values[field.name] ?? ""}
            onChange={(event) => handleChange(field.name, event.target.value)}
          />
        ) : field.type === "select" ? (
          <select
            {...sharedProps}
            className={shared.select}
            value={values[field.name] ?? ""}
            onChange={(event) => handleChange(field.name, event.target.value)}
          >
            <option value="">{field.placeholder ?? "Chọn…"}</option>
            {(field.options ?? []).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...sharedProps}
            className={shared.input}
            type={field.type}
            inputMode={field.type === "email" ? "email" : undefined}
            placeholder={field.placeholder}
            value={values[field.name] ?? ""}
            onChange={(event) => handleChange(field.name, event.target.value)}
          />
        )}

        {error ? (
          <p className={shared.fieldError} id={errorId(field.name)}>
            {error}
          </p>
        ) : null}
      </div>
    );
  };

  return (
    <div
      className={`${styles.split}${aside ? ` ${styles.withAside}` : ""}`}
      data-reveal
    >
      {submitted ? (
        <div className={styles.successColumn}>
          <div className={shared.formSuccess} role="status">
            {successMessage}
          </div>
        </div>
      ) : (
        <form className={styles.form} noValidate onSubmit={handleSubmit}>
          <div className={shared.formGrid}>{fields.map(renderField)}</div>
          <div className={shared.formActions}>
            <button type="submit" className={shared.buttonPrimary}>
              {submitLabel ?? "Gửi yêu cầu"}
              <ArrowUpRight className={shared.buttonIcon} />
            </button>
          </div>
          {note ? <p className={shared.formNote}>{note}</p> : null}
        </form>
      )}

      {aside ? <aside className={styles.aside}>{aside}</aside> : null}
    </div>
  );
}
