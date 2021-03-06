// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import NotificationTwoToneSvg from 'icon-base/es/asn/NotificationTwoTone';

export interface NotificationTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconNotificationTwoTone: NotificationTwoToneIconType = (props, context) => (
    <Icon name='NotificationTwoTone' {...{ ...props, ...context.attrs }} icon={NotificationTwoToneSvg} />
);

IconNotificationTwoTone.displayName = 'IconNotificationTwoTone';
IconNotificationTwoTone.theme = 'twotone';
IconNotificationTwoTone.originName = 'notification';

export default IconNotificationTwoTone;
