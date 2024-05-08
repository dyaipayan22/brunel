import { useForm, useFormState } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import {
  registrationSchema,
  RegistrationFormInput,
} from '../schema/registration-schema';
import Input from './ui/input';
import { Button } from './ui/button';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<RegistrationFormInput>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const { dirtyFields } = useFormState({ control });

  const isFormFilled = dirtyFields.name && dirtyFields.email;

  const submitForm = () => {
    navigate('/success');
  };

  return (
    <form
      className="flex flex-col gap-[47px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="flex flex-col gap-[24px]">
        <Input
          type="string"
          placeholder="Enter your name"
          {...register('name')}
          error={errors.name}
        />
        <Input
          type="string"
          placeholder="Enter your email"
          {...register('email')}
          error={errors.email}
        />
      </div>
      <Button type="submit" disabled={!isFormFilled || isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default RegistrationForm;
