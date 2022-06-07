// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CalculatorFilledSvg from '@ant-design/icons-svg/lib/asn/CalculatorFilled';

export interface CalculatorFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CalculatorFilled: CalculatorFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CalculatorFilledSvg} />
    ;

CalculatorFilled.displayName = 'CalculatorFilled';

export default FunctionalComponent;