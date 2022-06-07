// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DeploymentUnitOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeploymentUnitOutlined';

export interface DeploymentUnitOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DeploymentUnitOutlined: DeploymentUnitOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DeploymentUnitOutlinedSvg} />
    ;

DeploymentUnitOutlined.displayName = 'DeploymentUnitOutlined';

export default FunctionalComponent;