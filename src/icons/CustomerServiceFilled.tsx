// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CustomerServiceFilledSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceFilled';

export interface CustomerServiceFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CustomerServiceFilled: CustomerServiceFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CustomerServiceFilledSvg} />;

CustomerServiceFilled.displayName = 'CustomerServiceFilled';

export default FunctionalComponent;