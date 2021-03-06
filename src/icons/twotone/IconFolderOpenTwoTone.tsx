// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderOpenTwoToneSvg from 'icon-base/es/asn/FolderOpenTwoTone';

export interface FolderOpenTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFolderOpenTwoTone: FolderOpenTwoToneIconType = (props, context) => (
    <Icon name='FolderOpenTwoTone' {...{ ...props, ...context.attrs }} icon={FolderOpenTwoToneSvg} />
);

IconFolderOpenTwoTone.displayName = 'IconFolderOpenTwoTone';
IconFolderOpenTwoTone.theme = 'twotone';
IconFolderOpenTwoTone.originName = 'folder-open';

export default IconFolderOpenTwoTone;
