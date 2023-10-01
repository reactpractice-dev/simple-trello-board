import { XMarkIcon } from "@heroicons/react/20/solid";

const Overlay = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-slate-900 bg-opacity-30">
      {children}
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  return (
    <Overlay>
      <div class="w-[600px] m-auto bg-white rounded-lg shadow mt-10">
        <button
          className="p-2 hover:text-slate-700"
          onClick={onClose}
          title="Close modal"
        >
          <XMarkIcon className="h-6 w-6 text-gray-500" />
        </button>
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
