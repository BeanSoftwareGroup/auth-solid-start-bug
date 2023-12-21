# SolidStart

This is a minimum reproduction repository for a bug in `@auth/solid-start`.

```
An error occured while server rendering /:

	Cannot find module '/Users/username/Code/auth-solid-start-bug/node_modules/.pnpm/@auth+solid-start@0.1.8_solid-js@1.8.5_solid-start@0.3.10/node_modules/@auth/solid-start/chunk-HXRSFH6L.js' imported from /Users/hans/Code/auth-solid-start-bug/node_modules/.pnpm/@auth+solid-start@0.1.8_solid-js@1.8.5_solid-start@0.3.10/node_modules/@auth/solid-start/index.js
Error: Cannot find module '/Users/hans/Code/auth-solid-start-bug/node_modules/.pnpm/@auth+solid-start@0.1.8_solid-js@1.8.5_solid-start@0.3.10/node_modules/@auth/solid-start/chunk-HXRSFH6L.js' imported from /Users/hans/Code/auth-solid-start-bug/node_modules/.pnpm/@auth+solid-start@0.1.8_solid-js@1.8.5_solid-start@0.3.10/node_modules/@auth/solid-start/index.js
    at new NodeError (node:internal/errors:405:5)
    at finalizeResolution (node:internal/modules/esm/resolve:224:11)
    at moduleResolve (node:internal/modules/esm/resolve:837:10)
    at defaultResolve (node:internal/modules/esm/resolve:1035:11)
    at DefaultModuleLoader.resolve (node:internal/modules/esm/loader:269:12)
    at DefaultModuleLoader.getModuleJob (node:internal/modules/esm/loader:153:32)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:76:33)
    at link (node:internal/modules/esm/module_job:75:36
```

This is a bare-bones solid-start project such as you would create with `pnpm create solid`.

The only change that has been made is to import the module `@auth/solid-start` in entry-server.tsx.
