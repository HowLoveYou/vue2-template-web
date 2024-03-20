import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

export default (Vue) => {
  const requireComponent = require.context(
    "./",
    false,
    /base-[A-z]\w+\.(vue|js)$/
  );

  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(
      camelCase(
        fileName
          .split("/")
          .pop()
          .replace(/\.\w+$/, "")
      )
    );
    console.log(componentName);
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};
