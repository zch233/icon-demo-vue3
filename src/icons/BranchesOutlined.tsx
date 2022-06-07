// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BranchesOutlinedSvg from '@ant-design/icons-svg/lib/asn/BranchesOutlined';

export interface BranchesOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BranchesOutlined: BranchesOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BranchesOutlinedSvg} />
    ;

BranchesOutlined.displayName = 'BranchesOutlined';

export default FunctionalComponent;