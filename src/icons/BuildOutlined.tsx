// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BuildOutlinedSvg from '@ant-design/icons-svg/lib/asn/BuildOutlined';

export interface BuildOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BuildOutlined: BuildOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BuildOutlinedSvg} />
    ;

BuildOutlined.displayName = 'BuildOutlined';

export default FunctionalComponent;