// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import StepBackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepBackwardOutlined';

export interface StepBackwardOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const StepBackwardOutlined: StepBackwardOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={StepBackwardOutlinedSvg} />
    ;

StepBackwardOutlined.displayName = 'StepBackwardOutlined';

export default FunctionalComponent;