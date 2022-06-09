// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOutlined';

export interface FolderOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FolderOutlined: FolderOutlinedIconType = (props, context) => <Icon name='FolderOutlined' {...{ ...props, ...context.attrs }} icon={FolderOutlinedSvg} />;

FolderOutlined.displayName = 'FolderOutlined';

export default FolderOutlined;