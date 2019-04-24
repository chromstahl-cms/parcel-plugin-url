const fs = require('file-system');
const path = require('path');

const getUrl = prod => {
    const configFileExists = fs.existsSync("api.json");
    let url = undefined;

    if (configFileExists) {
        const data = fs.readFileSync("api.json", "UTf-8");
        const urlObject = JSON.parse(data)["url"];
        if (prod) {
            url = urlObject["prod"];
        } else {
            url = urlObject["dev"];
        }
    }

    const envUrl = process.env.CHROMSTAHL_URL;

    if (envUrl != undefined) {
        url = envUrl;
    }

    return url;
};

const writeURLFile = url => {
    const content = `
export const url = "${url}";
`;

    fs.writeFileSync("src/url.ts", content);
};

module.exports = bundler => {
    bundler.on('buildStart', async files => {
        const prod = process.env.NODE_ENV === 'production';
        const url = getUrl(prod);
        writeURLFile(url);
    });
};
