// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BellTwoToneSvg from '@ant-design/icons-svg/lib/asn/BellTwoTone';

export interface BellTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BellTwoTone: BellTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BellTwoToneSvg} />
    ;

BellTwoTone.displayName = 'BellTwoTone';

export default FunctionalComponent;