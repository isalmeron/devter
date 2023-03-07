export const EMPLEADO = {
  id: "EMPLEADO-1",
  activo: true,
  nombre: "Juan Perez",
  rfc: "RAFHD901210DA8",
  razonSocial: "Irving Salmeron",
  regimen: "Asalariado",
  numeroSeguroSocial: "14253671523",
  direccion: {
    calle: "Tecozautla",
    colonia: "Roma Sur",
    numero: "123",
    codigoPostal: "23415",
    estado: "CDMX",
    municipio: "Cuahutemoc",
  },
  percepciones: {
    salarioDiario: 1500,
    conceptos: [],
  },
  fechaIngreso: 1514764800000, //01-01-2018 timestamp
  fechaIngresoNomina: 1514764900000,
  fechaBaja: null, // null sigue activo
  tipoEmpleado: "?",
  puesto: "?",
  centroCosto: "?",
  jefeInmediato: "?",
};
