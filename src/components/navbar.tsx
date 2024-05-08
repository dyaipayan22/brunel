import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div
      className={`w-full lg:w-[1392px] px-4 py-5 mx-auto ${
        pathname === '/' &&
        'rounded-[65.28px] ring-[1px] ring-[#EAEAEA] ring-inset'
      }`}
    >
      <nav className="flex items-center justify-between">
        <img src="/logo.png" alt="Logo" />
        {pathname === '/' ? (
          <div className="flex items-center gap-[16px]">
            <Button
              variant={'secondary'}
              onClick={() => navigate('/registration')}
            >
              Get Projects
            </Button>
            <Button>Onboard Talent</Button>
          </div>
        ) : (
          <img
            src="/close.png"
            alt="Close"
            className="p-2 rounded-full border cursor-pointer"
            onClick={() => navigate('/')}
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;
