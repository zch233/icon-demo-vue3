// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MinusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MinusCircleFilled';

export interface MinusCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MinusCircleFilled: MinusCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MinusCircleFilledSvg} />
    ;

MinusCircleFilled.displayName = 'MinusCircleFilled';

export default FunctionalComponent;