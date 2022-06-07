// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ContainerTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContainerTwoTone';

export interface ContainerTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ContainerTwoTone: ContainerTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ContainerTwoToneSvg} />
    ;

ContainerTwoTone.displayName = 'ContainerTwoTone';

export default FunctionalComponent;