// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ControlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ControlOutlined';

export interface ControlOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ControlOutlined: ControlOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ControlOutlinedSvg} />
    ;

ControlOutlined.displayName = 'ControlOutlined';

export default FunctionalComponent;