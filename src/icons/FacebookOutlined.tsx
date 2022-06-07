// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FacebookOutlinedSvg from '@ant-design/icons-svg/lib/asn/FacebookOutlined';

export interface FacebookOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FacebookOutlined: FacebookOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FacebookOutlinedSvg} />
    ;

FacebookOutlined.displayName = 'FacebookOutlined';

export default FunctionalComponent;