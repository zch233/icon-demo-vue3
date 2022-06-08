// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ProfileTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileTwoTone';

export interface ProfileTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ProfileTwoTone: ProfileTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ProfileTwoToneSvg} />;

ProfileTwoTone.displayName = 'ProfileTwoTone';

export default ProfileTwoTone;