// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CustomerServiceOutlinedSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceOutlined';

export interface CustomerServiceOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CustomerServiceOutlined: CustomerServiceOutlinedIconType = (props, context) => <Icon name='CustomerServiceOutlined' {...{ ...props, ...context.attrs }} icon={CustomerServiceOutlinedSvg} />;

CustomerServiceOutlined.displayName = 'CustomerServiceOutlined';

export default CustomerServiceOutlined;