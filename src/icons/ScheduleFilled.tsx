// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ScheduleFilledSvg from '@ant-design/icons-svg/lib/asn/ScheduleFilled';

export interface ScheduleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ScheduleFilled: ScheduleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ScheduleFilledSvg} />;

ScheduleFilled.displayName = 'ScheduleFilled';

export default FunctionalComponent;