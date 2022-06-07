// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MobileTwoToneSvg from '@ant-design/icons-svg/lib/asn/MobileTwoTone';

export interface MobileTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MobileTwoTone: MobileTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MobileTwoToneSvg} />
    ;

MobileTwoTone.displayName = 'MobileTwoTone';

export default FunctionalComponent;