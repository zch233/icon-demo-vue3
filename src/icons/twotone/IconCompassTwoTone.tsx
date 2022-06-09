// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CompassTwoToneSvg from '@ant-design/icons-svg/es/asn/CompassTwoTone';

export interface CompassTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCompassTwoTone: CompassTwoToneIconType = (props, context) => (
    <Icon name='CompassTwoTone' {...{ ...props, ...context.attrs }} icon={CompassTwoToneSvg} />
);

IconCompassTwoTone.displayName = 'IconCompassTwoTone';

export default IconCompassTwoTone;