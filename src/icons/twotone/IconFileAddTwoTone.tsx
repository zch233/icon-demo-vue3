// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileAddTwoToneSvg from 'icon-base/es/asn/FileAddTwoTone';

export interface FileAddTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileAddTwoTone: FileAddTwoToneIconType = (props, context) => (
    <Icon name='FileAddTwoTone' {...{ ...props, ...context.attrs }} icon={FileAddTwoToneSvg} />
);

IconFileAddTwoTone.displayName = 'IconFileAddTwoTone';
IconFileAddTwoTone.theme = 'twotone';
IconFileAddTwoTone.originName = 'file-add';

export default IconFileAddTwoTone;
