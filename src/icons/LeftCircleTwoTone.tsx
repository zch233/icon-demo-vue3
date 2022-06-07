// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LeftCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/LeftCircleTwoTone';

export interface LeftCircleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LeftCircleTwoTone: LeftCircleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LeftCircleTwoToneSvg} />
    ;

LeftCircleTwoTone.displayName = 'LeftCircleTwoTone';

export default FunctionalComponent;