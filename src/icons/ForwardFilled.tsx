// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ForwardFilledSvg from '@ant-design/icons-svg/lib/asn/ForwardFilled';

export interface ForwardFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ForwardFilled: ForwardFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ForwardFilledSvg} />
    ;

ForwardFilled.displayName = 'ForwardFilled';

export default FunctionalComponent;