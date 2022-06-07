// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AppleOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppleOutlined';

export interface AppleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AppleOutlined: AppleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AppleOutlinedSvg} />
    ;

AppleOutlined.displayName = 'AppleOutlined';

export default FunctionalComponent;