// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FlagTwoToneSvg from 'icon-base/es/asn/FlagTwoTone';

export interface FlagTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFlagTwoTone: FlagTwoToneIconType = (props, context) => <Icon name='FlagTwoTone' {...{ ...props, ...context.attrs }} icon={FlagTwoToneSvg} />;

IconFlagTwoTone.displayName = 'IconFlagTwoTone';
IconFlagTwoTone.theme = 'twotone';
IconFlagTwoTone.originName = 'flag';

export default IconFlagTwoTone;
