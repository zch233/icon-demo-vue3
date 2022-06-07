// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import UserDeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserDeleteOutlined';

export interface UserDeleteOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UserDeleteOutlined: UserDeleteOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={UserDeleteOutlinedSvg} />
    ;

UserDeleteOutlined.displayName = 'UserDeleteOutlined';

export default UserDeleteOutlined;