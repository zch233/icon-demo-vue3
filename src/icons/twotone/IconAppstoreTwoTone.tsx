// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AppstoreTwoToneSvg from 'icon-base/es/asn/AppstoreTwoTone';

export interface AppstoreTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAppstoreTwoTone: AppstoreTwoToneIconType = (props, context) => (
    <Icon name='AppstoreTwoTone' {...{ ...props, ...context.attrs }} icon={AppstoreTwoToneSvg} />
);

IconAppstoreTwoTone.displayName = 'IconAppstoreTwoTone';
IconAppstoreTwoTone.theme = 'twotone';
IconAppstoreTwoTone.originName = 'appstore';

export default IconAppstoreTwoTone;
