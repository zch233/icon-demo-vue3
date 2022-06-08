// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CreditCardTwoToneSvg from '@ant-design/icons-svg/lib/asn/CreditCardTwoTone';

export interface CreditCardTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CreditCardTwoTone: CreditCardTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CreditCardTwoToneSvg} />;

CreditCardTwoTone.displayName = 'CreditCardTwoTone';

export default FunctionalComponent;