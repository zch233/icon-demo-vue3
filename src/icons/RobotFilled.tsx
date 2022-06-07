// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RobotFilledSvg from '@ant-design/icons-svg/lib/asn/RobotFilled';

export interface RobotFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RobotFilled: RobotFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RobotFilledSvg} />
    ;

RobotFilled.displayName = 'RobotFilled';

export default FunctionalComponent;