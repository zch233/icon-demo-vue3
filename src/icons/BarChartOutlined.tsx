// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BarChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarChartOutlined';

export interface BarChartOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BarChartOutlined: BarChartOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BarChartOutlinedSvg} />
    ;

BarChartOutlined.displayName = 'BarChartOutlined';

export default FunctionalComponent;