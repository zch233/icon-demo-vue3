// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import EnvironmentFilledSvg from '@ant-design/icons-svg/lib/asn/EnvironmentFilled';

export interface EnvironmentFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const EnvironmentFilled: EnvironmentFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={EnvironmentFilledSvg} />
    ;

EnvironmentFilled.displayName = 'EnvironmentFilled';

export default EnvironmentFilled;