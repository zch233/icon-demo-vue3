// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CustomerServiceOutlinedSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceOutlined';

export interface CustomerServiceOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CustomerServiceOutlined: CustomerServiceOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CustomerServiceOutlinedSvg} />
    ;

CustomerServiceOutlined.displayName = 'CustomerServiceOutlined';

export default FunctionalComponent;