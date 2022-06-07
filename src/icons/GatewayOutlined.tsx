// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import GatewayOutlinedSvg from '@ant-design/icons-svg/lib/asn/GatewayOutlined';

export interface GatewayOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const GatewayOutlined: GatewayOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={GatewayOutlinedSvg} />
    ;

GatewayOutlined.displayName = 'GatewayOutlined';

export default FunctionalComponent;