// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ProfileFilledSvg from '@ant-design/icons-svg/lib/asn/ProfileFilled';

export interface ProfileFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ProfileFilled: ProfileFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ProfileFilledSvg} />;

ProfileFilled.displayName = 'ProfileFilled';

export default FunctionalComponent;