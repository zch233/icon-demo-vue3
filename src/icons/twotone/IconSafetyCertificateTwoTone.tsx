// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SafetyCertificateTwoToneSvg from 'icon-base/es/asn/SafetyCertificateTwoTone';

export interface SafetyCertificateTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSafetyCertificateTwoTone: SafetyCertificateTwoToneIconType = (props, context) => (
    <Icon name='SafetyCertificateTwoTone' {...{ ...props, ...context.attrs }} icon={SafetyCertificateTwoToneSvg} />
);

IconSafetyCertificateTwoTone.displayName = 'IconSafetyCertificateTwoTone';
IconSafetyCertificateTwoTone.theme = 'twotone';
IconSafetyCertificateTwoTone.originName = 'safety-certificate';

export default IconSafetyCertificateTwoTone;
