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
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import ${svgIdentifier}Svg from '@ant-design/icons-svg/lib/asn/${svgIdentifier}';

export interface ${svgIdentifier}IconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ${svgIdentifier}: ${svgIdentifier}IconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={${svgIdentifier}Svg} />
    ;

${svgIdentifier}.displayName = '${svgIdentifier}';

export default ${svgIdentifier};
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
