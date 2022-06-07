// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import UserAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserAddOutlined';

export interface UserAddOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UserAddOutlined: UserAddOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={UserAddOutlinedSvg} />
    ;

UserAddOutlined.displayName = 'UserAddOutlined';

export default FunctionalComponent;