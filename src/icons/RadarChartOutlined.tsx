// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RadarChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadarChartOutlined';

export interface RadarChartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RadarChartOutlined: RadarChartOutlinedIconType = (props, context) => <Icon name='RadarChartOutlined' {...{ ...props, ...context.attrs }} icon={RadarChartOutlinedSvg} />;

RadarChartOutlined.displayName = 'RadarChartOutlined';

export default RadarChartOutlined;