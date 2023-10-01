const Overlay = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-slate-900 bg-opacity-30">
      {children}
    </div>
  );
};

const Modal = ({ children }) => {
  return (
    <Overlay>
      <div class="w-[600px] m-auto bg-white rounded-lg shadow mt-10">
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
