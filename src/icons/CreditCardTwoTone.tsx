// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CreditCardTwoToneSvg from '@ant-design/icons-svg/lib/asn/CreditCardTwoTone';

export interface CreditCardTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CreditCardTwoTone: CreditCardTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CreditCardTwoToneSvg} />
    ;

CreditCardTwoTone.displayName = 'CreditCardTwoTone';

export default FunctionalComponent;