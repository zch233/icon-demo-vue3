// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/CameraTwoTone';

export interface CameraTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CameraTwoTone: CameraTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CameraTwoToneSvg} />
    ;

CameraTwoTone.displayName = 'CameraTwoTone';

export default FunctionalComponent;