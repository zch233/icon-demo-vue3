// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import HeatMapOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeatMapOutlined';

export interface HeatMapOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const HeatMapOutlined: HeatMapOutlinedIconType = (props, context) => <Icon name='HeatMapOutlined' {...{ ...props, ...context.attrs }} icon={HeatMapOutlinedSvg} />;

HeatMapOutlined.displayName = 'HeatMapOutlined';

export default HeatMapOutlined;