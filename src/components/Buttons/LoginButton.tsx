import { UserCircleIcon } from "@heroicons/react/24/solid";

const LoginButton = () => {
  return (
    <button
      type="button"
      className="w-fit px-3 py-1 flex items-center gap-2 font-bold text-button-call-to-action border-1 border-main-outline rounded-3xl hover:bg-button-call-to-action-hover"
    >
      <UserCircleIcon className="w-6 h-6" />
      Sign In
    </button>
  );
};

export default LoginButton;
