import { IAcceso } from "../types/accesos";

export const data: IAcceso[] = [{
  id: 1,
  nombre: 'APEX Desarrollo',
  cliente: 'JFI',
  url: 'https://apex.jfi.gob.mx/apex/f?p=100:LOGIN_DESKTOP:1',
  descripcion: 'APEX Desarrollo',
  observaciones: 'Prueba Observaciones',
  estado: 'Activo',
  entorno: 'desarrollo',
  tipo: 'APEX',
  users: [{
    id: 1,
    nombre: 'Juan',
    workspace: 'A1I',
    user: 'A1I',
    password: 'A1IPass',
  }],

}, {
  id: 2,
  nombre: 'APEX Producción',
  cliente: 'JFI',
  url: 'https://apex.jfi.gob.mx/apex/f?p=100:LOGIN_DESKTOP:1',
  descripcion: 'APEX Producción',
  observaciones: '',
  estado: 'Activo',
  entorno: 'produccion',
  tipo: 'APEX',
  users: [{
    id: 2,
    nombre: 'Juan',
    workspace: 'A1H',
    user: 'A1IH',
    password: 'A1hPass',
  }],

},

{
  id: 3,
  nombre: 'APEX Producción',
  cliente: 'LHS',
  url: 'https://apex.jfi.gob.mx/apex/f?p=100:LOGIN_DESKTOP:1',
  descripcion: 'APEX Producción',
  observaciones: '',
  estado: 'Activo',
  entorno: 'produccion',
  tipo: 'APEX',
  users: [{
    id: 3,
    nombre: 'Juan',
    workspace: 'A1I',
    user: 'A1I',
    password: 'A1IPass',
  }
  ]
}
  ,
{
  id: 4,
  nombre: 'TNS Desarrollo',
  cliente: 'LHS',
  descripcion: 'TNS Desarrollo',
  observaciones: '',
  estado: 'Activo',
  entorno: 'desarrollo',
  tipo: 'Base de Datos',
  tnsname: `MYSID=
    (DESCRIPTION =
      (ADDRESS_LIST =
        (ADDRESS = (PROTOCOL = TCP)(HOST = mydnshostname)(PORT = 1521))
      )
        (CONNECT_DATA =
          (SERVICE_NAME = MYSID)
        )
    )`,
  users: [{
    id: 4,
    nombre: 'LHS',
    user: 'LHS',
    password: '123',
  }, {
    id: 5,
    nombre: 'A1I_LHS',
    user: 'A1I_LHS',
    password: '123',
  }
  ]
},

{
  id: 5,
  nombre: 'SIGEM Prueba',
  cliente: 'LHS',
  url: 'https://apex.jfi.gob.mx/apex/f?p=100:LOGIN_DESKTOP:1',
  descripcion: 'SIGEM Prueba',
  observaciones: '',
  estado: 'Activo',
  entorno: 'prueba',
  tipo: 'SIGEM',
  users: [{
    id: 6,
    nombre: 'Juan',
    workspace: 'A1I',
    user: 'A1I',
    password: 'A1IPass',
  }
  ]
},
{
  id: 6,
  nombre: 'WinSCP Produccion',
  cliente: 'CF',
  descripcion: 'WinSCP Producciom',
  observaciones: '',
  estado: 'Activo',
  entorno: 'produccion',
  tipo: 'WinSCP',
  carpeta: '/oracle/sicap/form',
  users: [{
    id: 7,
    nombre: 'oracle',
    user: 'oracle',
    password: 'oracleinstall',
  }
  ]
},
]


