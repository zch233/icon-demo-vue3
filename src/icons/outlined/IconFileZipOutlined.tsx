// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileZipOutlinedSvg from '@ant-design/icons-svg/es/asn/FileZipOutlined';

export interface FileZipOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileZipOutlined: FileZipOutlinedIconType = (props, context) => (
    <Icon name='FileZipOutlined' {...{ ...props, ...context.attrs }} icon={FileZipOutlinedSvg} />
);

IconFileZipOutlined.displayName = 'IconFileZipOutlined';

export default IconFileZipOutlined;