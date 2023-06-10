import { useForm } from 'react-hook-form';

type FormValues = {
  email: string;
};

const UseForm = () => {
  const { register, watch } = useForm<FormValues>();
  console.log(watch('email'));

  return (
    <>
      <div>UseForm</div>
      <input type="email" {...register('email')}></input>
      <div>{watch('email')}</div>
    </>
  );
};

export default UseForm;
