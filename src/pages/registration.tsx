import RegistrationForm from '../components/registration-form';

const RegistrationPage = () => {
  return (
    <div className="w-1/3 flex flex-col gap-[65px]">
      <div className="flex flex-col gap-[16px] items-center">
        <h1 className="font-heading text-[36px] text-heading">
          Registration Form
        </h1>
        <span className="font-semibold text-[56px] leading-[67.2px] text-center">
          Start your success Journey here!
        </span>

        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
