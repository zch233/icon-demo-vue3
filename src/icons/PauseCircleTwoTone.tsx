// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PauseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PauseCircleTwoTone';

export interface PauseCircleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PauseCircleTwoTone: PauseCircleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PauseCircleTwoToneSvg} />
    ;

PauseCircleTwoTone.displayName = 'PauseCircleTwoTone';

export default FunctionalComponent;