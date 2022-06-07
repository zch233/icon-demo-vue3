// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AudioTwoToneSvg from '@ant-design/icons-svg/lib/asn/AudioTwoTone';

export interface AudioTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AudioTwoTone: AudioTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AudioTwoToneSvg} />
    ;

AudioTwoTone.displayName = 'AudioTwoTone';

export default FunctionalComponent;