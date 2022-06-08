// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UserOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserOutlined';

export interface UserOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UserOutlined: UserOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={UserOutlinedSvg} />;

UserOutlined.displayName = 'UserOutlined';

export default UserOutlined;