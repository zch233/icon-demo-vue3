// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FastForwardFilledSvg from '@ant-design/icons-svg/lib/asn/FastForwardFilled';

export interface FastForwardFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FastForwardFilled: FastForwardFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FastForwardFilledSvg} />
    ;

FastForwardFilled.displayName = 'FastForwardFilled';

export default FunctionalComponent;