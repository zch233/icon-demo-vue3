// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SoundFilledSvg from '@ant-design/icons-svg/lib/asn/SoundFilled';

export interface SoundFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SoundFilled: SoundFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SoundFilledSvg} />
    ;

SoundFilled.displayName = 'SoundFilled';

export default FunctionalComponent;