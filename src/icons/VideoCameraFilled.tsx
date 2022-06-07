// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import VideoCameraFilledSvg from '@ant-design/icons-svg/lib/asn/VideoCameraFilled';

export interface VideoCameraFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const VideoCameraFilled: VideoCameraFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={VideoCameraFilledSvg} />
    ;

VideoCameraFilled.displayName = 'VideoCameraFilled';

export default FunctionalComponent;