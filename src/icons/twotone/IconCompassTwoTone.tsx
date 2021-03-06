// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CompassTwoToneSvg from 'icon-base/es/asn/CompassTwoTone';

export interface CompassTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCompassTwoTone: CompassTwoToneIconType = (props, context) => (
    <Icon name='CompassTwoTone' {...{ ...props, ...context.attrs }} icon={CompassTwoToneSvg} />
);

IconCompassTwoTone.displayName = 'IconCompassTwoTone';
IconCompassTwoTone.theme = 'twotone';
IconCompassTwoTone.originName = 'compass';

export default IconCompassTwoTone;
