// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ContainerOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContainerOutlined';

export interface ContainerOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ContainerOutlined: ContainerOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ContainerOutlinedSvg} />
    ;

ContainerOutlined.displayName = 'ContainerOutlined';

export default FunctionalComponent;