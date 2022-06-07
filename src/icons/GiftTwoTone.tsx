// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import GiftTwoToneSvg from '@ant-design/icons-svg/lib/asn/GiftTwoTone';

export interface GiftTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const GiftTwoTone: GiftTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={GiftTwoToneSvg} />
    ;

GiftTwoTone.displayName = 'GiftTwoTone';

export default FunctionalComponent;