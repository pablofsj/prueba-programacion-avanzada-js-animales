//obtener imagen y sonido animal relacionado, funcion autoejecutable

export { arrAnimales, arrInstanciados };

const arrAnimales = [];
const arrInstanciados = [];


(async () => {
  try {
      const response = await fetch("animales.json");
      if (!response.ok) {
          throw {
              code: response.status,
              message: "Datos solicitados no encontrados"
          }
      }
      const data = await response.json();
      data.animales.forEach(animal => {
          arrAnimales.push(animal)
      });
  } catch (error) {
      console.log(error);
  }
})();

