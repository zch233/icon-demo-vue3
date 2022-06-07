// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import RobotFilledSvg from '@ant-design/icons-svg/lib/asn/RobotFilled';

export interface RobotFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RobotFilled: RobotFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={RobotFilledSvg} />
    ;

RobotFilled.displayName = 'RobotFilled';

export default RobotFilled;