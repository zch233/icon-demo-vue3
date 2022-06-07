// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import MinusOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusOutlined';

export interface MinusOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MinusOutlined: MinusOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={MinusOutlinedSvg} />
    ;

MinusOutlined.displayName = 'MinusOutlined';

export default MinusOutlined;