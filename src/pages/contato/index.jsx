import { useState } from 'react';
import axios from 'axios';
import { SuccessModal } from '@/components/SuccessModal';
import { FailModal } from '@/components/FailModal';
import { Loading } from '@/components/Loading';

import styles from './index.module.scss';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post('/api/sendEmail', {
        messageBody: `\n Nome: ${formData.name},
          \n E-mail: ${formData.email},
          \n Mensgame: ${formData.message},`,
      })
      .then(() => {
        setLoading(false);
        setSuccessModal(true);
        setFormData('');
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setFailModal(true);
      });
  };

  const closeModal = () => {
    setFailModal(false);
    setSuccessModal(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      {successModal && <SuccessModal closeModal={closeModal} />}
      {failModal && <FailModal closeModal={closeModal} />}
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <h2>Entre em contato</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu melhor email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Dúvidas</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escreva suas dúvidas aqui"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
