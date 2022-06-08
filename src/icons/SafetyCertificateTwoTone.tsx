// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SafetyCertificateTwoToneSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateTwoTone';

export interface SafetyCertificateTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SafetyCertificateTwoTone: SafetyCertificateTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SafetyCertificateTwoToneSvg} />;

SafetyCertificateTwoTone.displayName = 'SafetyCertificateTwoTone';

export default FunctionalComponent;