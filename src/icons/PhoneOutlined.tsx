// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PhoneOutlinedSvg from '@ant-design/icons-svg/lib/asn/PhoneOutlined';

export interface PhoneOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PhoneOutlined: PhoneOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PhoneOutlinedSvg} />
    ;

PhoneOutlined.displayName = 'PhoneOutlined';

export default FunctionalComponent;