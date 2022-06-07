// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import UserOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserOutlined';

export interface UserOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UserOutlined: UserOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={UserOutlinedSvg} />
    ;

UserOutlined.displayName = 'UserOutlined';

export default FunctionalComponent;