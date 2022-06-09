// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import NotificationFilledSvg from '@ant-design/icons-svg/lib/asn/NotificationFilled';

export interface NotificationFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const NotificationFilled: NotificationFilledIconType = (props, context) => <Icon name='NotificationFilled' {...{ ...props, ...context.attrs }} icon={NotificationFilledSvg} />;

NotificationFilled.displayName = 'NotificationFilled';

export default NotificationFilled;