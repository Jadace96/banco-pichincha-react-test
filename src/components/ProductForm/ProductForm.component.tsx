// vendors
import React from "react";
import { useForm } from "react-hook-form";

// compoenents
import { Button } from "components";

// styles
import styles from "./ProductForm.module.css";

// types
type ProductFormData = {
  id: string;
  name: string;
  description: string;
  logo: FileList;
  date_release: string;
  date_revision: string;
};

export const ProductForm = () => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ProductFormData>({ mode: "onChange" });

  const onSubmit = (data: ProductFormData) => {
    console.log(data);
  };

  const onReleaseDateChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ target });
    const nextYear = new Date(target.value);
    nextYear.setFullYear(nextYear.getFullYear() + 1);

    const newDateRevision = target.value ? nextYear?.toISOString()?.split("T")[0] : "";

    setValue("date_revision", newDateRevision);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label className={styles.formFieldLabel} htmlFor="id">
          ID
        </label>
        <input
          type="text"
          id="id"
          {...register("id", {
            required: "Este campo es requerido!",
            minLength: {
              value: 3,
              message: "Mínimo 3 caracteres!",
            },
            maxLength: {
              value: 10,
              message: "Máximo 10 caracteres!",
            },
            pattern: /^[A-Za-z0-9]+$/,
          })}
          className={`${styles.formControl} ${errors.id ? styles.errorInput : ""}`}
        />
        {errors.id && <span className={styles.errorMessage}>{errors.id.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formFieldLabel} htmlFor="name">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Este campo es requerido!",
            minLength: {
              value: 5,
              message: "Mínimo 5 caracteres!",
            },
            maxLength: {
              value: 100,
              message: "Máximo 100 caracteres!",
            },
          })}
          className={`${styles.formControl} ${errors.name ? styles.errorInput : ""}`}
        />
        {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formFieldLabel} htmlFor="description">
          Descripción
        </label>
        <input
          type="text"
          id="description"
          {...register("description", {
            required: "Este campo es requerido!",
            minLength: {
              value: 10,
              message: "Mínimo 10 caracteres!",
            },
            maxLength: {
              value: 200,
              message: "Máximo 200 caracteres!",
            },
          })}
          className={`${styles.formControl} ${errors.description ? styles.errorInput : ""}`}
        />
        {errors.description && <span className={styles.errorMessage}>{errors.description.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formFieldLabel} htmlFor="logo">
          Logo
        </label>
        <input
          type="text"
          id="logo"
          {...register("logo", { required: "Este campo es requerido!" })}
          className={`${styles.formControl} ${errors.logo ? styles.errorInput : ""}`}
        />
        {errors.logo && <span className={styles.errorMessage}>{errors.logo.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formFieldLabel} htmlFor="date_release">
          Fecha de Liberación
        </label>
        <input
          type="date"
          id="date_release"
          {...register("date_release", {
            required: "Este campo es requerido!",
            validate: (value) => {
              const today = new Date().toISOString().substring(0, 10);
              const selectedDate = new Date(value).toISOString().substring(0, 10);

              return selectedDate < today ? "La fecha no puede ser inferior a la de hoy!" : true;
            },
            onChange: onReleaseDateChange,
          })}
          className={`${styles.formControl} ${errors.date_release ? styles.errorInput : ""}`}
        />
        {errors.date_release && <span className={styles.errorMessage}>{errors.date_release.message}</span>}
      </div>

      <div className={`${styles.formGroup} ${styles.disabled}`}>
        <label className={styles.formFieldLabel}>Fecha de Revisión</label>
        <input disabled type="date" className={styles.formControl} {...register("date_revision", { required: true })} />
      </div>

      <div className={styles.formButtonsContainer}>
        <Button type="reset" mode="secondary">
          Reiniciar
        </Button>
        <Button type="submit" disabled={!isDirty || Object.keys(errors).length > 0}>
          Enviar
        </Button>
      </div>
    </form>
  );
};
