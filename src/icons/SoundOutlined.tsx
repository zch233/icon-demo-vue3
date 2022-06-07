// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/SoundOutlined';

export interface SoundOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SoundOutlined: SoundOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SoundOutlinedSvg} />
    ;

SoundOutlined.displayName = 'SoundOutlined';

export default FunctionalComponent;