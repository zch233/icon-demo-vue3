// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LeftSquareTwoToneSvg from 'icon-base/es/asn/LeftSquareTwoTone';

export interface LeftSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLeftSquareTwoTone: LeftSquareTwoToneIconType = (props, context) => (
    <Icon name='LeftSquareTwoTone' {...{ ...props, ...context.attrs }} icon={LeftSquareTwoToneSvg} />
);

IconLeftSquareTwoTone.displayName = 'IconLeftSquareTwoTone';
IconLeftSquareTwoTone.theme = 'twotone';
IconLeftSquareTwoTone.originName = 'left-square';

export default IconLeftSquareTwoTone;
