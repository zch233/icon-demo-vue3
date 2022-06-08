// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DollarCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/DollarCircleTwoTone';

export interface DollarCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DollarCircleTwoTone: DollarCircleTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DollarCircleTwoToneSvg} />;

DollarCircleTwoTone.displayName = 'DollarCircleTwoTone';

export default FunctionalComponent;