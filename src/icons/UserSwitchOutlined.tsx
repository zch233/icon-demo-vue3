// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import UserSwitchOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserSwitchOutlined';

export interface UserSwitchOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UserSwitchOutlined: UserSwitchOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={UserSwitchOutlinedSvg} />
    ;

UserSwitchOutlined.displayName = 'UserSwitchOutlined';

export default FunctionalComponent;