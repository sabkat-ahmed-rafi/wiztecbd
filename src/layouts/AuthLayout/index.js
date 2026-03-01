import { CursorDot, CursorDotSingle } from '@/widgets/Cursor';
import TimeSwitcher from '@/widgets/TimeSwitcher';

const AuthLayout = ({ children }) => {
  return (
    <>
      <TimeSwitcher />
      <CursorDotSingle />
      <CursorDot />
      <div>{children}</div>
    </>
  );
};

export default AuthLayout;
