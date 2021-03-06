// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderTwoToneSvg from 'icon-base/es/asn/FolderTwoTone';

export interface FolderTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFolderTwoTone: FolderTwoToneIconType = (props, context) => <Icon name='FolderTwoTone' {...{ ...props, ...context.attrs }} icon={FolderTwoToneSvg} />;

IconFolderTwoTone.displayName = 'IconFolderTwoTone';
IconFolderTwoTone.theme = 'twotone';
IconFolderTwoTone.originName = 'folder';

export default IconFolderTwoTone;
