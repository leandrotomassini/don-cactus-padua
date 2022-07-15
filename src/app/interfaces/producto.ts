export interface Producto {
    precio:      number;
    stock:       number;
    estado:      boolean;
    fotos:       string[];
    nombre:      string;
    descripcion: string;
    categoria:   string;
    usuario:     string;
    uid:         string;
}

export interface RespuestaProductos {
    ok:        boolean;
    total:     number;
    productos: Producto[];
}