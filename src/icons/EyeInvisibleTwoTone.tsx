// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import EyeInvisibleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleTwoTone';

export interface EyeInvisibleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const EyeInvisibleTwoTone: EyeInvisibleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={EyeInvisibleTwoToneSvg} />
    ;

EyeInvisibleTwoTone.displayName = 'EyeInvisibleTwoTone';

export default FunctionalComponent;