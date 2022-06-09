// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UserAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserAddOutlined';

export interface UserAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UserAddOutlined: UserAddOutlinedIconType = (props, context) => <Icon name='UserAddOutlined' {...{ ...props, ...context.attrs }} icon={UserAddOutlinedSvg} />;

UserAddOutlined.displayName = 'UserAddOutlined';

export default UserAddOutlined;