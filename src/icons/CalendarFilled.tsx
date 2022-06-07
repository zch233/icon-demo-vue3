// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import CalendarFilledSvg from '@ant-design/icons-svg/lib/asn/CalendarFilled';

export interface CalendarFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CalendarFilled: CalendarFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={CalendarFilledSvg} />
    ;

CalendarFilled.displayName = 'CalendarFilled';

export default CalendarFilled;