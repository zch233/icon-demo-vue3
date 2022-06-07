// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LockOutlinedSvg from '@ant-design/icons-svg/lib/asn/LockOutlined';

export interface LockOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LockOutlined: LockOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LockOutlinedSvg} />
    ;

LockOutlined.displayName = 'LockOutlined';

export default FunctionalComponent;