// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MoneyCollectFilledSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectFilled';

export interface MoneyCollectFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MoneyCollectFilled: MoneyCollectFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MoneyCollectFilledSvg} />
    ;

MoneyCollectFilled.displayName = 'MoneyCollectFilled';

export default FunctionalComponent;