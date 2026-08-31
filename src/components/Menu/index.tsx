import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';

type AvalibleThemes = 'dark' | 'light';
export function Menu() {

  const [theme, setTheme] = useState<AvalibleThemes>((() => {
    const savedTheme = localStorage.getItem('theme') as AvalibleThemes || 'dark';
    return savedTheme;
  }));

  const nextThemeIcon = {
    dark: <SunIcon/>,
    light: <MoonIcon/>
  }

  function handleThemeChange( event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={styles.menu}>
      <a href="/" className={styles.menuLink}
      aria-label='Ir para a Home'
      title='Ir para a Home'
      >
        <HouseIcon/>
      </a>

      <a href="/" className={styles.menuLink}
      aria-label='Ir para o Histórico'
      title='Ir para o Histórico'
      >
        <HistoryIcon/>
      </a>

      <a href="/" className={styles.menuLink}
      aria-label='Ir para as Configurações'
      title='Ir para as Configurações'
      >
        <SettingsIcon/>
      </a>

      <a href="/" className={styles.menuLink}
      aria-label='Ir para o Modo Claro'
      title='Ir para o Modo Claro'
      onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </div>
  );
  
}