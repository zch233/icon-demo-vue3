// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CreditCardFilledSvg from '@ant-design/icons-svg/lib/asn/CreditCardFilled';

export interface CreditCardFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CreditCardFilled: CreditCardFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CreditCardFilledSvg} />
    ;

CreditCardFilled.displayName = 'CreditCardFilled';

export default FunctionalComponent;