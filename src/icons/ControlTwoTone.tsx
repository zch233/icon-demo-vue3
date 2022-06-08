// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ControlTwoToneSvg from '@ant-design/icons-svg/lib/asn/ControlTwoTone';

export interface ControlTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ControlTwoTone: ControlTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ControlTwoToneSvg} />;

ControlTwoTone.displayName = 'ControlTwoTone';

export default ControlTwoTone;