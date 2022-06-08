// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import NotificationOutlinedSvg from '@ant-design/icons-svg/lib/asn/NotificationOutlined';

export interface NotificationOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const NotificationOutlined: NotificationOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={NotificationOutlinedSvg} />;

NotificationOutlined.displayName = 'NotificationOutlined';

export default NotificationOutlined;