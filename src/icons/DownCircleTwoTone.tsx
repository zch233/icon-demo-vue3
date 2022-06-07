// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DownCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/DownCircleTwoTone';

export interface DownCircleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DownCircleTwoTone: DownCircleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DownCircleTwoToneSvg} />
    ;

DownCircleTwoTone.displayName = 'DownCircleTwoTone';

export default FunctionalComponent;