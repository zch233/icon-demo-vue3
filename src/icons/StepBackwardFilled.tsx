// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import StepBackwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepBackwardFilled';

export interface StepBackwardFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const StepBackwardFilled: StepBackwardFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={StepBackwardFilledSvg} />
    ;

StepBackwardFilled.displayName = 'StepBackwardFilled';

export default FunctionalComponent;