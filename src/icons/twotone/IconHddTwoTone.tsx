// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HddTwoToneSvg from 'icon-base/es/asn/HddTwoTone';

export interface HddTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHddTwoTone: HddTwoToneIconType = (props, context) => <Icon name='HddTwoTone' {...{ ...props, ...context.attrs }} icon={HddTwoToneSvg} />;

IconHddTwoTone.displayName = 'IconHddTwoTone';
IconHddTwoTone.theme = 'twotone';
IconHddTwoTone.originName = 'hdd';

export default IconHddTwoTone;
