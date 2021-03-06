// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProfileTwoToneSvg from 'icon-base/es/asn/ProfileTwoTone';

export interface ProfileTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconProfileTwoTone: ProfileTwoToneIconType = (props, context) => (
    <Icon name='ProfileTwoTone' {...{ ...props, ...context.attrs }} icon={ProfileTwoToneSvg} />
);

IconProfileTwoTone.displayName = 'IconProfileTwoTone';
IconProfileTwoTone.theme = 'twotone';
IconProfileTwoTone.originName = 'profile';

export default IconProfileTwoTone;
