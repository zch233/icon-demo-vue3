// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import VideoCameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraOutlined';

export interface VideoCameraOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const VideoCameraOutlined: VideoCameraOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={VideoCameraOutlinedSvg} />
    ;

VideoCameraOutlined.displayName = 'VideoCameraOutlined';

export default FunctionalComponent;