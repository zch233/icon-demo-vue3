import * as allIconDefs from '@ant-design/icons-svg';
import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);
console.log(allIconDefs.AlignCenterOutlined);

const generateIcons = async () => {
    const iconsDir = path.join(__dirname, '../src/icons');
    try {
        await fs.accessSync(iconsDir);
    } catch (err) {
        await fs.mkdirSync(iconsDir);
    }
    // generate icon file
    Promise.all(
        Object.keys(allIconDefs).map(svgIdentifier => {
            writeFile(
                path.resolve(__dirname, `../src/icons/${svgIdentifier}.tsx`),
                `
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
export default '${svgIdentifier}'
                `.trim()
            );
        })
    );

    // generate icon index
    const entryText = Object.keys(allIconDefs)
        .sort()
        .map(svgIdentifier => {
            return `export { default as ${svgIdentifier} } from './${svgIdentifier}';`;
        })
        .join('\n');

    fs.appendFileSync(
        path.resolve(__dirname, '../src/icons/index.tsx'),
        `
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！
${entryText}
        `.trim()
    );
};

generateIcons();
