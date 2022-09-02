

// const images = {
//     logo: {
//         logo1: require("~/img/logo.png").default,
//         logo2x: require('./logo@2x.png').default,
//     },
//     intro: {
//         intro1: require('~/img').default
//     }
//     ,
// }

// export default images;

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./', false, /.(png|jpe?g|svg)$/));

export default importAll;