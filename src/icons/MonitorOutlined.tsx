// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MonitorOutlinedSvg from '@ant-design/icons-svg/lib/asn/MonitorOutlined';

export interface MonitorOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MonitorOutlined: MonitorOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MonitorOutlinedSvg} />
    ;

MonitorOutlined.displayName = 'MonitorOutlined';

export default FunctionalComponent;