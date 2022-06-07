// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CloseSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloseSquareTwoTone';

export interface CloseSquareTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CloseSquareTwoTone: CloseSquareTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CloseSquareTwoToneSvg} />
    ;

CloseSquareTwoTone.displayName = 'CloseSquareTwoTone';

export default FunctionalComponent;