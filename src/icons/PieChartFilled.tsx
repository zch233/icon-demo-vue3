// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PieChartFilledSvg from '@ant-design/icons-svg/lib/asn/PieChartFilled';

export interface PieChartFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PieChartFilled: PieChartFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PieChartFilledSvg} />
    ;

PieChartFilled.displayName = 'PieChartFilled';

export default FunctionalComponent;