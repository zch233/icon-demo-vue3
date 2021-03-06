// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DollarCircleTwoToneSvg from 'icon-base/es/asn/DollarCircleTwoTone';

export interface DollarCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDollarCircleTwoTone: DollarCircleTwoToneIconType = (props, context) => (
    <Icon name='DollarCircleTwoTone' {...{ ...props, ...context.attrs }} icon={DollarCircleTwoToneSvg} />
);

IconDollarCircleTwoTone.displayName = 'IconDollarCircleTwoTone';
IconDollarCircleTwoTone.theme = 'twotone';
IconDollarCircleTwoTone.originName = 'dollar-circle';

export default IconDollarCircleTwoTone;
