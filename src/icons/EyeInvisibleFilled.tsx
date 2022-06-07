// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import EyeInvisibleFilledSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleFilled';

export interface EyeInvisibleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const EyeInvisibleFilled: EyeInvisibleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={EyeInvisibleFilledSvg} />
    ;

EyeInvisibleFilled.displayName = 'EyeInvisibleFilled';

export default FunctionalComponent;