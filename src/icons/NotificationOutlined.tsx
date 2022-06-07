// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import NotificationOutlinedSvg from '@ant-design/icons-svg/lib/asn/NotificationOutlined';

export interface NotificationOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const NotificationOutlined: NotificationOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={NotificationOutlinedSvg} />
    ;

NotificationOutlined.displayName = 'NotificationOutlined';

export default FunctionalComponent;