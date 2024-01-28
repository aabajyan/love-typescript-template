const fs = require("fs");

fs.cpSync("./res", "./game/res", { recursive: true });