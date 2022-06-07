// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SwitcherOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwitcherOutlined';

export interface SwitcherOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SwitcherOutlined: SwitcherOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SwitcherOutlinedSvg} />
    ;

SwitcherOutlined.displayName = 'SwitcherOutlined';

export default FunctionalComponent;