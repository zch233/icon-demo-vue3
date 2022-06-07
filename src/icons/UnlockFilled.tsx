// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import UnlockFilledSvg from '@ant-design/icons-svg/lib/asn/UnlockFilled';

export interface UnlockFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UnlockFilled: UnlockFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={UnlockFilledSvg} />
    ;

UnlockFilled.displayName = 'UnlockFilled';

export default UnlockFilled;