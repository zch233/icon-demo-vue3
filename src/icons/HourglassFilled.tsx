// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import HourglassFilledSvg from '@ant-design/icons-svg/lib/asn/HourglassFilled';

export interface HourglassFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const HourglassFilled: HourglassFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={HourglassFilledSvg} />
    ;

HourglassFilled.displayName = 'HourglassFilled';

export default FunctionalComponent;