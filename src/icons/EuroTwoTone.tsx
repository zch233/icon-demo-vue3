// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import EuroTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroTwoTone';

export interface EuroTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const EuroTwoTone: EuroTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={EuroTwoToneSvg} />
    ;

EuroTwoTone.displayName = 'EuroTwoTone';

export default FunctionalComponent;