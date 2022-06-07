// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PieChartTwoToneSvg from '@ant-design/icons-svg/lib/asn/PieChartTwoTone';

export interface PieChartTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PieChartTwoTone: PieChartTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PieChartTwoToneSvg} />
    ;

PieChartTwoTone.displayName = 'PieChartTwoTone';

export default FunctionalComponent;