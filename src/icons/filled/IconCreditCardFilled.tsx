// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CreditCardFilledSvg from '@ant-design/icons-svg/es/asn/CreditCardFilled';

export interface CreditCardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCreditCardFilled: CreditCardFilledIconType = (props, context) => (
    <Icon name='CreditCardFilled' {...{ ...props, ...context.attrs }} icon={CreditCardFilledSvg} />
);

IconCreditCardFilled.displayName = 'IconCreditCardFilled';

export default IconCreditCardFilled;