export const getBuses = (req, res) => {
    const data = {
                   "La Paz": [
                     {
                       "nombre": "Terminal de Buses de La Paz",
                       "ciudad": "La Paz",
                       "departamento": "La Paz",
                       "direccion": "Plaza Antofagasta (Av. Uruguay esquina Av. Perú)",
                       "telefono": "(2) 2285858 / 2286061",
                       "coordenadas": {
                         "latitud": -16.488712,
                         "longitud": -68.141652
                       },
                       "notas": "Terminal principal de la ciudad de La Paz, con servicio interdepartamental e internacional."
                     },
                     {
                       "nombre": "Terminal Metropolitana de El Alto",
                       "ciudad": "El Alto",
                       "departamento": "La Paz",
                       "direccion": "Av. Juan Pablo II (Zona Villa Bolívar)",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": -16.5067833,
                         "longitud": -68.1826766
                       },
                       "notas": "Nueva terminal principal de El Alto (inaugurada 2021), la más grande de Bolivia."
                     },
                     {
                       "nombre": "Parada de buses de Copacabana",
                       "ciudad": "Copacabana",
                       "departamento": "La Paz",
                       "direccion": "Plaza Sucre, Av. 6 de Agosto",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Parada principal en Copacabana (localidad turística a orillas del lago Titicaca)."
                     },
                     {
                       "nombre": "Parada de buses de Desaguadero",
                       "ciudad": "Desaguadero",
                       "departamento": "La Paz",
                       "direccion": "Zona frontera (Desaguadero)",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Parada fronteriza en la localidad de Desaguadero (frontera con Perú)."
                     },
                     {
                       "nombre": "Parada de buses de Tiwanaku",
                       "ciudad": "Tiwanaku",
                       "departamento": "La Paz",
                       "direccion": "Plaza principal de Tiwanaku",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Parada utilizada por buses turísticos y locales en Tiwanaku (sitio arqueológico)."
                     }
                   ],
                   "Oruro": [
                     {
                       "nombre": "Terminal de Buses de Oruro (Nueva)",
                       "ciudad": "Oruro",
                       "departamento": "Oruro",
                       "direccion": "Av. Circunvalación entre Av. Gregorio Reynolds y Av. Campo Jordán",
                       "telefono": "800-140003",
                       "coordenadas": {
                         "latitud": -17.9514,
                         "longitud": -67.0949
                       },
                       "notas": "Terminal de buses departamental inaugurada en 2017, para servicios interdepartamentales e internacionales."
                     },
                     {
                       "nombre": "Terminal de Buses Hernando Siles (Antigua)",
                       "ciudad": "Oruro",
                       "departamento": "Oruro",
                       "direccion": "Calle Raika Bacovick (zona central)",
                       "telefono": "(2) 5279535",
                       "coordenadas": {
                         "latitud": -17.96143,
                         "longitud": -67.10423
                       },
                       "notas": "Antigua terminal de Oruro (1982-2017), actualmente utilizada para buses interprovinciales/locales."
                     },
                     {
                       "nombre": "Parada de buses de Pisiga",
                       "ciudad": "Pisiga",
                       "departamento": "Oruro",
                       "direccion": "Recinto Aduanero, Pisiga (frontera con Chile)",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Parada fronteriza en Pisiga, utilizada por buses hacia/desde Chile (frontera Colchane)."
                     }
                   ],
                   "Potosí": [
                     {
                       "nombre": "Terminal de Buses de Potosí (Nueva)",
                       "ciudad": "Potosí",
                       "departamento": "Potosí",
                       "direccion": "Av. Universitaria (Zona Villa Banzer)",
                       "telefono": "(2) 6243361",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Terminal principal de Potosí para buses interdepartamentales."
                     },
                     {
                       "nombre": "Terminal Interprovincial de Potosí (Antigua)",
                       "ciudad": "Potosí",
                       "departamento": "Potosí",
                       "direccion": "Zona Central (antigua terminal)",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Antigua terminal de Potosí, actualmente utilizada para transporte interprovincial."
                     },
                     {
                       "nombre": "Terminal Terrestre de Uyuni",
                       "ciudad": "Uyuni",
                       "departamento": "Potosí",
                       "direccion": "Zona Norte de Uyuni (Terminal nueva)",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Terminal terrestre de Uyuni (reciente construcción) para buses interdepartamentales y turísticos."
                     },
                     {
                       "nombre": "Parada de buses de Uyuni (antigua)",
                       "ciudad": "Uyuni",
                       "departamento": "Potosí",
                       "direccion": "Av. Arce, esquina Cabrera (Uyuni)",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Parada urbana tradicional en Uyuni (usada antes de la nueva terminal, aún punto de embarque local)."
                     },
                     {
                       "nombre": "Terminal de Buses de Villazón",
                       "ciudad": "Villazón",
                       "departamento": "Potosí",
                       "direccion": "Zona Central, Villazón",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Terminal de Villazón en la frontera con Argentina (La Quiaca)."
                     },
                     {
                       "nombre": "Terminal de Buses de Tupiza",
                       "ciudad": "Tupiza",
                       "departamento": "Potosí",
                       "direccion": "Av. Serrano esquina Suipacha",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Terminal de buses de Tupiza, con servicios a ciudades de Potosí, Tarija y la frontera argentina."
                     },
                     {
                       "nombre": "Terminal de Buses de Llallagua",
                       "ciudad": "Llallagua",
                       "departamento": "Potosí",
                       "direccion": "Zona Central de Llallagua",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Terminal de la localidad minera de Llallagua, usada para transporte interprovincial (norte de Potosí)."
                     }
                   ],
                   "Cochabamba": [
                     {
                       "nombre": "Terminal de Buses de Cochabamba",
                       "ciudad": "Cochabamba",
                       "departamento": "Cochabamba",
                       "direccion": "Av. Ayacucho esquina Calle Tarata",
                       "telefono": "(4) 4220550",
                       "coordenadas": {
                         "latitud": -17.40237,
                         "longitud": -66.15803
                       },
                       "notas": "Terminal principal de Cochabamba, con salidas nacionales e internacionales."
                     }
                   ],
                   "Chuquisaca": [
                     {
                       "nombre": "Terminal de Buses de Sucre",
                       "ciudad": "Sucre",
                       "departamento": "Chuquisaca",
                       "direccion": "Av. Ostria Gutiérrez s/n",
                       "telefono": "(4) 6441292",
                       "coordenadas": {
                         "latitud": -19.03967,
                         "longitud": -65.24679
                       },
                       "notas": "Terminal interdepartamental de Sucre, capital de Chuquisaca."
                     },
                     {
                       "nombre": "Terminal Interdepartamental de Camargo",
                       "ciudad": "Camargo",
                       "departamento": "Chuquisaca",
                       "direccion": "Zona central de Camargo",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": -20.64347,
                         "longitud": -65.20851
                       },
                       "notas": "Terminal de Camargo (provincia Nor Cinti), utilizada para conexiones entre Chuquisaca, Potosí y Tarija."
                     },
                     {
                       "nombre": "Terminal de Buses de Monteagudo",
                       "ciudad": "Monteagudo",
                       "departamento": "Chuquisaca",
                       "direccion": "Zona urbana de Monteagudo",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": -19.81667,
                         "longitud": -63.97139
                       },
                       "notas": "Terminal de Monteagudo (provincia Hernando Siles), parada intermedia importante en el Chaco chuquisaqueño."
                     }
                   ],
                   "Santa Cruz": [
                     {
                       "nombre": "Terminal Bimodal de Santa Cruz (Cástulo Chávez)",
                       "ciudad": "Santa Cruz de la Sierra",
                       "departamento": "Santa Cruz",
                       "direccion": "Av. Intermodal (entre 3er Anillo Interno y Av. Brasil)",
                       "telefono": "(3) 3488482",
                       "coordenadas": {
                         "latitud": -17.7889,
                         "longitud": -63.1611
                       },
                       "notas": "Terminal Bimodal (buses y trenes) de Santa Cruz, principal estación interdepartamental e internacional del oriente boliviano."
                     },
                     {
                       "nombre": "Terminal de Buses de Montero",
                       "ciudad": "Montero",
                       "departamento": "Santa Cruz",
                       "direccion": "Carretera al Norte s/n, ingreso a Montero",
                       "telefono": "71691702",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Nueva terminal interprovincial en Montero, para buses hacia provincias del norte cruceño."
                     },
                     {
                       "nombre": "Terminal de Buses de Puerto Quijarro",
                       "ciudad": "Puerto Quijarro",
                       "departamento": "Santa Cruz",
                       "direccion": "Av. Colón s/n, Puerto Quijarro",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Terminal en Puerto Quijarro, frontera con Brasil (próxima a Corumbá)."
                     },
                     {
                       "nombre": "Parada de buses de Roboré",
                       "ciudad": "Roboré",
                       "departamento": "Santa Cruz",
                       "direccion": "Zona Estación de Tren, Roboré",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Parada intermedia en Roboré, ciudad ubicada en la ruta Santa Cruz–Puerto Quijarro."
                     },
                     {
                       "nombre": "Parada de buses de Samaipata",
                       "ciudad": "Samaipata",
                       "departamento": "Santa Cruz",
                       "direccion": "Zona central de Samaipata",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Parada utilizada por buses y trufis hacia Samaipata (destino turístico en la provincia Florida)."
                     },
                     {
                       "nombre": "Terminal de Buses de San Ignacio de Velasco",
                       "ciudad": "San Ignacio de Velasco",
                       "departamento": "Santa Cruz",
                       "direccion": "Av. Velasco s/n",
                       "telefono": "(591) 74953044",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Terminal de San Ignacio de Velasco, para transporte interprovincial e interdepartamental en la Chiquitanía."
                     },
                     {
                       "nombre": "Parada de buses de San José de Chiquitos",
                       "ciudad": "San José de Chiquitos",
                       "departamento": "Santa Cruz",
                       "direccion": "Zona Estación Ferroviaria, San José",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Parada habitual en San José de Chiquitos, pueblo intermedio en la ruta al Pantanal."
                     },
                     {
                       "nombre": "Terminal de Buses de San Matías",
                       "ciudad": "San Matías",
                       "departamento": "Santa Cruz",
                       "direccion": "Zona urbana de San Matías",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Terminal de la población fronteriza de San Matías (frontera con Brasil)."
                     },
                     {
                       "nombre": "Terminal de Buses Isaac Ortuño (Camiri)",
                       "ciudad": "Camiri",
                       "departamento": "Santa Cruz",
                       "direccion": "Calle Carlos Daher, Zona La Williams",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Terminal de Camiri, también conocida como Terminal Isaac Ortuño, para buses hacia Santa Cruz, Sucre y Yacuiba."
                     }
                   ],
                   "Beni": [
                     {
                       "nombre": "Terminal de Buses de Trinidad",
                       "ciudad": "Trinidad",
                       "departamento": "Beni",
                       "direccion": "Av. Beni esquina Av. Aviador 'Pínto'",
                       "telefono": "(3) 4624607",
                       "coordenadas": {
                         "latitud": -14.83478,
                         "longitud": -64.89392
                       },
                       "notas": "Terminal principal de Trinidad, con salidas hacia el oriente y occidente del país."
                     },
                     {
                       "nombre": "Terminal de Buses de Riberalta",
                       "ciudad": "Riberalta",
                       "departamento": "Beni",
                       "direccion": "Zona central de Riberalta",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": -11.00392,
                         "longitud": -66.05879
                       },
                       "notas": "Terminal de Riberalta, ciudad al norte del Beni, con transporte hacia Pando, La Paz y Santa Cruz."
                     },
                     {
                       "nombre": "Terminal de Buses de Guayaramerín",
                       "ciudad": "Guayaramerín",
                       "departamento": "Beni",
                       "direccion": "Zona central de Guayaramerín",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": -10.83893,
                         "longitud": -65.36671
                       },
                       "notas": "Terminal de Guayaramerín, ciudad fronteriza con Brasil (frente a Guajará-Mirim)."
                     },
                     {
                       "nombre": "Terminal de Buses de Rurrenabaque",
                       "ciudad": "Rurrenabaque",
                       "departamento": "Beni",
                       "direccion": "Av. Principal, Rurrenabaque",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": -14.43059,
                         "longitud": -67.50398
                       },
                       "notas": "Terminal de Rurrenabaque, puerta de entrada al Amazonas y parque Madidi (servicios a La Paz, Beni y Pando)."
                     },
                     {
                       "nombre": "Terminal de Buses de San Borja",
                       "ciudad": "San Borja",
                       "departamento": "Beni",
                       "direccion": "Zona este de San Borja (Nueva Terminal)",
                       "telefono": "N/D",
                       "coordenadas": {
                         "latitud": -14.8694,
                         "longitud": -66.7553
                       },
                       "notas": "Terminal de San Borja, recientemente inaugurada para mejorar el transporte en la provincia Ballivián."
                     }
                   ],
                   "Pando": [
                     {
                       "nombre": "Terminal Interdepartamental de Cobija",
                       "ciudad": "Cobija",
                       "departamento": "Pando",
                       "direccion": "Km 2, Av. 9 de Febrero",
                       "telefono": "(3) 8423122",
                       "coordenadas": {
                         "latitud": -11.06059,
                         "longitud": -68.79529
                       },
                       "notas": "Terminal de Cobija, capital de Pando, con buses hacia La Paz, Beni y el interior (frontera Brasil)."
                     }
                   ],
                   "Tarija": [
                     {
                       "nombre": "Terminal de Buses de Tarija",
                       "ciudad": "Tarija",
                       "departamento": "Tarija",
                       "direccion": "Av. Las Américas (Zona Torrecillas)",
                       "telefono": "(4) 6636508",
                       "coordenadas": {
                         "latitud": -21.5600,
                         "longitud": -64.6739
                       },
                       "notas": "Terminal interdepartamental de Tarija (ubicada al sur de la ciudad, zona Torrecillas)."
                     },
                     {
                       "nombre": "Terminal de Buses de Yacuiba",
                       "ciudad": "Yacuiba",
                       "departamento": "Tarija",
                       "direccion": "Av. San Martín s/n",
                       "telefono": "(4) 6824794",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Terminal de Yacuiba, ciudad fronteriza con Argentina (Provincia de Salta)."
                     },
                     {
                       "nombre": "Terminal de Buses de Villamontes",
                       "ciudad": "Villamontes",
                       "departamento": "Tarija",
                       "direccion": "Av. Méndez Arcos s/n, Zona Central",
                       "telefono": "72988922",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Terminal de Villamontes (Gran Chaco tarijeño), con servicio a Tarija, Yacuiba y Santa Cruz."
                     },
                     {
                       "nombre": "Terminal Interdepartamental de Bermejo",
                       "ciudad": "Bermejo",
                       "departamento": "Tarija",
                       "direccion": "Zona urbana de Bermejo",
                       "telefono": "67371832",
                       "coordenadas": {
                         "latitud": null,
                         "longitud": null
                       },
                       "notas": "Terminal de Bermejo, ciudad fronteriza con Argentina (Provincia de Salta)."
                     }
                   ]
                 };

    res.json(data);
};