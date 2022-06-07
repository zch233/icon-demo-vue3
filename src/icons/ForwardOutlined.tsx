// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import ForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForwardOutlined';

export interface ForwardOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ForwardOutlined: ForwardOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={ForwardOutlinedSvg} />
    ;

ForwardOutlined.displayName = 'ForwardOutlined';

export default ForwardOutlined;