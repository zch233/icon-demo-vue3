// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RestTwoToneSvg from '@ant-design/icons-svg/lib/asn/RestTwoTone';

export interface RestTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RestTwoTone: RestTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RestTwoToneSvg} />
    ;

RestTwoTone.displayName = 'RestTwoTone';

export default FunctionalComponent;