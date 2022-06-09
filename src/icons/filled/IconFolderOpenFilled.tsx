// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderOpenFilledSvg from '@ant-design/icons-svg/es/asn/FolderOpenFilled';

export interface FolderOpenFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFolderOpenFilled: FolderOpenFilledIconType = (props, context) => (
    <Icon name='FolderOpenFilled' {...{ ...props, ...context.attrs }} icon={FolderOpenFilledSvg} />
);

IconFolderOpenFilled.displayName = 'IconFolderOpenFilled';

export default IconFolderOpenFilled;