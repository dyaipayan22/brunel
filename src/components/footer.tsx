const Footer = () => {
  return (
    <div className="w-full bg-background-primary flex items-center justify-between p-[60px] rounded-[40px]">
      <span className="before:content-['\00a9'] before:mr-2.5 font-semibold text-lg">
        Talup 2023. All rights reserved
      </span>
      <div className="flex items-center gap-12 text-lg">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
