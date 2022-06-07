// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MinusCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusCircleOutlined';

export interface MinusCircleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MinusCircleOutlined: MinusCircleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MinusCircleOutlinedSvg} />
    ;

MinusCircleOutlined.displayName = 'MinusCircleOutlined';

export default FunctionalComponent;