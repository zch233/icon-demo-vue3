// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import CalendarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalendarOutlined';

export interface CalendarOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CalendarOutlined: CalendarOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={CalendarOutlinedSvg} />
    ;

CalendarOutlined.displayName = 'CalendarOutlined';

export default CalendarOutlined;