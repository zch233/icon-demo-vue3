// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PieChartTwoToneSvg from 'icon-base/es/asn/PieChartTwoTone';

export interface PieChartTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPieChartTwoTone: PieChartTwoToneIconType = (props, context) => (
    <Icon name='PieChartTwoTone' {...{ ...props, ...context.attrs }} icon={PieChartTwoToneSvg} />
);

IconPieChartTwoTone.displayName = 'IconPieChartTwoTone';
IconPieChartTwoTone.theme = 'twotone';
IconPieChartTwoTone.originName = 'pie-chart';

export default IconPieChartTwoTone;
