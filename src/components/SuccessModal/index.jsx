import { FiCheckCircle } from 'react-icons/fi';
import styles from './successmodal.module.scss';

export function SuccessModal({ closeModal }) {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiCheckCircle />
        <p>Email enviado com sucesso!</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <button title="fechar">Fechar</button>
        </div>
      </div>
    </div>
  );
}
