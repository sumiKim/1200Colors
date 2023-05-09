type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function ColorModal({ onClose, children }: Props) {
  return (
    <section
      className='fixed top-0 left-0 flex flex-col justify-center items-center bg-gray-400/40 w-full h-full z-50'
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* <button className='fixed top-0 right-0 p-8 text-white' onClick={onClose}>
        <CloseIcon />
      </button> */}
      {children}
    </section>
  );
}
