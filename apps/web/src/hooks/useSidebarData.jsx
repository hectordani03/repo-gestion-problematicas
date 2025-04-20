import { useState } from 'react';

export function useSidebarData() {
  const [openProyectos, setOpenProyectos] = useState(false);
  const [proyectos, setProyectos] = useState([
    { id: 1, nombre: 'Proyecto Alpha' },
    { id: 2, nombre: 'Proyecto Beta' },
    { id: 3, nombre: 'Proyecto Gamma' },
  ]);

  const [openFavoritos, setOpenFavoritos] = useState(false);
  const [favoritos, setFavoritos] = useState([
    { id: 1, nombre: 'Proyecto Alpha' },
    { id: 2, nombre: 'Proyecto Beta' },
    { id: 3, nombre: 'Proyecto Gamma' },
  ]);

  const [openMiembros, setOpenMiembros] = useState(false);
  const [miembros, setMiembros] = useState([
    { id: 1, nombre: 'Proyecto Alpha' },
    { id: 2, nombre: 'Proyecto Beta' },
    { id: 3, nombre: 'Proyecto Gamma' },
  ]);

  return {
    openProyectos,
    setOpenProyectos,
    proyectos,
    openFavoritos,
    setOpenFavoritos,
    favoritos,
    openMiembros,
    setOpenMiembros,
    miembros
  };
}
