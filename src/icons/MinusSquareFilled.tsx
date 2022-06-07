// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import MinusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MinusSquareFilled';

export interface MinusSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MinusSquareFilled: MinusSquareFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={MinusSquareFilledSvg} />
    ;

MinusSquareFilled.displayName = 'MinusSquareFilled';

export default MinusSquareFilled;