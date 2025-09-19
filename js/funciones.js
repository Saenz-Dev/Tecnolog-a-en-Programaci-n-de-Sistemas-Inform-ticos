let planSemestre = {
    1: [
        { materia: "Métodos de estudio y aprendizaje autónomo", creditos: 3, horas: 9, habilidades: "Gestión del tiempo y técnicas de aprendizaje" },
        { materia: "Instalación y Configuración de Sistemas Operativos", creditos: 3, horas: 9, habilidades: "Instalar y configurar sistemas operativos" },
        { materia: "Fundamentos de Programación", creditos: 4, horas: 12, habilidades: "Resolver problemas básicos con código" },
        { materia: "Herramientas Digitales para la Gestión del Conocimiento", creditos: 3, horas: 9, habilidades: "Usar software para organizar y comunicar información" },
        { materia: "Pensamiento Lógico y Matemático", creditos: 3, horas: 9, habilidades: "Aplicar lógica y matemáticas en resolución de problemas" }
    ],
    2: [
        { materia: "Infraestructura, diseño e instrumentación en redes LAN", creditos: 3, horas: 9, habilidades: "Diseñar y configurar redes locales" },
        { materia: "Programación I", creditos: 4, horas: 12, habilidades: "Desarrollar programas con estructuras básicas" },
        { materia: "Bases de datos", creditos: 3, horas: 9, habilidades: "Crear y consultar bases de datos relacionales" },
        { materia: "Diseño y formulación de proyectos", creditos: 3, horas: 9, habilidades: "Plantear y estructurar proyectos académicos o técnicos" },
        { materia: "Cálculo", creditos: 3, horas: 9, habilidades: "Aplicar conceptos de cálculo en problemas técnicos" }
    ],
    3: [
        { materia: "Electiva social y humanística", creditos: 3, horas: 9, habilidades: "Comprender contextos sociales y culturales" },
        { materia: "Electiva I", creditos: 3, horas: 9, habilidades: "Desarrollar competencias en un área complementaria" },
        { materia: "Programación II", creditos: 4, horas: 12, habilidades: "Aplicar programación orientada a objetos" },
        { materia: "Análisis y Diseño de Software", creditos: 3, horas: 9, habilidades: "Modelar y diseñar sistemas de software" },
        { materia: "Física", creditos: 4, horas: 12, habilidades: "Analizar fenómenos físicos aplicados a la ingeniería" }
    ],
    4: [
        { materia: "Electiva Social II", creditos: 3, horas: 9, habilidades: "Fortalecer valores y competencias sociales" },
        { materia: "Programación III", creditos: 4, horas: 12, habilidades: "Desarrollar aplicaciones avanzadas en distintos lenguajes" },
        { materia: "Ingeniería de Software", creditos: 3, horas: 9, habilidades: "Aplicar metodologías de desarrollo de software" },
        { materia: "Estadística Aplicada", creditos: 3, horas: 9, habilidades: "Analizar datos y generar conclusiones estadísticas" },
        { materia: "Fundamentos de administración", creditos: 3, horas: 9, habilidades: "Comprender principios de gestión organizacional" }
    ],
    5: [
        { materia: "Innovación y transformación digital", creditos: 3, horas: 9, habilidades: "Proponer soluciones basadas en nuevas tecnologías" },
        { materia: "Integración tecnológica para el desarrollo de aplicaciones", creditos: 3, horas: 9, habilidades: "Integrar distintas tecnologías en un solo sistema" },
        { materia: "Electiva II", creditos: 3, horas: 9, habilidades: "Ampliar conocimientos en un campo específico" },
        { materia: "Teoría de Probabilidades aplicada", creditos: 4, horas: 12, habilidades: "Modelar fenómenos con probabilidad" },
        { materia: "Emprendimiento e innovación", creditos: 3, horas: 9, habilidades: "Desarrollar ideas de negocio y proyectos innovadores" }
    ],
    6: [
        { materia: "Electiva Social y humanística", creditos: 3, horas: 9, habilidades: "Comprender problemáticas sociales con enfoque crítico" },
        { materia: "Electiva III", creditos: 3, horas: 9, habilidades: "Profundizar en un área técnica o interdisciplinaria" },
        { materia: "Electiva IV", creditos: 3, horas: 9, habilidades: "Fortalecer conocimientos de interés específico" },
        { materia: "Modelos de Gestión de la Información", creditos: 3, horas: 9, habilidades: "Organizar y gestionar información en entornos digitales" },
        { materia: "Opción de Grado", creditos: 3, horas: 9, habilidades: "Aplicar los conocimientos en un proyecto final o de investigación" }
    ]
}


function llenarPlanEstudios(semestre) {
    let asignaturas = planSemestre[semestre];
    let tablaPlanEstudio = document.getElementById("table-asignaturas");
    cleanBodyTable(tablaPlanEstudio);
    llenarBodyTabla(tablaPlanEstudio.querySelector("tbody"), asignaturas);
    document.getElementById("titulo-tabla").textContent = `Semestre ${semestre}`;
}

/*Se utiliza querySelector para encontrar la primera coincidencia HTML*/
function cleanBodyTable(tabla) {
    tabla.querySelector("tbody").innerHTML = "";
}

function createBodyTable(tabla) {
    return document.createElement("tbody");
}

function llenarBodyTabla(bodyTable, asignaturas) {
    for (let asignatura of asignaturas) {
        let fila = document.createElement("tr");
        let celdaAsignatura = document.createElement("td");
        celdaAsignatura.textContent = asignatura.materia;
        let celdaCreditos = document.createElement("td");
        celdaCreditos.textContent = asignatura.creditos;
        let celdaHoras = document.createElement("td");
        celdaHoras.textContent = asignatura.horas;
        let habilidades = document.createElement("td");
        habilidades.textContent = asignatura.habilidades;
        fila.appendChild(celdaAsignatura);
        fila.appendChild(celdaCreditos);
        fila.appendChild(celdaHoras);
        fila.appendChild(habilidades)
        bodyTable.append(fila);
    }
}

document.getElementById("btn-uno").addEventListener("click", () => { llenarPlanEstudios(1) });
document.getElementById("btn-dos").addEventListener("click", () => { llenarPlanEstudios(2) });
document.getElementById("btn-tres").addEventListener("click", () => { llenarPlanEstudios(3) });
document.getElementById("btn-cuatro").addEventListener("click", () => { llenarPlanEstudios(4) });
document.getElementById("btn-cinco").addEventListener("click", () => { llenarPlanEstudios(5) });
document.getElementById("btn-seis").addEventListener("click", () => { llenarPlanEstudios(6) });

/*Funcion para pasar de pagina el slider*/
let posicionSlider = 0;

function pasarGrupos(direccion) {
    let grupo = document.getElementsByClassName("slide");
    let poscicionScroll = document.querySelectorAll(".slides");
    for(let slide of poscicionScroll) {
        slide.scrollTo(0,0);
    }
    for (let i = 0; i < grupo.length; i++) {
        grupo[i].style.display = "none";
    }
    posicionSlider += direccion; 
    if (posicionSlider >= grupo.length) {
        posicionSlider = 0;
    }
    if (posicionSlider < 0) {
        posicionSlider = grupo.length - 1;
    }
    grupo[posicionSlider].style.display = "block";
}

document.getElementById("btn-antes").addEventListener("click", () => {
    pasarGrupos(-1);
});
document.getElementById("btn-despues").addEventListener("click", () => {
    pasarGrupos(1);
});