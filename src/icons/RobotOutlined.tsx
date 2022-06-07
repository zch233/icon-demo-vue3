// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RobotOutlinedSvg from '@ant-design/icons-svg/lib/asn/RobotOutlined';

export interface RobotOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RobotOutlined: RobotOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RobotOutlinedSvg} />
    ;

RobotOutlined.displayName = 'RobotOutlined';

export default FunctionalComponent;