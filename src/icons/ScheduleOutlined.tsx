// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ScheduleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScheduleOutlined';

export interface ScheduleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ScheduleOutlined: ScheduleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ScheduleOutlinedSvg} />
    ;

ScheduleOutlined.displayName = 'ScheduleOutlined';

export default FunctionalComponent;