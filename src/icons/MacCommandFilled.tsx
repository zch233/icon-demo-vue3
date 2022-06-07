// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MacCommandFilledSvg from '@ant-design/icons-svg/lib/asn/MacCommandFilled';

export interface MacCommandFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MacCommandFilled: MacCommandFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MacCommandFilledSvg} />
    ;

MacCommandFilled.displayName = 'MacCommandFilled';

export default FunctionalComponent;