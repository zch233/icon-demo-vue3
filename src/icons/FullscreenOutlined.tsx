// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FullscreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenOutlined';

export interface FullscreenOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FullscreenOutlined: FullscreenOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FullscreenOutlinedSvg} />
    ;

FullscreenOutlined.displayName = 'FullscreenOutlined';

export default FunctionalComponent;