// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PieChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/PieChartOutlined';

export interface PieChartOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PieChartOutlined: PieChartOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PieChartOutlinedSvg} />
    ;

PieChartOutlined.displayName = 'PieChartOutlined';

export default FunctionalComponent;