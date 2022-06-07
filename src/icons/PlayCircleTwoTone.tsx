// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PlayCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlayCircleTwoTone';

export interface PlayCircleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PlayCircleTwoTone: PlayCircleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PlayCircleTwoToneSvg} />
    ;

PlayCircleTwoTone.displayName = 'PlayCircleTwoTone';

export default FunctionalComponent;