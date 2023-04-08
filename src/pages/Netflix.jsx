import React, { useState } from 'react'

export default function Netflix() {
  // Crear un estado  
  const [isScrolled, setIsScrolled] = useState(false);
  // Punto de ventana en el desplazamiento con el registro y el detector de eventos
  window.onscroll = () => {
    // Cada vez que se desplace verifica la pagina del punto de la ventana, y compensara si es asi es igual a 0
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  }
  return (
    <div>Netflix</div>
  )
}
