// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AudioOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioOutlined';

export interface AudioOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AudioOutlined: AudioOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AudioOutlinedSvg} />
    ;

AudioOutlined.displayName = 'AudioOutlined';

export default FunctionalComponent;