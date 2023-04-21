interface ModalProps {
  openModal: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ openModal, handleCloseModal, children }: ModalProps) => {
  return (
    <div
      className={`${
        openModal ? "block" : "hidden"
      } fixed z-10 inset-0 overflow-y-auto transition-opacity duration-500`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-slate-950 opacity-75"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                handleCloseModal();
              }
            }}
          ></div>
        </div>
        <div className="relative bg-white rounded-lg w-1/2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
