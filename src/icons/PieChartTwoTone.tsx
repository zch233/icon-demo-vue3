// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PieChartTwoToneSvg from '@ant-design/icons-svg/lib/asn/PieChartTwoTone';

export interface PieChartTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PieChartTwoTone: PieChartTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PieChartTwoToneSvg} />;

PieChartTwoTone.displayName = 'PieChartTwoTone';

export default PieChartTwoTone;