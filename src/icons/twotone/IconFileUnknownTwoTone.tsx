// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileUnknownTwoToneSvg from 'icon-base/es/asn/FileUnknownTwoTone';

export interface FileUnknownTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileUnknownTwoTone: FileUnknownTwoToneIconType = (props, context) => (
    <Icon name='FileUnknownTwoTone' {...{ ...props, ...context.attrs }} icon={FileUnknownTwoToneSvg} />
);

IconFileUnknownTwoTone.displayName = 'IconFileUnknownTwoTone';
IconFileUnknownTwoTone.theme = 'twotone';
IconFileUnknownTwoTone.originName = 'file-unknown';

export default IconFileUnknownTwoTone;
