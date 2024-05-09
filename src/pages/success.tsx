import Timer from '../components/timer';

const SuccessPage = () => {
  return (
    <div className="w-full lg:max-w-[718px] flex flex-col items-center">
      <img src="/submitted.png" alt="Submitted" />
      <div className="flex flex-col gap-[16px] text-center">
        <span className="font-heading text-heading text-[36px]">
          Success Submitted
        </span>
        <span className="text-[56px] font-semibold leading-[67.2px]">
          Congratulations
        </span>
        <span className="text-[27px] font-medium text-[#727272] leading-[35.1px]">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </span>
      </div>
      <Timer interval={5} redirectUrl="/" />
    </div>
  );
};

export default SuccessPage;
