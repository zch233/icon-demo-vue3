// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CalculatorTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalculatorTwoTone';

export interface CalculatorTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CalculatorTwoTone: CalculatorTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CalculatorTwoToneSvg} />
    ;

CalculatorTwoTone.displayName = 'CalculatorTwoTone';

export default FunctionalComponent;