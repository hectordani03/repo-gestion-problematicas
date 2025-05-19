// packages/infrastructure/seed.js
import { PrismaClient } from "./generated/prisma/client.js";
const prisma = new PrismaClient();

async function main() {
  // ====== Project_Type ======
  await prisma.project_Type.upsert({
    //PIs
    where: { name: "Proyectos Integradores" },
    update: {},
    create: {
      name: "Proyectos Integradores",
      estimatedTime: "6 meses",
      minTeamMembersSize: 4,
      maxTeamMembersSize: 5,
      minTeamAdvisorsSize: 0,
      maxTeamAdvisorsSize: 0,
    },
  });

  await prisma.project_Type.upsert({
    //SSC
    where: { name: "Servicio Social Constitucional" },
    update: {},
    create: {
      name: "Servicio Social Constitucional",
      estimatedTime: "6 months (480 hrs)",
      minTeamMembersSize: 1,
      maxTeamMembersSize: 4,
      minTeamAdvisorsSize: 1,
      maxTeamAdvisorsSize: 1,
    },
  });

  await prisma.project_Type.upsert({
    //Tesis
    where: { name: "Tesis" },
    update: {},
    create: {
      name: "Tesis",
      estimatedTime: "1 año",
      minTeamMembersSize: 1,
      maxTeamMembersSize: 5,
      minTeamAdvisorsSize: 1,
      maxTeamAdvisorsSize: 2,
    },
  });

  await prisma.project_Type.upsert({
    //ProyectoInvestigacion
    where: { name: "Proyectos de investigación" },
    update: {},
    create: {
      name: "Proyectos de investigación",
      estimatedTime: "1-3 año/s",
      minTeamMembersSize: 0,
      maxTeamMembersSize: 0,
      minTeamAdvisorsSize: 0,
      maxTeamAdvisorsSize: 0,
    },
  });

  await prisma.project_Type.upsert({
    //PP
    where: { name: "Prácticas profesionales" },
    update: {},
    create: {
      name: "Prácticas profesionales",
      estimatedTime: "6 months (500 hrs)",
      minTeamMembersSize: 0,
      maxTeamMembersSize: 0,
      minTeamAdvisorsSize: 0,
      maxTeamAdvisorsSize: 0,
    },
  });

  // ====== User_Status ======
  await prisma.user_Status.upsert({
    //new
    where: { name: "nuevo" },
    update: {},
    create: {
      name: "nuevo",
    },
  });

  await prisma.user_Status.upsert({
    //verified
    where: { name: "verificado" },
    update: {},
    create: {
      name: "verificado",
    },
  });

  await prisma.user_Status.upsert({
    //banned
    where: { name: "baneado" },
    update: {},
    create: {
      name: "baneado",
    },
  });

  await prisma.user_Status.upsert({
    //deleted
    where: { name: "eliminado" },
    update: {},
    create: {
      name: "eliminado",
    },
  });

  // ====== User_Status ======
  await prisma.student_Status.upsert({
    //activo
    where: { name: "activo" },
    update: {},
    create: {
      name: "activo",
    },
  });

  await prisma.student_Status.upsert({
    //baja
    where: { name: "baja" },
    update: {},
    create: {
      name: "baja",
    },
  });

  await prisma.student_Status.upsert({
    //egresado
    where: { name: "egresado" },
    update: {},
    create: {
      name: "egresado",
    },
  });

  // ====== Professor_Role ======

  await prisma.professor_Role.upsert({
    //Director de plantel
    where: { name: "Director de plantel" },
    update: {},
    create: {
      name: "Director de plantel",
    },
  });

  await prisma.professor_Role.upsert({
    //Encargado de Carrera
    where: { name: "Encargado de Carrera" },
    update: {},
    create: {
      name: "Encargado de Carrera",
    },
  });

  await prisma.professor_Role.upsert({
    //Asesores PP
    where: { name: "Asesor PP (Practicas Profesionales)" },
    update: {},
    create: {
      name: "Asesor PP (Practicas Profesionales)",
    },
  });

  await prisma.professor_Role.upsert({
    //Asesores SSC
    where: { name: "Asesor SSC (Servicio Social Constitucional)" },
    update: {},
    create: {
      name: "Asesor SSC (Servicio Social Constitucional)",
    },
  });

  await prisma.professor_Role.upsert({
    //Supervisor de Tesis
    where: { name: "Supervisor de Tesis" },
    update: {},
    create: {
      name: "Supervisor de Tesis",
    },
  });

  await prisma.professor_Role.upsert({
    //Supervisor de Proyectos
    where: { name: "Supervisor de Proyectos" },
    update: {},
    create: {
      name: "Supervisor de Proyectos",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
