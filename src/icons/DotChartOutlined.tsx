// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DotChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/DotChartOutlined';

export interface DotChartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DotChartOutlined: DotChartOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DotChartOutlinedSvg} />;

DotChartOutlined.displayName = 'DotChartOutlined';

export default DotChartOutlined;