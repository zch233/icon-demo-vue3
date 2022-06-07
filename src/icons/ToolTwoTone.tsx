// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ToolTwoToneSvg from '@ant-design/icons-svg/lib/asn/ToolTwoTone';

export interface ToolTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ToolTwoTone: ToolTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ToolTwoToneSvg} />
    ;

ToolTwoTone.displayName = 'ToolTwoTone';

export default FunctionalComponent;