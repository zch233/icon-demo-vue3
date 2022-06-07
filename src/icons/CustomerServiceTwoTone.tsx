// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import CustomerServiceTwoToneSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceTwoTone';

export interface CustomerServiceTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CustomerServiceTwoTone: CustomerServiceTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={CustomerServiceTwoToneSvg} />
    ;

CustomerServiceTwoTone.displayName = 'CustomerServiceTwoTone';

export default CustomerServiceTwoTone;