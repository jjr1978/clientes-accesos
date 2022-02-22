
export type TEntorno = 'desarrollo' | 'produccion' | 'test' | 'prueba';
export type TTipoAcceso = 'APEX' | 'Base de Datos' | 'SIGEM' | 'SICAP' | 'WinSCP'
export type TCliente = 'JFI' | 'BHI' | 'CF' | 'LHS'


export interface IUsuarios {
  id: number;
  nombre?: string;
  user: string;
  password: string;
  workspace?: string;
  observaciones?: string;
  estado?: string;
}
export interface IAcceso {
  id: number;
  nombre: string;
  cliente: string;
  url?: string;
  descripcion?: string;
  observaciones?: string;
  estado: string;
  entorno: TEntorno;
  tipo: TTipoAcceso;
  tnsname?: string;
  users: IUsuarios[];
  carpeta?: string
}
