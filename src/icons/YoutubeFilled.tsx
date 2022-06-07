// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import YoutubeFilledSvg from '@ant-design/icons-svg/lib/asn/YoutubeFilled';

export interface YoutubeFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const YoutubeFilled: YoutubeFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={YoutubeFilledSvg} />
    ;

YoutubeFilled.displayName = 'YoutubeFilled';

export default FunctionalComponent;