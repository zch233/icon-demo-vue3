// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RadarChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadarChartOutlined';

export interface RadarChartOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RadarChartOutlined: RadarChartOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RadarChartOutlinedSvg} />
    ;

RadarChartOutlined.displayName = 'RadarChartOutlined';

export default FunctionalComponent;