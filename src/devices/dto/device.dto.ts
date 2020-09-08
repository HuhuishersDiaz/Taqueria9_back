/**
 * "deviceid":"009900111E",
 * "placa":"TRAMITE",
 * "imei":"866430024092803",
 * "empresa":"Autotransportes de Servicios Colectivos Especiales de Oriente Ruta 83 S.A. de C.V.",
 * "proveedor":"DASHCAM",
 * "idEmpresa":"1",
 * "serievin":"JTFPX22P8H0070641",
 * "economico":"327",
 * "url":"http:\/\/70.35.195.70\/semovi\/video_stream.php?id=009900111E",
 * "fecha":"31\/08\/2020",
 * "hora":"23:00:25",
 * "latitud":"19.393096",
 * "longitud":"-98.925745",
 * "velocidad":17.69,
 * "senal":"1",
 * "orientacion":160.5,
 * "estado":"Pos GPS",
 * "boton":false,
 * "odometroKM":17.69
 */

export class DeviceDTO {
    readonly device:string;
    readonly placa:string;
    readonly imei:string;
    readonly empresa:string;
    readonly proveedor:string;
    readonly idempresa:string;
    readonly serievin:string;
    readonly economico:string;
    readonly url:string;
    readonly latitude: string;
    readonly longitude: string;
    readonly createdAt: Date;
    readonly hora:string;
    readonly velocidad:string;
    readonly senal:string;
    readonly orientacion:string;
    readonly estado:string;
    readonly boton:boolean;
    readonly odometrokm:string;
}