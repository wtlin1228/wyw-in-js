var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) =>
  __defProp(target, '__esModule', { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __exportStar = (target, module2, desc) => {
  __markAsModule(target);
  if (
    (module2 && typeof module2 === 'object') ||
    typeof module2 === 'function'
  ) {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== 'default')
        __defProp(target, key, {
          get: () => module2[key],
          enumerable:
            !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable,
        });
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule) return module2;
  return __exportStar(
    __defProp(
      module2 != null ? __create(__getProtoOf(module2)) : {},
      'default',
      { value: module2, enumerable: true }
    ),
    module2
  );
};
__export(exports, {
  default: () => stdin_default,
  isUnnecessaryReactCall: () => isUnnecessaryReactCall.default,
  syncResolve: () => asyncResolveFallback.syncResolve,
});
var asyncResolveFallback = __toModule(require('./asyncResolveFallback'));
__exportStar(exports, __toModule(require('./collectExportsAndImports')));
var isUnnecessaryReactCall = __toModule(require('./isUnnecessaryReactCall'));
var stdin_default = 123;
