/*
Obtener los nombres de los clientes los cuales tienen inscrito algún producto disponible sólo en las 
sucursales que visitan.
*/

SELECT C.id, C.nombre, C.apellidos 
FROM Cliente C
JOIN Visitan V on C.id = V.idCliente
JOIN Inscripción I on V.idCliente = I.idCliente
JOIN Disponibilidad D on V.idSucursal = D.idSucursal AND I.idProducto = D.idProducto
