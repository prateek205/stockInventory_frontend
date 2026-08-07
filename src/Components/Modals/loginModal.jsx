import { FaTimes } from "react-icons/fa";
import LoginForm from "../../Pages/LoginForm";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[1000px] h-[550px] max-w-6xl flex items-center justify-center bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <LoginForm onClose={onClose} />
      </div>
    </div>
  );
};

export default LoginModal;
