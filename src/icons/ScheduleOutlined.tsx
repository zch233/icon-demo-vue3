// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import ScheduleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScheduleOutlined';

export interface ScheduleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ScheduleOutlined: ScheduleOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={ScheduleOutlinedSvg} />
    ;

ScheduleOutlined.displayName = 'ScheduleOutlined';

export default ScheduleOutlined;