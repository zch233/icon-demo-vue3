// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExclamationCircleTwoToneSvg from 'icon-base/es/asn/ExclamationCircleTwoTone';

export interface ExclamationCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconExclamationCircleTwoTone: ExclamationCircleTwoToneIconType = (props, context) => (
    <Icon name='ExclamationCircleTwoTone' {...{ ...props, ...context.attrs }} icon={ExclamationCircleTwoToneSvg} />
);

IconExclamationCircleTwoTone.displayName = 'IconExclamationCircleTwoTone';
IconExclamationCircleTwoTone.theme = 'twotone';
IconExclamationCircleTwoTone.originName = 'exclamation-circle';

export default IconExclamationCircleTwoTone;
