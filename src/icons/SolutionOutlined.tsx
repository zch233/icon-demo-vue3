// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SolutionOutlinedSvg from '@ant-design/icons-svg/lib/asn/SolutionOutlined';

export interface SolutionOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SolutionOutlined: SolutionOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SolutionOutlinedSvg} />
    ;

SolutionOutlined.displayName = 'SolutionOutlined';

export default FunctionalComponent;