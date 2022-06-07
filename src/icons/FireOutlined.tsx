// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FireOutlinedSvg from '@ant-design/icons-svg/lib/asn/FireOutlined';

export interface FireOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FireOutlined: FireOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FireOutlinedSvg} />
    ;

FireOutlined.displayName = 'FireOutlined';

export default FireOutlined;