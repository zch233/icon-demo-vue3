// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import NotificationTwoToneSvg from '@ant-design/icons-svg/lib/asn/NotificationTwoTone';

export interface NotificationTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const NotificationTwoTone: NotificationTwoToneIconType = (props, context) => <Icon name='NotificationTwoTone' {...{ ...props, ...context.attrs }} icon={NotificationTwoToneSvg} />;

NotificationTwoTone.displayName = 'NotificationTwoTone';

export default NotificationTwoTone;