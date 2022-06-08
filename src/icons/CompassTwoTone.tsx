// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CompassTwoToneSvg from '@ant-design/icons-svg/lib/asn/CompassTwoTone';

export interface CompassTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CompassTwoTone: CompassTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CompassTwoToneSvg} />;

CompassTwoTone.displayName = 'CompassTwoTone';

export default FunctionalComponent;