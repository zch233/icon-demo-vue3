// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SkinTwoToneSvg from '@ant-design/icons-svg/lib/asn/SkinTwoTone';

export interface SkinTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SkinTwoTone: SkinTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SkinTwoToneSvg} />
    ;

SkinTwoTone.displayName = 'SkinTwoTone';

export default FunctionalComponent;