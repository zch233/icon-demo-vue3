// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ClockCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClockCircleOutlined';

export interface ClockCircleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ClockCircleOutlined: ClockCircleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ClockCircleOutlinedSvg} />
    ;

ClockCircleOutlined.displayName = 'ClockCircleOutlined';

export default FunctionalComponent;