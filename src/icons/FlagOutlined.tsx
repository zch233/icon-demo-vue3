// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FlagOutlinedSvg from '@ant-design/icons-svg/lib/asn/FlagOutlined';

export interface FlagOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FlagOutlined: FlagOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FlagOutlinedSvg} />
    ;

FlagOutlined.displayName = 'FlagOutlined';

export default FunctionalComponent;