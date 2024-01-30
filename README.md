# LÖVE 2D TypeScript Project Template

A template LÖVE 2D TypeScript Project made possible with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

You can click `Use this template` to clone this repo, or download it as a zip.

## Scripts

Requires [NodeJS](https://nodejs.org/en/download/) and [LÖVE 2D](https://love2d.org/) within your CLI.

| Command                | Description                                       |
| ---------------------- | --------------------------------------------------|
| `pnpm install`         | ⏬ Install dependencies                           |
| `pnpm bundle`          | 🔨 Bundle everything                              |
| `pnpm watch`           | 🔨x♾ Re-Bundle Lua files when a TS file is saved  |
| `pnpm start`           | 🎮 Start the game                                 |
| `pnpm lint`            | 💄 Checks for linting issues in code              |

To distribute the game, see the [game distribution wiki page](https://love2d.org/wiki/Game_Distribution).

External files can be placed in `res/` and referenced with `res/<filename>`.

e.g.

```ts
love.filesystem.read("res/input.txt");
```

### Notes

- If you're using VS Code, the [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) extension will automatically format your code for you so you don't need to run `pnpm fix` on every change.
- Index your arrays at 0 in your source code.
- Lua does not iterate over sparse arrays (arrays with no values in the middle of them).

### Links

- [TypeScriptToLua Wiki](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki)
  - [Writing Declarations](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki/Writing-Declarations)
  - [Compiler Directives](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki/Compiler-Directives)
- [LÖVE 2D Wiki](https://love2d.org/wiki/Main_Page)
- [LÖVE 2D - Getting Started](https://love2d.org/wiki/Getting_Started)
