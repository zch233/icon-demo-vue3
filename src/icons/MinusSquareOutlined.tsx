// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MinusSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusSquareOutlined';

export interface MinusSquareOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MinusSquareOutlined: MinusSquareOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MinusSquareOutlinedSvg} />
    ;

MinusSquareOutlined.displayName = 'MinusSquareOutlined';

export default FunctionalComponent;