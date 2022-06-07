// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CalendarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarTwoTone';

export interface CalendarTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CalendarTwoTone: CalendarTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CalendarTwoToneSvg} />
    ;

CalendarTwoTone.displayName = 'CalendarTwoTone';

export default FunctionalComponent;