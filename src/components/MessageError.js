import { useEffect } from "react";

function MessageError({ isOpen, onClose }) {
  let { is, textError } = isOpen;

  useEffect(() => {
    if (is) {
      setTimeout(() => {
        onClose();
      }, 8000);
    }
  }, [is]);

  return (
    <div className={`error-server ${is && "error-server_active"}`}>
      {`Ошибка при соединение с сервером: ${textError}. Попробуйте повторить позже`}
    </div>
  );
}

export default MessageError;
