// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FlagFilledSvg from '@ant-design/icons-svg/lib/asn/FlagFilled';

export interface FlagFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FlagFilled: FlagFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FlagFilledSvg} />
    ;

FlagFilled.displayName = 'FlagFilled';

export default FunctionalComponent;