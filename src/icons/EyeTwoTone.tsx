// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import EyeTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeTwoTone';

export interface EyeTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const EyeTwoTone: EyeTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={EyeTwoToneSvg} />
    ;

EyeTwoTone.displayName = 'EyeTwoTone';

export default FunctionalComponent;