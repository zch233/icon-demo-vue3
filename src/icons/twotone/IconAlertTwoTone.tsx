// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlertTwoToneSvg from 'icon-base/es/asn/AlertTwoTone';

export interface AlertTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAlertTwoTone: AlertTwoToneIconType = (props, context) => <Icon name='AlertTwoTone' {...{ ...props, ...context.attrs }} icon={AlertTwoToneSvg} />;

IconAlertTwoTone.displayName = 'IconAlertTwoTone';
IconAlertTwoTone.theme = 'twotone';
IconAlertTwoTone.originName = 'alert';

export default IconAlertTwoTone;
