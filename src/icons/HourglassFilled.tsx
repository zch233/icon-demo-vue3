// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import HourglassFilledSvg from '@ant-design/icons-svg/lib/asn/HourglassFilled';

export interface HourglassFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const HourglassFilled: HourglassFilledIconType = (props, context) => <Icon name='HourglassFilled' {...{ ...props, ...context.attrs }} icon={HourglassFilledSvg} />;

HourglassFilled.displayName = 'HourglassFilled';

export default HourglassFilled;