import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { FormDiv } from "./BoxMarque.elements";

const defaultValues = {
  TextField: "",
  Select: "",
  ReactSelect: {
    value: "Selectionner une marque",
    label: "Selectionner une marque",
  },
};

function FormSelect() {
  const { control } = useForm({ defaultValues });

  return (
    <FormDiv>
      <form className="form">
        <section>
          <Controller
            name="ReactSelect"
            control={control}
            render={({ field }) => (
              <ReactSelect
                isClearable
                {...field}
                options={[
                  { value: "Peugeot", label: "Peugeot" },
                  { value: "Renault", label: "Renault" },
                  { value: "Dacia", label: "Dacia" },
                  { value: "Opel", label: "Opel" },
                  { value: "Seat", label: "Seat" },
                ]}
              />
            )}
          />
        </section>
      </form>
    </FormDiv>
  );
}

export default FormSelect;
