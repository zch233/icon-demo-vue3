// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import EnvironmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnvironmentOutlined';

export interface EnvironmentOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const EnvironmentOutlined: EnvironmentOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={EnvironmentOutlinedSvg} />
    ;

EnvironmentOutlined.displayName = 'EnvironmentOutlined';

export default FunctionalComponent;