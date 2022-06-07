// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import VideoCameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoCameraTwoTone';

export interface VideoCameraTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const VideoCameraTwoTone: VideoCameraTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={VideoCameraTwoToneSvg} />
    ;

VideoCameraTwoTone.displayName = 'VideoCameraTwoTone';

export default FunctionalComponent;