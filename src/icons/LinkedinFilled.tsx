// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import LinkedinFilledSvg from '@ant-design/icons-svg/lib/asn/LinkedinFilled';

export interface LinkedinFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LinkedinFilled: LinkedinFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={LinkedinFilledSvg} />
    ;

LinkedinFilled.displayName = 'LinkedinFilled';

export default LinkedinFilled;