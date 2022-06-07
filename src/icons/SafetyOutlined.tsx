// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import SafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyOutlined';

export interface SafetyOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SafetyOutlined: SafetyOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={SafetyOutlinedSvg} />
    ;

SafetyOutlined.displayName = 'SafetyOutlined';

export default SafetyOutlined;