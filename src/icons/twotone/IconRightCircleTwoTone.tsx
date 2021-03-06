// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RightCircleTwoToneSvg from 'icon-base/es/asn/RightCircleTwoTone';

export interface RightCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRightCircleTwoTone: RightCircleTwoToneIconType = (props, context) => (
    <Icon name='RightCircleTwoTone' {...{ ...props, ...context.attrs }} icon={RightCircleTwoToneSvg} />
);

IconRightCircleTwoTone.displayName = 'IconRightCircleTwoTone';
IconRightCircleTwoTone.theme = 'twotone';
IconRightCircleTwoTone.originName = 'right-circle';

export default IconRightCircleTwoTone;
