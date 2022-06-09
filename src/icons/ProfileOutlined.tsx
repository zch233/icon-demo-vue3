// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ProfileOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProfileOutlined';

export interface ProfileOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ProfileOutlined: ProfileOutlinedIconType = (props, context) => <Icon name='ProfileOutlined' {...{ ...props, ...context.attrs }} icon={ProfileOutlinedSvg} />;

ProfileOutlined.displayName = 'ProfileOutlined';

export default ProfileOutlined;