// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CustomerServiceTwoToneSvg from 'icon-base/es/asn/CustomerServiceTwoTone';

export interface CustomerServiceTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCustomerServiceTwoTone: CustomerServiceTwoToneIconType = (props, context) => (
    <Icon name='CustomerServiceTwoTone' {...{ ...props, ...context.attrs }} icon={CustomerServiceTwoToneSvg} />
);

IconCustomerServiceTwoTone.displayName = 'IconCustomerServiceTwoTone';
IconCustomerServiceTwoTone.theme = 'twotone';
IconCustomerServiceTwoTone.originName = 'customer-service';

export default IconCustomerServiceTwoTone;
