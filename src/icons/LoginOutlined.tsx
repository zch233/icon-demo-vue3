// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LoginOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoginOutlined';

export interface LoginOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LoginOutlined: LoginOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LoginOutlinedSvg} />
    ;

LoginOutlined.displayName = 'LoginOutlined';

export default FunctionalComponent;