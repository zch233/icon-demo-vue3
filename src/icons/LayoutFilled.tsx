// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import LayoutFilledSvg from '@ant-design/icons-svg/lib/asn/LayoutFilled';

export interface LayoutFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LayoutFilled: LayoutFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={LayoutFilledSvg} />
    ;

LayoutFilled.displayName = 'LayoutFilled';

export default LayoutFilled;