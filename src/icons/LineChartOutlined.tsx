// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import LineChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineChartOutlined';

export interface LineChartOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LineChartOutlined: LineChartOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={LineChartOutlinedSvg} />
    ;

LineChartOutlined.displayName = 'LineChartOutlined';

export default LineChartOutlined;