// src/utils/importImages.js
function importAll(r) {
    let articulos = {};
    r.keys().map((item, index) => { articulos[item.replace('./', '')] = r(item); });
    return articulos;
  }
  
  const articulos = importAll(require.context('../articulos', false, /\.(json)$/));
  
  export default articulos;
  