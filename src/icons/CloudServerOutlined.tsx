// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CloudServerOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudServerOutlined';

export interface CloudServerOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CloudServerOutlined: CloudServerOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CloudServerOutlinedSvg} />
    ;

CloudServerOutlined.displayName = 'CloudServerOutlined';

export default FunctionalComponent;