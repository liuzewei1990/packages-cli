import * as components from "./.packages/packages.js";
import componentMetas from "./.packages/packages.meta.js";
const install = function(Vue){
    Object.keys(components)?.forEach((key) => {
      Vue.component(key, components[key]);
    });
    
    Vue.prototype.$componentMetas = componentMetas;
}

export default {install}