// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import WarningFilledSvg from '@ant-design/icons-svg/lib/asn/WarningFilled';

export interface WarningFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WarningFilled: WarningFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={WarningFilledSvg} />
    ;

WarningFilled.displayName = 'WarningFilled';

export default WarningFilled;