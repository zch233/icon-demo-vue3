// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LockFilledSvg from '@ant-design/icons-svg/lib/asn/LockFilled';

export interface LockFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LockFilled: LockFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LockFilledSvg} />
    ;

LockFilled.displayName = 'LockFilled';

export default FunctionalComponent;