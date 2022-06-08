// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AreaChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/AreaChartOutlined';

export interface AreaChartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AreaChartOutlined: AreaChartOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={AreaChartOutlinedSvg} />;

AreaChartOutlined.displayName = 'AreaChartOutlined';

export default AreaChartOutlined;