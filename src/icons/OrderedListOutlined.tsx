// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import OrderedListOutlinedSvg from '@ant-design/icons-svg/lib/asn/OrderedListOutlined';

export interface OrderedListOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const OrderedListOutlined: OrderedListOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={OrderedListOutlinedSvg} />;

OrderedListOutlined.displayName = 'OrderedListOutlined';

export default FunctionalComponent;