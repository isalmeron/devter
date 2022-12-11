// Form for creating a company record
import { useForm } from "react-hook-form";
import styled from "styled-components";
import PrimaryButton from 'components/Button/Button';
import { TextField } from 'components/TextField/TextField'

const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ErrorMessage = styled.div`
  color: #CC0000;
  font-size: 0.85rem;
  text-align: center;
  font-weight: 500;
`

export default function Empresa() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <label htmlFor="socialReason">Razón Social</label>
          <TextField
            error={errors?.socialReason}
            {...register("socialReason", { required: true })}
          />
          {errors?.socialReason ? <ErrorMessage>Campo requerido.
          </ErrorMessage> : undefined}
        </FormGroup>
        <FormGroup>
          <label htmlFor="rfc">RFC</label>
          <TextField
            {...register("rfc", { required: true })}
            error={errors?.rfc}
          />
          {errors?.rfc ? <ErrorMessage>Campo requerido.
          </ErrorMessage> : undefined}
        </FormGroup>
        <FormGroup>
          <label htmlFor="fiscalRegime">Régimen fiscal: </label>
          <TextField
            {...register("fiscalRegime", { required: true })}
            error={errors?.fiscalRegime}
          />
          {errors?.fiscalRegime ? <ErrorMessage>Campo requerido.
          </ErrorMessage> : undefined}
        </FormGroup>
        <FormGroup>
          <label htmlFor="street">Calle y número: </label>
          <TextField
            {...register("street", { required: true })}
            error={errors?.street}
            autocomplete="street-address"
          />
          {errors?.street ? <ErrorMessage>Campo requerido.
          </ErrorMessage> : undefined}
        </FormGroup>
        <FormGroup>
          <label htmlFor="postalCode">Código Postal: </label>
          <TextField
            {...register("postalCode", { required: true })}
            error={errors?.postalCode}
            autocomplete="postal-code"
          />
          {errors?.postalCode ? <ErrorMessage>Campo requerido.
          </ErrorMessage> : undefined}
        </FormGroup>
        <FormGroup>
          <label htmlFor="city">Ciudad: </label>
          <TextField
            {...register("city", { required: true })}
            error={errors?.city}
          />
          {errors?.city ? <ErrorMessage>Campo requerido.
          </ErrorMessage> : undefined}
        </FormGroup>
        <FormGroup>
          <label htmlFor="state">Estado: </label>
          <TextField
            {...register("state", { required: true })}
            error={errors?.state}
          />
          {errors?.state ? <ErrorMessage>Campo requerido.
          </ErrorMessage> : undefined}
        </FormGroup>
        <FormGroup>
          <label htmlFor="country">País: </label>
          <TextField
            {...register("country", { required: true })}
            error={errors?.country}
          />
          {errors?.country ? <ErrorMessage>Campo requerido.
          </ErrorMessage> : undefined}
        </FormGroup>
        <PrimaryButton type="submit">Crear empresa</PrimaryButton>
      </form>
      <div>

      </div>
    </FormContainer>
  )
}