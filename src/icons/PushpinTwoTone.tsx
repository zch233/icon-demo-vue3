// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PushpinTwoToneSvg from '@ant-design/icons-svg/lib/asn/PushpinTwoTone';

export interface PushpinTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PushpinTwoTone: PushpinTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PushpinTwoToneSvg} />
    ;

PushpinTwoTone.displayName = 'PushpinTwoTone';

export default FunctionalComponent;