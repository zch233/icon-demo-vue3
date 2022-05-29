import * as allIconDefs from '@ant-design/icons-svg';
import * as path from 'path';
import * as fs from 'fs';

console.log(allIconDefs.AlignCenterOutlined);
// Object.keys(allIconDefs).map(async (icon) => {
//     await fs.writeFileSync(
//         path.resolve(__dirname, `../src/icons/${icon}.tsx`),
//         `
// // GENERATE BY ./scripts/generate.ts
// // DON NOT EDIT IT MANUALLY
//
// import { FunctionalComponent } from 'vue';
// import <%= svgIdentifier %>Svg from '@ant-design/icons-svg/lib/asn/<%= svgIdentifier %>';
// import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
//
// export interface <%= svgIdentifier %>IconType extends FunctionalComponent<AntdIconProps> {
//   displayName: string;
// }
//
// const <%= svgIdentifier %>: <%= svgIdentifier %>IconType = (props, context) => {
//   const p = { ...props, ...context.attrs };
//   return <AntdIcon {...p} icon={<%= svgIdentifier %>Svg}></AntdIcon>;
// };
//
// <%= svgIdentifier %>.displayName = '<%= svgIdentifier %>';
// <%= svgIdentifier %>.inheritAttrs = false;
// export default <%= svgIdentifier %>;
// `.trim()
//     )
// })
const generateIcons = async () => {
    const iconsDir = path.join(__dirname, '../src/icons');
    console.log(iconsDir, 111);
    try {
        await fs.accessSync(iconsDir);
    } catch (err) {
        await fs.mkdirSync(iconsDir);
    }
    Object.keys(allIconDefs).map(item => {
        console.log(item);
    });

    console.log(1111);
};

// generateIcons()
