// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import UnlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnlockOutlined';

export interface UnlockOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UnlockOutlined: UnlockOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={UnlockOutlinedSvg} />
    ;

UnlockOutlined.displayName = 'UnlockOutlined';

export default FunctionalComponent;