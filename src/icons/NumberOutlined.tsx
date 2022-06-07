// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import NumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/NumberOutlined';

export interface NumberOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const NumberOutlined: NumberOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={NumberOutlinedSvg} />
    ;

NumberOutlined.displayName = 'NumberOutlined';

export default NumberOutlined;