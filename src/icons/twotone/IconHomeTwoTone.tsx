// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HomeTwoToneSvg from 'icon-base/es/asn/HomeTwoTone';

export interface HomeTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHomeTwoTone: HomeTwoToneIconType = (props, context) => <Icon name='HomeTwoTone' {...{ ...props, ...context.attrs }} icon={HomeTwoToneSvg} />;

IconHomeTwoTone.displayName = 'IconHomeTwoTone';
IconHomeTwoTone.theme = 'twotone';
IconHomeTwoTone.originName = 'home';

export default IconHomeTwoTone;
