// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import HeatMapOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeatMapOutlined';

export interface HeatMapOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const HeatMapOutlined: HeatMapOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={HeatMapOutlinedSvg} />
    ;

HeatMapOutlined.displayName = 'HeatMapOutlined';

export default FunctionalComponent;