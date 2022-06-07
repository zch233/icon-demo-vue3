// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import StopFilledSvg from '@ant-design/icons-svg/lib/asn/StopFilled';

export interface StopFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const StopFilled: StopFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={StopFilledSvg} />
    ;

StopFilled.displayName = 'StopFilled';

export default FunctionalComponent;