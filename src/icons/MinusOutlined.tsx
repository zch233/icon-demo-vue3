// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MinusOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusOutlined';

export interface MinusOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MinusOutlined: MinusOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MinusOutlinedSvg} />
    ;

MinusOutlined.displayName = 'MinusOutlined';

export default FunctionalComponent;