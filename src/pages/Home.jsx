import React, { useMemo } from 'react';
import Typical from 'react-typical';
import homeImage from '../assets/home.png';
import '../styles/Home.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation('home');

  // Utiliza useMemo para recalcular somente quando o idioma mudar
  const roles = useMemo(() => t('roles', { returnObjects: true }) || [], [i18n.language, t]);

  // Prepara os steps do componente Typical de forma otimizada
  const steps = useMemo(() => roles.flatMap(role => [role, 2500, '', 500]), [roles]);

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-text">
          <h2 className="home-title">{t('greeting')}</h2>
          <h1 className="home-name">{t('name')}</h1>
          {roles.length > 0 && (
            <p className="home-typing">
              <Typical
                key={i18n.language} // Garante que o componente seja reinicializado ao trocar o idioma
                loop={Infinity}
                wrapper="span"
                steps={steps}
              />
            </p>
          )}
          <h2 className="home-subtitle">{t('about_title')}</h2>
          <p className="home-description">{t('about_text1')}</p>
          <p className="home-description">{t('about_text2')}</p>
          <p className="home-link">
            <a href="https://github.com/seuperfil" target="_blank" rel="noopener noreferrer">
              {t('source_code')}
            </a>
          </p>
        </div>
        <div className="home-image-container">
          <img
            src={homeImage}
            alt={t('image_alt')}
            className="home-image"
            style={{ width: '100%', maxWidth: '450px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
