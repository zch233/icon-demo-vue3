// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import CreditCardOutlinedSvg from '@ant-design/icons-svg/lib/asn/CreditCardOutlined';

export interface CreditCardOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CreditCardOutlined: CreditCardOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={CreditCardOutlinedSvg} />
    ;

CreditCardOutlined.displayName = 'CreditCardOutlined';

export default CreditCardOutlined;