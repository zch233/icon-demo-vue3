// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ClockCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ClockCircleFilled';

export interface ClockCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ClockCircleFilled: ClockCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ClockCircleFilledSvg} />
    ;

ClockCircleFilled.displayName = 'ClockCircleFilled';

export default FunctionalComponent;