// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ControlFilledSvg from '@ant-design/icons-svg/lib/asn/ControlFilled';

export interface ControlFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ControlFilled: ControlFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ControlFilledSvg} />
    ;

ControlFilled.displayName = 'ControlFilled';

export default FunctionalComponent;