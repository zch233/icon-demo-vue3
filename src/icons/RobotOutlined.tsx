// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RobotOutlinedSvg from '@ant-design/icons-svg/lib/asn/RobotOutlined';

export interface RobotOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RobotOutlined: RobotOutlinedIconType = (props, context) => <Icon name='RobotOutlined' {...{ ...props, ...context.attrs }} icon={RobotOutlinedSvg} />;

RobotOutlined.displayName = 'RobotOutlined';

export default RobotOutlined;