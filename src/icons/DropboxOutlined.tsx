// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DropboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/DropboxOutlined';

export interface DropboxOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DropboxOutlined: DropboxOutlinedIconType = (props, context) => <Icon name='DropboxOutlined' {...{ ...props, ...context.attrs }} icon={DropboxOutlinedSvg} />;

DropboxOutlined.displayName = 'DropboxOutlined';

export default DropboxOutlined;