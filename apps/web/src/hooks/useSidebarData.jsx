import { useState } from 'react';

export function useSidebarData() {
  const [openProyectos, setOpenProyectos] = useState(false);
  const [proyectos, setProyectos] = useState([
    { id: 1, nombre: 'Proyecto Alpha', image: '/avatar.png' },
    { id: 2, nombre: 'Proyecto Beta', image: '/avatar.png' },
    { id: 3, nombre: 'Proyecto Gamma', image: '/avatar.png' },
  ]);

  const [openFavoritos, setOpenFavoritos] = useState(false);
  const [favoritos, setFavoritos] = useState([
    { id: 1, nombre: 'Proyecto Alpha', image: '/avatar.png' },
    { id: 2, nombre: 'Proyecto Beta', image: '/avatar.png' },
    { id: 3, nombre: 'Proyecto Gamma', image: '/avatar.png' },
  ]);

  const [openMiembros, setOpenMiembros] = useState(false);
  const [miembros, setMiembros] = useState([
    { id: 1, nombre: 'Miembro 1', image: '/avatar.png' },
    { id: 2, nombre: 'Miembro 2', image: '/avatar.png' },
    { id: 3, nombre: 'Miembro 3', image: '/avatar.png' },
  ]);

  const [openAccesibilidad, setOpenAccesibilidad] = useState(false);

  return {
    openProyectos,
    setOpenProyectos,
    proyectos,
    openFavoritos,
    setOpenFavoritos,
    favoritos,
    openMiembros,
    setOpenMiembros,
    miembros,
    setOpenAccesibilidad,
    openAccesibilidad
  };
}
