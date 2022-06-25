// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CreditCardTwoToneSvg from 'icon-base/es/asn/CreditCardTwoTone';

export interface CreditCardTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCreditCardTwoTone: CreditCardTwoToneIconType = (props, context) => (
    <Icon name='CreditCardTwoTone' {...{ ...props, ...context.attrs }} icon={CreditCardTwoToneSvg} />
);

IconCreditCardTwoTone.displayName = 'IconCreditCardTwoTone';
IconCreditCardTwoTone.theme = 'twotone';
IconCreditCardTwoTone.originName = 'credit-card';

export default IconCreditCardTwoTone;
