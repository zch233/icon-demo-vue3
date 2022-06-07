// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RightSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightSquareTwoTone';

export interface RightSquareTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RightSquareTwoTone: RightSquareTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RightSquareTwoToneSvg} />
    ;

RightSquareTwoTone.displayName = 'RightSquareTwoTone';

export default FunctionalComponent;