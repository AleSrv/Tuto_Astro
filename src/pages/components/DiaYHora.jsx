import { useEffect, useState } from 'react';

export default function DiaYHora() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const fecha = `${hora.getDate()} de ${meses[hora.getMonth()]} de ${hora.getFullYear()}`;
  const horaString = hora.toLocaleTimeString();

  return (
    <p>Día: {fecha} ({horaString})</p>
  );
}
