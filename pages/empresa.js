// Form for creating a company record
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "components/Button/Button";
import { TextField } from "components/TextField/TextField";
import Nav from "components/Nav/Nav";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "@/firebase/app";
import Select from "components/Select/Select";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
`;

const Section = styled.section`
  display: grid;
  grid-template-rows: 3rem 1fr;
  gap: 1.8rem;

  > h2 {
    grid-row: 1 / 2;
  }
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-rows: 1fr 2rem;
  grid-template-columns: minmax(14rem, auto) 1fr;
  column-gap: 1rem;
  align-items: center;
  justify-content: start;

  > input {
    grid-row: 1 / 2;
    grid-column: 2;
  }

  > label {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  > span {
    grid-row: 2;
    grid-column: 2;
  }
`;

const ErrorMessage = styled.span`
  color: #cc0000;
  font-size: 0.85em;
  text-align: center;
  font-weight: 500;
`;

const Label = styled.label``;

const ButtonContainer = styled.div`
  margin: 2em;
`;

const defaultFormValues = {
  nombre: "",
  rfc: "",
  razonSocial: "",
  regimen: "",
  // direccion: {
  calle: "",
  numeroExt: "",
  numeroInt: "",
  colonia: "",
  codigoPostal: "",
  municipio: "",
  estado: "",
  pais: "",
  // },
  periodo: {
    calculo: "",
  },
};

const formatoEmpresa = ({
  calle,
  numeroInt,
  numeroExt,
  colonia,
  codigoPostal,
  municipio,
  estado,
  pais,
  ...data
}) => ({
  ...data,
  direccion: {
    calle,
    numeroInt,
    numeroExt,
    colonia,
    codigoPostal,
    municipio,
    estado,
    pais,
  },
});

export default function Empresa() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValidating },
    reset,
    control,
  } = useForm({
    defaultValues: defaultFormValues,
  });

  const onSubmit = handleSubmit(async (data) => {
    await addDoc(collection(firestore, "empresas"), formatoEmpresa(data));
    console.log(data, formatoEmpresa(data));
    reset(defaultFormValues);
  });

  return (
    <>
      <Nav title="Nueva Empresa"></Nav>
      <FormContainer onSubmit={onSubmit}>
        <Section>
          <h2>Datos Generales</h2>
          <FormGroup>
            <Label htmlFor="nombre">Nombre de la empresa</Label>
            <TextField
              error={!!errors?.nombre}
              className="input"
              {...register("nombre", { required: true })}
            />
            {errors?.nombre ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="rfc">RFC</Label>
            <TextField
              className="input"
              error={!!errors?.rfc}
              {...register("rfc", { required: true })}
            />
            {errors?.rfc ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="razonSocial">Razón Social</Label>
            <TextField
              error={!!errors?.razonSocial}
              className="input"
              {...register("razonSocial", { required: true })}
            />
            {errors?.razonSocial ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="periodo">Periodo de cálculo: </Label>
            <Select
              control={control}
              defaultValue={defaultFormValues.periodo.calculo}
              name="periodo.calculo"
              required
              options={[
                {
                  value: "mensual",
                  label: "Mensual",
                },
                {
                  value: "quincenal",
                  label: "Quincenal",
                },
                {
                  value: "semanal",
                  label: "Semanal",
                },
              ]}
            />
            {errors?.periodo?.calculo ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="regimen">Régimen fiscal: </Label>
            <Select
              control={control}
              defaultValue={defaultFormValues.regimen}
              name="regimen"
              required
              options={[
                {
                  value: "01",
                  label: "Actividad Empresarial",
                },
                {
                  value: "02",
                  label: "RIF",
                },
                {
                  value: "03",
                  label: "RESICO",
                },
              ]}
            />
            {errors?.regimen ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>
        </Section>

        <Section>
          <h2>Dirección</h2>
          <FormGroup>
            <Label htmlFor="calle">Calle: </Label>
            <TextField
              error={!!errors?.calle}
              autocomplete="street-address"
              className="input"
              {...register("calle", { required: true })}
            />
            {errors?.calle ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="numeroExt">Número Ext: </Label>
            <TextField
              error={!!errors?.numeroExt}
              autocomplete="address-line2"
              className="input"
              {...register("numeroExt", { required: true })}
            />
            {errors?.numeroExt ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="numeroInt">Número Int: </Label>
            <TextField
              error={!!errors?.numeroInt}
              autocomplete="address-line3"
              className="input"
              {...register("numeroInt", { required: true })}
            />
            {errors?.numeroInt ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="colonia">Colonia: </Label>
            <TextField
              error={!!errors?.colonia}
              autocomplete="address-line2"
              className="input"
              {...register("colonia", { required: true })}
            />
            {errors?.colonia ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="codigoPostal">Código Postal: </Label>
            <TextField
              error={!!errors?.codigoPostal}
              autocomplete="postal-code"
              className="input"
              {...register("codigoPostal", { required: true })}
            />
            {errors?.codigoPostal ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="municipio">Municipio: </Label>
            <TextField
              error={!!errors?.municipio}
              className="input"
              autocomplete="address-line2"
              {...register("municipio", { required: true })}
            />
            {errors?.municipio ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="estado">Estado: </Label>
            <TextField
              error={!!errors?.estado}
              className="input"
              autocomplete="address-level1"
              {...register("estado", { required: true })}
            />
            {errors?.estado ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="pais">País: </Label>
            <TextField
              error={!!errors?.pais}
              className="input"
              autocomplete="country"
              {...register("pais", { required: true })}
            />
            {errors?.pais ? (
              <ErrorMessage>Campo requerido.</ErrorMessage>
            ) : undefined}
          </FormGroup>
        </Section>

        <ButtonContainer>
          <Button
            type="submit"
            color="primary"
            size="xl"
            disabled={isSubmitting || isValidating}
          >
            {isSubmitting || isValidating ? (
              <span className="material-icons md-14">more_horiz</span>
            ) : (
              "Crear empresa"
            )}
          </Button>
        </ButtonContainer>
      </FormContainer>
    </>
  );
}