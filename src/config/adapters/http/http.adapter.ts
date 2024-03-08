

//Reglas de metodos que debe de extender ( Se definen reglas y propiedades )
export abstract class HttpAdapter {

    abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;

}