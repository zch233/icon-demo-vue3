// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlertTwoToneSvg from '@ant-design/icons-svg/es/asn/AlertTwoTone';

export interface AlertTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAlertTwoTone: AlertTwoToneIconType = (props, context) => (
    <Icon name='AlertTwoTone' {...{ ...props, ...context.attrs }} icon={AlertTwoToneSvg} />
);

IconAlertTwoTone.displayName = 'IconAlertTwoTone';

export default IconAlertTwoTone;