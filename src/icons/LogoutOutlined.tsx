// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LogoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LogoutOutlined';

export interface LogoutOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LogoutOutlined: LogoutOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LogoutOutlinedSvg} />
    ;

LogoutOutlined.displayName = 'LogoutOutlined';

export default FunctionalComponent;