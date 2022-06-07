// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CalendarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalendarOutlined';

export interface CalendarOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CalendarOutlined: CalendarOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CalendarOutlinedSvg} />
    ;

CalendarOutlined.displayName = 'CalendarOutlined';

export default FunctionalComponent;