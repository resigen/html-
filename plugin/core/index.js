const axios = require("axios");
const fse = require("fs-extra");
const qs = require("querystring");
const uuid = require("uuid");
const download = require("download");
const address = require("address");

// 安全码
const uuidVal = uuid();

/**
 * Exec command
 * @param {String} command command
 * @param {String} options options
 */
function execCommand(command, options) {
    return new Promise((resolve, reject) => {
        exec(command, options, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve({
                    stdout: stdout.toString(),
                    stderr: stderr.toString()
                });
            }
        });
    });
}

function getAddress() {
    return new Promise((resolve, reject) => {
        address((err, addrs) => {
            if (err) {
                reject(err);
            } else {
                resolve(addrs);
            }
        });
    });
}

module.exports = async () => {
    const addrs = await getAddress();
    const pkg = await fse.readJson("./package.json");

    console.log("Security Code:", uuidVal);

    try {
        await axios.post(
            `http://core.doodooke.com/installDevice?uuid=${uuidVal}`,
            {
                addrs,
                env: {
                    port: process.env.APP_PORT,
                    host: process.env.APP_HOST,
                    prefix: process.env.APP_PREFIX
                }
            }
        );
    } catch (error) {
        console.log("Core Network Error");
    }

    // 安全校验
    doodoo.router.use("/core", async (ctx, next) => {
        if (ctx.query.uuid !== uuidVal) {
            throw new Error("Illegal Request");
        }
        await next();
    });

    // 系统连通校验
    doodoo.router.get("/core/ping", async (ctx, next) => {
        ctx.success();
    });

    // 自动更新系统
    doodoo.router.get("/core/installSystem", async (ctx, next) => {
        const downloaded = await download(
            `http://core.doodooke.com/installSystem?${qs.stringify(
                Object.assign(
                    {
                        name: pkg.name,
                        version: pkg.version
                    },
                    addrs
                )
            )}`,
            "./",
            { extract: true }
        );
        if (downloaded.length > 0) {
            const exist = await fse.pathExists(path.resolve("install.js"));
            if (exist) {
                require(path.resolve("install.js"));
            }

            const install = await execCommand(process.env.CMD_INSTALL);
            const restart = await execCommand(process.env.CMD_RESTART);
            ctx.success({ install, restart });
            return;
        }
        ctx.fail();
    });
};
