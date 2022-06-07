// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RightCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightCircleTwoTone';

export interface RightCircleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RightCircleTwoTone: RightCircleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RightCircleTwoToneSvg} />
    ;

RightCircleTwoTone.displayName = 'RightCircleTwoTone';

export default FunctionalComponent;