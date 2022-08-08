export interface Usuario {
    nombre: string;
    google: boolean;
    correo: string;
    password: string;
    rol: string;
    img?: string;
}


export interface Producto {
    precio:      number;
    _id:         string;
    nombre:      string;
    descripcion: string;
    categoria:   string;
    usuario:     string;
}
