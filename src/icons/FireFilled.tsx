// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FireFilledSvg from '@ant-design/icons-svg/lib/asn/FireFilled';

export interface FireFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FireFilled: FireFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FireFilledSvg} />
    ;

FireFilled.displayName = 'FireFilled';

export default FunctionalComponent;