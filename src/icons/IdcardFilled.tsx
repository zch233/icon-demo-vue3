// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import IdcardFilledSvg from '@ant-design/icons-svg/lib/asn/IdcardFilled';

export interface IdcardFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const IdcardFilled: IdcardFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={IdcardFilledSvg} />
    ;

IdcardFilled.displayName = 'IdcardFilled';

export default FunctionalComponent;