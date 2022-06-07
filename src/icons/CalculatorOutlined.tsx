// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import CalculatorOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalculatorOutlined';

export interface CalculatorOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CalculatorOutlined: CalculatorOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={CalculatorOutlinedSvg} />
    ;

CalculatorOutlined.displayName = 'CalculatorOutlined';

export default CalculatorOutlined;