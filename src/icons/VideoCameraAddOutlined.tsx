// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import VideoCameraAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraAddOutlined';

export interface VideoCameraAddOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const VideoCameraAddOutlined: VideoCameraAddOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={VideoCameraAddOutlinedSvg} />
    ;

VideoCameraAddOutlined.displayName = 'VideoCameraAddOutlined';

export default FunctionalComponent;