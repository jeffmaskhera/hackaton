import {useState} from "react";

export const UserTableHeader: any = [
    {
        id: 'checkbox',
        text: '',
        align: 'center',
    },
    {
        id: 'benefit',
        text: 'Beneficio',
        align: 'left',
    },

    {
        id: 'description',
        text: 'Descripción',
        align: 'left',
    },
    {
        id: 'actions',
        text: 'Acciones',
        align: 'left',
    }

];

export const benefitTable:any = [
    {
        id: 1,
        benefit: "Gimnasio",
        description: "tienes un gimnasio mensual"
    },
    {
        id: 2,
        benefit: "Horario flexible",
        description: "Tienes la libertad de gestionar tu horario de trabajo según tus necesidades."
    },
    {
        id: 3,
        benefit: "Home office",
        description: "Posibilidad de trabajar desde casa algunos días a la semana."
    },
    {
        id: 4,
        benefit: "Bonos por desempeño",
        description: "Premiamos el buen desempeño con bonificaciones adicionales."
    },
    {
        id: 5,
        benefit: "Crecimiento profesional",
        description: "Oportunidades de desarrollo y crecimiento dentro de la empresa."
    },
    {
        id: 6,
        benefit: "Días libres adicionales",
        description: "Ofrecemos días libres adicionales para que puedas recargar energías."
    },
    {
        id: 7,
        benefit: "Programa de mentoría",
        description: "Acceso a un programa de mentoría para tu crecimiento profesional."
    },
    {
        id: 8,
        benefit: "Beneficios fiscales",
        description: "Aprovecha beneficios fiscales exclusivos para empleados de la empresa."
    },
    {
        id: 9,
        benefit: "Descuentos corporativos",
        description: "Descuentos especiales en productos y servicios de empresas asociadas."
    },
    {
        id: 10,
        benefit: "Programa de bienestar",
        description: "Contamos con un programa integral de bienestar para cuidar tu salud física y mental."
    },
    {
        id: 11,
        benefit: "Guardería",
        description: "Facilitamos el acceso a guarderías para los hijos de nuestros empleados."
    },
    {
        id: 12,
        benefit: "Formación continua",
        description: "Posibilidad de acceder a cursos y capacitaciones para seguir aprendiendo."
    }
]


export const UserTableHeaderHistory: any = [
    {
        id: 'user',
        text: 'Usuario',
        align: 'left',
    },

    {
        id: 'date',
        text: 'Fecha',
        align: 'left',
    },
    {
        id: 'benefit',
        text: 'Beneficio',
        align: 'left',
    },
    {
        id: 'coin',
        text: 'UBITS Coin',
        align: 'left',
    }
];



export const historicTable:any = [
    {
        id: 1,
        user: "Jefrey Sánchez",
        date: "15-05-2024",
        benefit: "Se ganó una camioneta 0km marca Volvo",
        coin: '1000 UBITS Coin'
    },
    {
        id: 2,
        user: "María Rodríguez",
        date: "20-06-2024",
        benefit: "Recibió un bono por desempeño excepcional",
        coin: '500 UBITS Coin'
    },
    {
        id: 3,
        user: "Pedro López",
        date: "10-07-2024",
        benefit: "Aprovechó descuentos corporativos en viajes",
        coin: '300 UBITS Coin'
    },
    {
        id: 4,
        user: "Ana García",
        date: "25-08-2024",
        benefit: "Obtuvo un ascenso a un nuevo puesto",
        coin: '700 UBITS Coin'
    },
    {
        id: 5,
        user: "Carlos Martínez",
        date: "05-09-2024",
        benefit: "Participó en el programa de bienestar y ganó un viaje de vacaciones",
        coin: '800 UBITS Coin'
    }
];
