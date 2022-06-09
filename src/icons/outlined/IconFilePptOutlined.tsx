// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilePptOutlinedSvg from '@ant-design/icons-svg/es/asn/FilePptOutlined';

export interface FilePptOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFilePptOutlined: FilePptOutlinedIconType = (props, context) => (
    <Icon name='FilePptOutlined' {...{ ...props, ...context.attrs }} icon={FilePptOutlinedSvg} />
);

IconFilePptOutlined.displayName = 'IconFilePptOutlined';

export default IconFilePptOutlined;